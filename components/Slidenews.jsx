// components/HeroSlider.jsx  (or wherever you place it)

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your provided data
export const carouselItems = [
  {
    id: "1",
    image: "/images/demo.webp",
    alt: "Life saving accessories - black sunglasses and pearl earrings",
    heading: "Life Saving Accessories: Black Sunglasses, Pearl Earrings",
    content:
      "Discover the essential fashion accessories that will transform your style. From classic black sunglasses to elegant pearl earrings, these timeless pieces are must-haves in any wardrobe. Learn how to style them with different outfits and elevate your fashion game.",
    slug: "life-saving-accessories",
    category: "Fashion",
    tags: ["Hot", "Trending"],
    date: "2026-02-11",
    author: {
      name: "Hugh Rothmann",
      profileImage: "/images/profile.jpg",
    },
  },
  {
    id: "2",
    image: "/images/demo.webp",
    alt: "Interior design trends for modern homes",
    heading: "2026 Interior Design Trends: Creating Your Dream Space",
    content:
      "Explore the hottest interior design trends that are taking over the design world in 2026. From minimalist aesthetics to bold color choices, discover how to transform your home into a stylish sanctuary that reflects your personality.",
    slug: "interior-design-trends-2026",
    category: "Decoration",
    tags: ["Featured"],
    date: "2026-02-10",
    author: {
      name: "Sarah Mitchell",
      profileImage: "/images/profile.jpg",
    },
  },
  {
    id: "3",
    image: "/images/demo.webp",
    alt: "Travel guide to hidden gems in Europe",
    heading: "Discovering Europe's Hidden Gems: A Traveler's Guide",
    content:
      "Step off the beaten path and discover lesser-known destinations in Europe that offer authentic experiences and breathtaking landscapes. From charming villages to stunning natural wonders, these hidden gems are waiting to be explored.",
    slug: "europe-hidden-gems-travel-guide",
    category: "Travel",
    tags: ["Trending"],
    date: "2026-02-09",
    author: {
      name: "Alex Johnson",
      profileImage: "/images/profile.jpg",
    },
  },
  {
    id: "4",
    image: "/images/demo.webp",
    alt: "Sustainable lifestyle and eco-friendly choices",
    heading: "Living Sustainably: Eco-Friendly Choices for a Better Tomorrow",
    content:
      "Learn how to reduce your carbon footprint and make environmentally conscious choices in your daily life. From sustainable fashion to eco-friendly home products, discover practical ways to live a greener lifestyle.",
    slug: "sustainable-lifestyle-eco-friendly",
    category: "Life",
    tags: ["Featured"],
    date: "2026-02-08",
    author: {
      name: "Emma Brown",
      profileImage: "/images/profile.jpg",
    },
  },
  {
    id: "5",
    image: "/images/demo.webp",
    alt: "Photography tips for stunning portraits",
    heading: "Mastering Portrait Photography: Tips from Professional Photographers",
    content:
      "Unlock the secrets to capturing stunning portrait photographs. Learn about lighting, composition, and posing techniques that will help you create beautiful, memorable portraits that stand out.",
    slug: "portrait-photography-tips",
    category: "Art",
    tags: ["Hot"],
    date: "2026-02-07",
    author: {
      name: "David Lee",
      profileImage: "/images/profile.jpg",
    },
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentItem = carouselItems[currentIndex];

  // Auto-play
  useEffect(() => {
    if (isPaused || carouselItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Schema for SEO (first item as main, others as related)
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Articles Carousel",
    numberOfItems: carouselItems.length,
    itemListElement: carouselItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "NewsArticle",
        headline: item.heading,
        url: `/${item.category.toLowerCase().replace(/\s+/g, "-")}/${item.slug}`,
        image: item.image,
        datePublished: item.date,
        author: {
          "@type": "Person",
          name: item.author?.name || "Editor",
        },
      },
    })),
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured articles carousel"
    >
      {/* Background Image */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[550px] lg:h-[550px]">
        <Image
          src={currentItem.image}
          alt={currentItem.alt || currentItem.heading}
          fill
          priority={currentIndex === 0}
          className="object-cover transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={82}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-10">
  <div className="max-w-3xl w-full">
    {/* Full bordered box container */}
    <div className="
      bg-[#162238]/80 backdrop-blur-md 
       md:
      px-6 sm:px-8 md:px-12 
      py-8 md:py-10 lg:py-12 
      shadow-2xl shadow-black/40
      hover:bg-[#162238]/100 transition-colors duration-300
    ">
      {/* Meta row */}
      <div className="inline-flex items-center justify-center flex-wrap gap-4 mb-4 md:mb-4">
        <div className="inline-flex items-center gap-3  px-5 py-2.5 ">
          <time className="text-xs sm:text-sm text-gray-200 font-medium">
            {new Date(currentItem.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          {currentItem.author && (
            <>
              <div className="w-9 h-9 sm:w-10 sm:h-10 overflow-hidden border-2 border-[#d43939]/80 flex-shrink-0">
                <Image
                  src={currentItem.author.profileImage}
                  alt={currentItem.author.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">
                {currentItem.author.name}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Title */}
      <Link
        href={`/${currentItem.category.toLowerCase().replace(/\s+/g, "-")}/${currentItem.slug}`}
        className="block group"
      >
        <h2 className="
          text-2xl sm:text-4xl md:text-2xl lg:text-4xl 
          font-extrabold text-white 
          leading-tight mb-5 md:mb-7 
          
        ">
          {currentItem.heading}
        </h2>
      </Link>

      {/* Category + Tags */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm uppercase tracking-wider text-gray-200">
        <span className="font-semibold text-[#d43939]">{currentItem.category}</span>
        {currentItem.tags?.map((tag) => (
          <span key={tag} className="text-white/80">
            • {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Navigation Arrows */}
      {carouselItems.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-[#d43939] text-white rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-[#d43939] text-white rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {/* {carouselItems.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#d43939] scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )} */}

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}