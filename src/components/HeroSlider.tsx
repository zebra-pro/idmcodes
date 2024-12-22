import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideContent from './hero/SlideContent';
import SlideControls from './hero/SlideControls';
import { slides } from '../data/heroSlides';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[600px] overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <SlideContent
          key={index}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
}