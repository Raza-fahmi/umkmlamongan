"use client";
import React, { useState } from "react";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Icon from "../atoms/Icon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-secondary fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center py-4 px-6 md:px-[100px]">
        {/* Logo di sisi kiri */}
        <div className="flex justify-start items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={48} height={48} />
          </Link>
        </div>

        {/* Menu di tengah */}
        <div className="hidden md:flex gap-4 md:gap-10 justify-center items-center flex-grow">
          <Link href="/" className="text-[#132043] text-lg font-medium">
            Tentang Kami
          </Link>
          <Link href="#produk" className="text-[#a3a3a3] text-lg">
            Produk
          </Link>
          <Link href="#testimoni" className="text-[#a3a3a3] text-lg">
            Testimoni
          </Link>
        </div>

        {/* Kontak di sisi kanan */}
        <div className="hidden md:flex justify-end items-center">
          <Link href="/" className="text-[#a3a3a3] text-lg">
            Kontak
          </Link>
        </div>

        {/* Tombol menu untuk mobile */}
        <button
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <Icon name="hamburger" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 bg-white w-full transform transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-neutral">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center py-4">
          <Link
            href="/"
            className="text-[#132043] text-lg font-medium"
            onClick={toggleMobileMenu}
          >
            Tentang Kami
          </Link>
          <Link
            href="#produk"
            className="text-[#a3a3a3] text-lg"
            onClick={toggleMobileMenu}
          >
            Produk
          </Link>
          <Link
            href="#testimoni"
            className="text-[#a3a3a3] text-lg"
            onClick={toggleMobileMenu}
          >
            Testimoni
          </Link>
          <Link
            href="#testimoni"
            className="text-[#a3a3a3] text-lg"
            onClick={toggleMobileMenu}
          >
            Kontak
          </Link>
        </div>
      </div>
    </header>
  );
}
