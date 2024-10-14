import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white relative mt-[-50px]">
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-slate-100"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nomadic Adventures</h3>
            <p className="text-sm">Discover the world with us. Unforgettable adventures await!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/tours" className="hover:text-slate-300 transition-colors duration-300">Our Tours</Link></li>
              <li><Link href="/about" className="hover:text-slate-300 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-slate-300 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-slate-300 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-slate-300 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-slate-300 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Nomadic Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
