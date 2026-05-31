import { useRef, useState, useEffect } from "react";
import { HtmlImgWithLoader } from "./ImageWithLoader";

const simplitaImages = [
  "/scroll/simplita/workspace.svg",
  "/scroll/simplita/workspace-1.svg",
  "/scroll/simplita/Rules%20engine%20-%20Navigator.svg",
  "/scroll/simplita/Rules%20engine%20-%20Scenarios.svg",
  "/scroll/simplita/Rules%20engine%20-%20Events.svg",
  "/scroll/simplita/DB%20engine%20-%20Table.svg",
  "/scroll/simplita/DB%20engine%20-%20API-Implementation.svg",
  "/scroll/simplita/DB%20engine%20-%20API-request%20body.svg",
  "/scroll/simplita/Deployment%20-%20Run.svg",
  "/scroll/simplita/Deployment%20-Completed.svg",
  "/scroll/simplita/Authentication%20-%20Pages.svg",
  "/scroll/simplita/Login.svg",
  "/scroll/simplita/Signup.svg",
  "/scroll/simplita/Payments%20-%20Pages.svg",
  "/scroll/simplita/Payments%20-%20Pages-1.svg",
  "/scroll/simplita/Creation%20-%20Pages.svg"
];

// Duplicate the array 3 times to create an infinite scrolling illusion
const tripledImages = [...simplitaImages, ...simplitaImages, ...simplitaImages];

export default function ScrollableImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(simplitaImages.length);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize scroll position to the middle set on load
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalItems = simplitaImages.length;
    const children = container.children;
    if (children[totalItems]) {
      const containerRect = container.getBoundingClientRect();
      const childRect = children[totalItems].getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const paddingOffset = isMobile ? 24 : isTablet ? 64 : 96;

      const initialScrollOffset = container.scrollLeft + (childRect.left - containerRect.left) - paddingOffset;
      container.scrollLeft = initialScrollOffset;
    }
  }, []);

  // Autoplay functionality: advances to the next slide every 2.5s when not hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const children = container.children;
      let nextIndex = activeIndex + 1;
      
      const totalItems = simplitaImages.length;
      if (nextIndex >= children.length - 1) {
        nextIndex = totalItems;
      }

      const nextChild = children[nextIndex];
      if (nextChild) {
        const containerRect = container.getBoundingClientRect();
        const childRect = nextChild.getBoundingClientRect();
        
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const paddingOffset = isMobile ? 24 : isTablet ? 64 : 96;

        const scrollOffset = container.scrollLeft + (childRect.left - containerRect.left) - paddingOffset;
        
        container.scrollTo({
          left: scrollOffset,
          behavior: "smooth"
        });
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  // Track active item and silently teleport scroll position to create loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = container.children;
      let closestIndex = simplitaImages.length;
      let minDistance = Infinity;

      // Focus point on the left side of the screen
      const containerLeft = container.getBoundingClientRect().left;
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const paddingOffset = isMobile ? 40 : isTablet ? 100 : 140;
      const targetX = containerLeft + paddingOffset;

      for (let i = 0; i < children.length - 1; i++) {
        const child = children[i];
        const childRect = child.getBoundingClientRect();
        const distance = Math.abs(childRect.left - targetX);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      setActiveIndex(closestIndex);

      // Silent Teleportation for Infinite Loop
      const totalItems = simplitaImages.length;
      if (closestIndex < totalItems) {
        // Teleport forward by N items
        const setWidth = children[totalItems].getBoundingClientRect().left - children[0].getBoundingClientRect().left;
        container.scrollLeft += setWidth;
        setActiveIndex(closestIndex + totalItems);
      } else if (closestIndex >= totalItems * 2) {
        // Teleport backward by N items
        const setWidth = children[totalItems].getBoundingClientRect().left - children[0].getBoundingClientRect().left;
        container.scrollLeft -= setWidth;
        setActiveIndex(closestIndex - totalItems);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    
    // Re-check on window resize in case layouts shift
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar w-full px-6 md:px-16 lg:px-24 pb-24 snap-x snap-mandatory scroll-pl-6 md:scroll-pl-16 lg:scroll-pl-24 z-10 items-center pt-10"
    >
      {tripledImages.map((src, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 w-[78vw] md:w-[650px] lg:w-[820px] aspect-[16/10] snap-start"
          >
            <div
              className={`w-full h-full flex items-center justify-center transition-all duration-500 ease-out origin-center ${
                isActive
                  ? "scale-100 opacity-100 drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
                  : "scale-[0.88] opacity-40 hover:opacity-65"
              }`}
            >
              <HtmlImgWithLoader
                src={src}
                alt="Simplita Workflow Interface"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        );
      })}
      {/* Spacer to allow scrolling the last item past the screen left edge */}
      <div className="w-[30vw] md:w-[400px] flex-shrink-0" />
    </div>
  );
}
