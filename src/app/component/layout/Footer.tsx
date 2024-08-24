import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import Icon from "../atoms/Icon";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 font-Montserrat px-5 py-8 lg:px-20 lg:py-12 border-t border-gray-200">
      <div className="container mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <div className="flex items-center gap-4">
            <Image className="w-12 h-9 lg:w-16 lg:h-12" src={logo} alt="Logo" />
            <h1 className="text-2xl font-bold">UMKM Lamongan</h1>
          </div>
          <p className="text-sm lg:text-base">
            Terus dukung produk lokal dan bersama kita majukan Desa Lamongan!
            Kami hadir untuk memberikan yang terbaik bagi Anda dan keluarga.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <h2 className="text-lg font-semibold">Link</h2>
          <Link href="/" className="text-sm hover:underline">
            Tentang
          </Link>
          <Link href="#produk" className="text-sm hover:underline">
            Produk
          </Link>
        </div>

        {/* Social Media Section */}
        {/* <div className="flex flex-col gap-4 lg:w-1/3">
          <h2 className="text-lg font-semibold">Sosial Media</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Icon name="tiktok" className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Icon name="instagram" className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
            </a>
          </div>
        </div> */}
      </div>

      {/* Contact Information */}
      <div className="text-center mt-8 border-t border-gray-200 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UMKM Lamongan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
