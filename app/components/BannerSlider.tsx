"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Luxury Collection",
    subtitle: "Discover Elegance in Every Thread",
    description: "Premium shawls crafted with the finest materials",
    cta: "Shop Now",
    link: "/shawls",
    image:
      "https://pashtush.in/cdn/shop/products/pashtush-pashmina-pashtush-women-pure-wool-woolmark-certified-shawl-ethnic-weave-design-multicolour-31038810390582_1800x1800.jpg?v=1657368239",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Styles for Every Season",
    description: "Explore our latest collection of elegant shawls",
    cta: "View Collection",
    link: "/shawls",
    image:
      "https://pashmal.com/cdn/shop/files/DSC01492copy.jpg?v=1697000635&width=1946",
  },
  {
    id: 3,
    title: "Special Offers",
    subtitle: "Elegance Meets Affordability",
    description: "Find your perfect shawl at unbeatable prices",
    cta: "Shop Sale",
    link: "/shawls",
    image:
      "https://m.media-amazon.com/images/I/71Q3cEX1-6L._AC_UY350_.jpg",
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
                  {banner.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-2">
                  {banner.subtitle}
                </p>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  {banner.description}
                </p>
                <Link
                  href={banner.link}
                  className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-medium hover:bg-rose-50 transition shadow-lg"
                >
                  {banner.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-lg"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-lg"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
