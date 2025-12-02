import React, { useState, MouseEvent } from 'react';
import ProductImg from './ProductImg';
import { img101 } from '../../assets/icons';
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react';
import { Button } from '../ui/button/button';

const ImgDisplay: React.FC = () => {
  const images: string[] = [img101, img101, img101, img101, img101, img101];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const VISIBLE_SIDE_COUNT = 3;
  const sideImages = images.slice(1, 1 + VISIBLE_SIDE_COUNT);
  const remainingCount = images.length - (1 + VISIBLE_SIDE_COUNT);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="mt-7 flex flex-col gap-3 lg:flex-row">
        <div
          className="relative h-[33.375rem] w-[26.75rem] cursor-pointer"
          onClick={() => openModal(activeIndex)}
        >
          <div>
            <ProductImg
              src={images[activeIndex]}
              alt="main-product"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute right-2 bottom-5 flex items-center gap-2 rounded bg-white px-4 py-1">
              <ZoomIn size={20} color="grey" />
              <span className="text-text-400">Closer Look</span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row gap-3 lg:w-auto lg:flex-col">
          {sideImages.map((img, i) => {
            const realIndex = i + 1;
            const isLastVisible = i === sideImages.length - 1;
            const showOverlay = isLastVisible && remainingCount > 0;

            return (
              <div
                key={realIndex}
                className="relative cursor-pointer"
                onClick={() => {
                  if (showOverlay) {
                    openModal(realIndex);
                  } else {
                    setActiveIndex(realIndex);
                  }
                }}
              >
                <ProductImg
                  src={img}
                  alt={`thumb-${realIndex}`}
                  className={`h-[10.35rem] w-[9.5rem] rounded object-cover ${activeIndex === realIndex && !showOverlay ? 'border-2 border-blue-600' : ''}`}
                />
                {showOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center rounded bg-black/50 text-xl font-bold text-white transition hover:bg-black/60">
                    +{remainingCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <Button
            onClick={closeModal}
            variant="primary"
            className="absolute top-4 right-4 z-[60] flex h-8 w-8 items-center justify-center rounded-md p-0"
            title="&times;"
          >
            <X size={16} strokeWidth={2} />
          </Button>

          <Button
            onClick={prevImage}
            variant="primary"
            className="absolute left-2 z-[60] flex h-8 w-8 items-center justify-center rounded-md p-0 md:left-8"
            title=" &lsaquo;"
          >
            <ArrowLeft size={16} strokeWidth={2} />
          </Button>

          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <ProductImg
              src={images[activeIndex]}
              alt="fullscreen-preview"
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
            />
          </div>

          <Button
            onClick={nextImage}
            variant="primary"
            className="absolute right-2 z-[60] flex h-8 w-8 items-center justify-center rounded-md p-0 md:right-8"
            title="&rsaquo;"
          >
            <ArrowRight size={16} strokeWidth={2} />
          </Button>
        </div>
      )}
    </>
  );
};

export default ImgDisplay;
