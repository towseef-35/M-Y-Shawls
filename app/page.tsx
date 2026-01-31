import BannerSlider from "./components/BannerSlider";
import ProductCard from "./components/ProductCard";
import { shawls } from "./data/shawls";
import Link from "next/link";

export default function Home() {
  const featuredShawls = shawls.slice(0, 3);

  return (
    <div>
      <BannerSlider />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selections from our elegant shawl collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredShawls.map((shawl) => (
              <ProductCard key={shawl.id} shawl={shawl} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/shawls"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors"
            >
              View All Shawls
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
