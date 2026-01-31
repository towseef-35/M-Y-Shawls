import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif text-gray-800 mb-4">Shawl Not Found</h1>
        <p className="text-gray-600 mb-8">
          The shawl you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/shawls"
          className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors"
        >
          Browse All Shawls
        </Link>
      </div>
    </div>
  );
}
