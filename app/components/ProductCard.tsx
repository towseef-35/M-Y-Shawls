import Image from "next/image";
import Link from "next/link";
import { Shawl } from "@/app/data/shawls";

interface ProductCardProps {
  shawl: Shawl;
}

export default function ProductCard({ shawl }: ProductCardProps) {
  return (
    <Link href={`/shawls/${shawl.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        {/* IMAGE */}
        <div className="relative h-64 bg-gray-100">
          <Image
            src={shawl.image}
            alt={shawl.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
            {shawl.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {shawl.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{shawl.color}</span>
            <span className="font-semibold text-rose-600">
              {shawl.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
