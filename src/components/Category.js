import React from "react";
import Image from "next/image";

export default function Category({ imageUrl, categoryName, href }) {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt={`${categoryName} Collection`}
        width={400}
        height={300}
        objectFit="cover"
        className="rounded-lg shadow w-full h-60"
      />
      <a
        href={href}
        className="absolute bottom-4 left-4 bg-[#4a7c59] text-[#f2e2d2] px-4 py-2 rounded-lg"
      >
        {categoryName}
      </a>
    </div>
  );
}