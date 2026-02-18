// app/page.jsx  (or wherever your Home is)

import SlideNews from "@/components/Slidenews"; // adjust path

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Match header's container + padding */}
      <div className="max-w-full mx-auto px-4 md:px-[10%] py-8 lg:py-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left - Hero Slider (takes 2/3 on large screens) */}
          <div className="lg:col-span-2">
            <SlideNews />
          </div>

          {/* Right - Sidebar (1/3 on large screens) */}
          <div className="lg:col-span-1 space-y-6 lg:space-y-8">
            {/* Add your sidebar content here later */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-4">Latest Updates</h3>
              <p className="text-gray-600">Sidebar placeholder — add news cards, search, etc.</p>
            </div>

            {/* Example placeholder blocks */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <p className="text-gray-600">Search bar coming soon...</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-4">Selected Stories</h3>
              <p className="text-gray-600">Featured picks placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}