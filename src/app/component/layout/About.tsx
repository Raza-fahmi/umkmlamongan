import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="font-Poppins">
      {/* Address Section */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 lg:px-20 lg:py-12 mt-10 text-secondary">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left">
              Lokasi Kami
            </h2>
            <p className="text-sm lg:text-lg mt-4 text-center lg:text-left text-gray-700">
              UMKM Lamongan terletak di Desa Lamongan, Kecamatan Kaligondang,
              Kabupaten Purbalingga, Jawa Tengah. Kami berada di tengah-tengah
              pedesaan yang kaya akan potensi lokal dan budaya. Dengan produk
              berkualitas yang kami hasilkan, kami bangga dapat memperkenalkan
              Lamongan kepada dunia.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 flex justify-center lg:justify-end">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
              <p className="text-sm lg:text-lg text-gray-700">
                Alamat: Desa Lamongan, Kecamatan Kaligondang, Kabupaten
                Purbalingga, Jawa Tengah, Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
