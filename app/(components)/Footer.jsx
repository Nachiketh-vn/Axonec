import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12 w-full">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#F26C2B]">
              Get in Touch
            </h2>
            <p className="mt-2">axonecinfo@gmail.com</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#F26C2B]">
                Our Services
              </h3>
              <ul className="mt-2">
                <li>Web Development</li>
                <li>App Development</li>
                <li>E-commerce Development</li>
                <li>Online Business Management</li>
                <li>Hoarding Advertisement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#F26C2B]">
                Quick Links
              </h3>
              <ul className="mt-2">
                <li>
                  <Link href="/" className="hover:text-[#F26C2B]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#F26C2B]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/internship" className="hover:text-[#F26C2B]">
                    Internship
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-[#F26C2B]">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p>&copy; 2024 Axonec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer