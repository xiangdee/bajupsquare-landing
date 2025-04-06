import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin, FaRocket } from "react-icons/fa";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SiFramer, SiHeadlessui, SiLeaflet, SiNextdotjs, SiReact, SiSwiper, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex flex-col md:flex-row gap-2 md:items-center justify-between px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
      <h2 className="text-xl font-semibold text-primary/80"
                style={{ fontFamily: "var(--font-rubik_wet_paint-mono)" }}>
                Bajupsquare
            </h2>
        <nav className="space-x-6 text-sm font-medium">
          <a href="https://wirexen.gitbook.io/bajupsquare/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Docs</a>
          <a href="mailto:emmanuelfrancismicah@gmail.com" className="hover:text-primary">Help</a>
          <a href="https://bajupsquare.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-primary/80 text-white px-4 py-2 rounded-md hover:bg-primary/70 transition">
            Live Demo
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-br from-primary/5 to-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Travel bookings, hotels, cars & more — all in one place.
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
          BajupSquare is a sleek Next.js 15 template built with TypeScript and Tailwind CSS — perfect for launching your online booking, travel, or real estate experience. From flights to homes, hotels to adventures — get started fast.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://bajupsquare.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/70 transition">
            Live Demo
          </a>
          <a href="#docs" className="px-6 py-3 border border-primary/80 text-primary/80 rounded-lg font-semibold hover:bg-blue-50 transition">
            Buy Template
          </a>
        </div>
      </section>
      {/* pages section */}
      <section className="py-20 text-center bg-gray-900 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">40+ inner pages.</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Home 1 */}
          <a href="https://bajupsquare.vercel.app/" target="_blank" rel="noopener noreferrer" className="group rounded-lg shadow-lg p-6 text-gray-800 relative md:w-1/3 h-full">
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-base h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center p-1">
                  <HiOutlineArrowUpRight className="text-white" size={25}/>
                </span>
              </div>
              <Image src="/demo-image1.jpg" alt="Home 1" className="w-full h-full md:h-[580px] object-center rounded-lg" width={1000} height={1000} />
            </div>
            <h3 className="font-semibold text-white text-base">Home 1</h3>
            <p className="mt-2 font-light text-gray-400">Main page.</p>
          </a>

          {/* Home 2 */}
          <a href="https://bajupsquare.vercel.app/real-estate" target="_blank" rel="noopener noreferrer" className="group rounded-lg shadow-lg p-6 text-gray-800 relative md:w-1/3 h-full">
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-base h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center p-1">
                  <HiOutlineArrowUpRight className="text-white" size={25}/>
                </span>
              </div>
              <Image src="/demo-image2.jpg" alt="Home 2" className="w-full h-full md:h-[580px] object-center rounded-lg" width={1000} height={1000} />
            </div>
            <h3 className="font-semibold text-white text-base">Home 2</h3>
            <p className="mt-2 font-light text-gray-400">Real estate page.</p>
          </a>

          {/* Home 3 */}
          <a href="https://bajupsquare.vercel.app/listings/stays/stays-page" target="_blank" rel="noopener noreferrer" className="group rounded-lg shadow-lg p-6 text-gray-800 relative md:w-1/3 h-full">
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-base h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center p-1">
                  <HiOutlineArrowUpRight className="text-white" size={25}/>
                </span>
              </div>
              <Image src="/demo-image3.jpg" alt="Home 3" className="w-full h-full md:h-[580px] object-center rounded-lg" width={1000} height={1000} />
            </div>
            <h3 className="font-semibold text-white text-base">Home 3</h3>
            <p className="mt-2 font-light text-gray-400">Hotels Booking.</p>
          </a>


        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-gray-800">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">What’s Included</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        BajupSquare provides everything you need to kickstart a sleek and modern booking or real estate site. From robust architecture to seamless responsiveness — it’s all in the box.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Feature 1 */}
      <div className="flex items-start gap-4">
        <HiOutlineCode className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Built with Next.js</h4>
          <p className="text-gray-600">
            A thoughtfully componentized, high-performance Next.js 14 architecture — clean, scalable, and fun to work with.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-start gap-4">
        <SiTypescript className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Modern TypeScript</h4>
          <p className="text-gray-600">
            Enjoy a delightful developer experience with strongly typed code built by TypeScript enthusiasts who sweat the details.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-start gap-4">
        <SiVercel className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Effortless Deployment</h4>
          <p className="text-gray-600">
            Easily deploy to Vercel, Netlify, or any modern hosting provider that supports Next.js.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start gap-4">
        <HiOutlineDeviceMobile className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">100% Responsive</h4>
          <p className="text-gray-600">
            Fully optimized for mobile, tablet, and desktop — delivering a great user experience everywhere.
          </p>
        </div>
      </div>

      {/* Feature 5 */}
      <div className="flex items-start gap-4">
        <FaRocket className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Production Ready</h4>
          <p className="text-gray-600">
            Fine-tuned for performance and stability, ready to go live out of the box.
          </p>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="flex items-start gap-4">
        <HiOutlineLightningBolt className="text-primary text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Fast & Lightweight</h4>
          <p className="text-gray-600">
            No bloat. Just blazing-fast load times and optimized assets for snappy experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Whats included section */}
  <section className="py-20 flex flex-wrap bg-white">
    <div className="max-w-1/2 mx-auto px-4 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">What’s Included</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        BajupSquare provides everything you need to kickstart a sleek and modern booking or real estate site. From robust architecture to seamless responsiveness — it’s all in the box.
      </p>
    </div>

    {/* right side */}
    <div className="flex flex-wrap max-w-1/2 gap-6">
  {/* Next.js */}
  <div className="flex items-center gap-3">
    <SiNextdotjs className="text-2xl text-gray-800" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Next.js</h4>
      <p className="text-xs text-gray-500">Version: 15.2.2</p>
    </div>
  </div>

  {/* React */}
  <div className="flex items-center gap-3">
    <SiReact className="text-2xl text-blue-600" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">React</h4>
      <p className="text-xs text-gray-500">Version: 19.0.0</p>
    </div>
  </div>

  {/* Headless UI */}
  <div className="flex items-center gap-3">
    <SiHeadlessui className="text-2xl text-purple-600" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Headless UI</h4>
      <p className="text-xs text-gray-500">Version: 2.2.0</p>
    </div>
  </div>

  {/* Leaflet */}
  <div className="flex items-center gap-3">
    <SiLeaflet className="text-2xl text-green-600" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Leaflet</h4>
      <p className="text-xs text-gray-500">Version: 1.9.4</p>
    </div>
  </div>

  {/* Framer Motion */}
  <div className="flex items-center gap-3">
    <SiFramer className="text-2xl text-pink-600" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Framer Motion</h4>
      <p className="text-xs text-gray-500">Version: 12.5.0</p>
    </div>
  </div>

  {/* Swiper */}
  <div className="flex items-center gap-3">
    <SiSwiper className="text-2xl text-blue-500" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Swiper</h4>
      <p className="text-xs text-gray-500">Version: 11.2.6</p>
    </div>
  </div>

  {/* Tailwind CSS */}
  <div className="flex items-center gap-3">
    <SiTailwindcss className="text-2xl text-sky-500" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">Tailwind CSS</h4>
      <p className="text-xs text-gray-500">Version: 4</p>
    </div>
  </div>

  {/* TypeScript */}
  <div className="flex items-center gap-3">
    <SiTypescript className="text-2xl text-blue-700" />
    <div>
      <h4 className="text-sm font-medium text-gray-800">TypeScript</h4>
      <p className="text-xs text-gray-500">Version: 5</p>
    </div>
  </div>
</div>
  </section>

  <section className="w-full px-6 md:px-16 py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose BajupSquare?</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      BajupSquare is more than just a template — it&apos;s a solid foundation for your next booking, real estate, or travel-based platform. We&apos;ve taken care of the details so you can focus on your unique product.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-md p-6 text-left">
        <h4 className="text-lg font-semibold mb-2">💡 Developer Friendly</h4>
        <p className="text-sm text-gray-600">Fully componentized and structured to keep your workflow fast and maintainable.</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 text-left">
        <h4 className="text-lg font-semibold mb-2">🚀 Production Ready</h4>
        <p className="text-sm text-gray-600">Deployed and optimized for performance out of the box — just add your content and go live.</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 text-left">
        <h4 className="text-lg font-semibold mb-2">🎯 Versatile Use Cases</h4>
        <p className="text-sm text-gray-600">Perfect for Real Estate, Hotel Booking, Travel, Car Rentals, or custom experiences.</p>
      </div>
    </div>
  </div>
</section>

    
    </div>

    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    
    <div>
      <h4 className="text-white font-semibold text-lg mb-2">BajupSquare</h4>
      <p className="text-sm text-gray-400">Built for creators, startups, and agencies. A powerful Next.js 14 template for real estate and booking projects.</p>
    </div>

    <div>
      <h5 className="text-sm font-semibold mb-2 text-white">Links</h5>
      <ul className="space-y-1 text-sm text-gray-400">
        <li><a href="https://wirexen.gitbook.io/bajupsquare/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Docs</a></li>
        <li><a href="https://bajupsquare.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Live Demo</a></li>
        <li><a href="mailto:emmanuelfrancismicah@gmail.com" className="hover:text-white">Support</a></li>
      </ul>
    </div>

    <div>
      <h5 className="text-sm font-semibold mb-2 text-white">Follow Us</h5>
      <div className="flex space-x-4 mt-2">
        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaGithub /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
      </div>
    </div>

  </div>
  <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
    © {new Date().getFullYear()} BajupSquare. All rights reserved.
  </div>
</footer>


    </div>
  );
}
