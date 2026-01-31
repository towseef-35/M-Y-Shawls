import ProductCard from "../components/ProductCard";
import { shawls } from "../data/shawls";

export default function ShawlsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Shawl Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of elegant shawls, each crafted with attention to detail and style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shawls.map((shawl) => (
            <ProductCard key={shawl.id} shawl={shawl} />
          ))}
        </div>
      </div>
    </div>
  );
}
