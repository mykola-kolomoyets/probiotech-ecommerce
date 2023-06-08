import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { ProductCarouselProps } from "./types";
import s from "./ProductCarousel.module.css";
import Image from "next/image";
import { useEvent } from "@/hooks/useEvent";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  className,
  images,
}) => {
  const sourceRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const isThumbsOverlapping = images.length > 4;

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = useEvent((e: React.MouseEvent) => {
    const targetRect = targetRef.current?.getBoundingClientRect();
    const sourceRect = sourceRef.current?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!targetRect || !sourceRect || !containerRect) return;

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio,
    });
  });

  useEffect(() => {
    currentImageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeImage]);

  return (
    <div className={clsx(s.wrap, className)}>
      <div
        ref={containerRef}
        className="relative block aspect-square max-h-[600px] w-full max-w-full overflow-hidden rounded-lg lg:max-w-[600px]"
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
        onMouseMove={isMobile ? undefined : handleMouseMove}
      >
        <Image
          className="h-full w-full object-cover"
          ref={sourceRef}
          src={images[activeImage] as string}
          width={600}
          height={600}
          alt="sdfdsfds"
        />
        <Image
          className="absolute translate-x-1/2 translate-y-1/2 scale-[200%]"
          style={{
            left: `${offset.left}px`,
            top: `${offset.top}px`,
            opacity: opacity,
          }}
          ref={targetRef}
          src={images[activeImage] as string}
          width={600}
          height={600}
          alt="sdfdsfds"
        />
      </div>
      <div className={s.inner}>
        <div className={s["thumbs-wrap"]}>
          {isThumbsOverlapping ? (
            <button
              className={clsx(s.navigation, s.prev, "focus-primary")}
              onClick={() => {
                if (activeImage === 0) return;

                setActiveImage((prev) => prev - 1);
              }}
            >
              -
            </button>
          ) : null}
          {images.map((image, index) => {
            return (
              <button
                key={index}
                className={clsx(
                  s["thumb-item"],
                  "focus-primary",
                  index === activeImage && s.active
                )}
                tabIndex={0}
                onClick={() => {
                  setActiveImage(index);
                }}
              >
                <Image
                  ref={index === activeImage ? currentImageRef : undefined}
                  className={s["thumb-image"]}
                  src={image}
                  width={200}
                  height={200}
                  alt="hello"
                />
              </button>
            );
          })}
          {isThumbsOverlapping ? (
            <button
              className={clsx(s.navigation, s.next, "focus-primary")}
              onClick={() => {
                if (activeImage === images.length - 1) return;

                setActiveImage((prev) => prev + 1);
              }}
            >
              +
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCarousel);
