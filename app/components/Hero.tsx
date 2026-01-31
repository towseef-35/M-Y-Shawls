import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            Elegant Shawls for
            <span className="block text-rose-600">Every Occasion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of luxurious shawls, crafted with care and designed to add elegance to your wardrobe.
          </p>
          <Link
            href="/shawls"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
