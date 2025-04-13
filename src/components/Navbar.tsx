import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Persian Gold Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className="text-[#D4AF37] text-2xl font-bold">
              Persian Gold
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 