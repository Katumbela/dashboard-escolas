"use client";

import Image from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
  images: {
    id: number;
    url: string;
  }[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="relative flex flex-col-reverse items-start gap-5 md:flex-row">
      <div className="sticky top-5 flex w-full gap-x-4 gap-y-4 overflow-x-scroll hide-scrollbar md:w-fit md:flex-col md:overflow-x-visible">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-white ${
                index === imageIndex && "border-2 border-gray-600"
              }`}
              onClick={() => setImageIndex(index)}
            >
              <span className="sr-only">Ir para imagem {index + 1}</span>
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + image.url}
                className="absolute inset-0"
                alt="Thumbnail"
                fill
                priority
                sizes="(max-width: 999px) 72px, 60px"
                style={{
                  objectFit: "cover",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
