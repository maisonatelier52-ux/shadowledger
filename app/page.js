import Image from "next/image";
import SlideNews from "../components/Slidenews";

export default function Home() {
  return (
  <main>
      <div className="min-h-screen bg-white">
      
      <div className="container mx-auto px-4 py-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Hero Slider */}
          <div className="lg:col-span-2">
            <SlideNews />
          </div>

          {/* Right Column - News Card, Search, Selected */}
          <div className="lg:col-span-1 space-y-6">
            
           
          </div>
        </div>

      </div>

      
    </div>

  </main>
  );
}
