export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700 transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p>muneershah12q@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p>+91 9596514815 <b >&</b> 8082700877</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
