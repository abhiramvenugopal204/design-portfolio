"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import DotLoader from "./DotLoader";

interface ImageWithLoaderProps extends ImageProps {
  loaderSize?: number;
}

export function ImageWithLoader({ loaderSize = 80, className, ...props }: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-transparent">
          <DotLoader size={loaderSize} />
        </div>
      )}
      <Image
        {...props}
        ref={imgRef}
        className={`${className || ""} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

interface HtmlImgWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loaderSize?: number;
}

export function HtmlImgWithLoader({ loaderSize = 80, className, ...props }: HtmlImgWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-transparent">
          <DotLoader size={loaderSize} />
        </div>
      )}
      <img
        {...props}
        ref={imgRef}
        className={`${className || ""} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
