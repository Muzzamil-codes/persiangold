import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GoldPriceCard from "@/components/GoldPriceCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpeg"
            alt="Persian Gold Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="hidden md:block flex-1 relative h-[850px] w-full md:w-[750px] order-2 md:order-1">
                <Image
                  src="/images/hero.png"
                  alt="Elegant woman wearing Persian gold jewelry"
                  fill
                  sizes="(max-width: 768px) 100vw, 750px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              <div className="flex-1 text-left order-1 md:order-2 md:self-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D4AF37]">
                  Persian Gold Excellence
                </h1>
                <p className="text-xl mb-8 text-gray-200 max-w-xl">
                  A legacy of Persian craftsmanship and artistry
                </p>
                <GoldPriceCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card group">
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/craftman.jpeg"
                  alt="Persian Craftsmanship"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Persian Craftsmanship</h3>
              <p className="text-gray-300">
                Centuries of tradition and expertise in gold crafting
              </p>
            </div>
            <div className="card group">
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/quality.jpeg"
                  alt="Quality Excellence"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Quality Excellence</h3>
              <p className="text-gray-300">
                Only the finest materials and crafting techniques
              </p>
            </div>
            <div className="card group">
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/heritage.jpeg"
                  alt="Cultural Heritage"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Cultural Heritage</h3>
              <p className="text-gray-300">
                Blending Persian artistry with modern elegance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative h-[600px] w-full order-1 md:order-1">
            <Image
              src="/images/about.jpeg"
              alt="About Persian Gold"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 order-2 md:order-2">
            <h2 className="section-title">Crafting Excellence</h2>
            <p className="text-gray-300 mb-6">
              With over three decades of experience in gold crafting,
              Persian Gold brings you the finest expression of Persian
              artistry and craftsmanship. Our dedication to quality and
              tradition has made us a symbol of excellence.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Visit Our Showroom</h2>
          <p className="text-gray-300 mb-8">
            Experience the beauty and craftsmanship of Persian gold in person.
            Our experts are ready to guide you through our heritage.
          </p>
          {/* <Link href="/contact" className="btn-primary">
            Contact Us
          </Link> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-[#D4AF37]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-4">Persian Gold</h3>
            <p className="text-gray-400">
              Bringing Persian excellence and artistry.
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Contact - Qatar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Grand Mall, Doha</li>
              <li>Phone: +974 7797 9916</li>
              <li>Email: info@persiangold.qa</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Contact - Dubai</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Gold Souk</li>
              <li>Jebel Ali</li>
              <li>Sonapur</li>
              <li>Phone: +971 55 185 5916</li>
              <li>Email: dubai@persiangold.qa</li> {/* Optional, if you have a Dubai-specific email */}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mon - Sat: 10:00 - 22:00</li>
              <li>Sunday: 14:00 - 20:00</li>
            </ul>
          </div> */}
      </div>
    </footer>
    </main >
  );
}
