export default function ScrollableImageGallery() {
  const items = [1, 2, 3];

  return (
    <div className="flex gap-4 md:gap-10 overflow-x-auto no-scrollbar w-full px-6 md:px-16 lg:px-24 pb-24 snap-x snap-mandatory z-10 items-end pt-10">
      {items.map((item, index) => {
        const isFirst = index === 0;
        return (
          <div
            key={item}
            className={`flex-shrink-0 aspect-[16/10] bg-[#22222A] rounded-2xl shadow-2xl flex items-center justify-center snap-start border border-white/5 ${
              isFirst ? "w-[85vw] md:w-[700px] lg:w-[900px]" : "w-[60vw] md:w-[450px] lg:w-[600px]"
            }`}
          >
            <div className="text-center">
               <svg className="w-12 h-12 text-white/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
               <p className="text-white/40 font-sans text-xl">Image Placeholder {item}</p>
             </div>
          </div>
        );
      })}
      {/* Empty spacer to allow the last item to be scrolled to the end */}
      <div className="w-[10vw] md:w-[100px] flex-shrink-0" />
    </div>
  );
}
