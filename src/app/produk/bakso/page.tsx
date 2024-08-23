import React from "react";
import Image from "next/image";
import risol from "../../../../public/Risoles Mayo.jpeg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-primary font-sans text-gray-800 px-6 py-24 lg:px-32 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-5xl text-gray-900">
          Risol Mayo
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-10 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Container */}
          <div className="flex-1 flex justify-center lg:justify-end p-6">
            <Image
              src={risol}
              alt="Risol Mayo"
              width={500}
              height={375}
              className="object-cover object-center rounded-lg lg:h-[300px]"
            />
          </div>

          {/* Description Container */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center p-6 lg:px-10">
            <p className="text-lg font-medium mb-6 text-center lg:text-left text-gray-700 leading-relaxed">
              Temukan kenikmatan Risol Mayonnaise kami, gulungan lezat dengan
              berbagai isian pilihan seperti ragout, telur, dan smoked beef.
              Digoreng hingga renyah dan disajikan dengan saus sambal, risol ini
              menawarkan perpaduan rasa creamy dan gurih yang akan memanjakan
              lidah Anda. Cicipi kelezatan tradisi dalam setiap gigitan!
            </p>
            <Link
              href={`https://wa.me/6281226831649?text=${encodeURIComponent(
                "Hallo, saya tertarik untuk mengetahui lebih lanjut tentang produk UMKM Lamongan. Apakah bisa dibantu?"
              )}`}
            >
              <button className="flex gap-2 w-fit items-center justify-center mx-auto px-4 py-2 bg-transparent text-quaternary border-2 border-quaternary rounded-full shadow-lg hover:bg-quaternary hover:text-white transition ease-in-out duration-300">
                <span className="text-sm lg:text-lg font-semibold">
                  Hubungi Kami
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 10l2 2m0 0l-2 2m2-2H7M15 4l-2 2m0 0l-2-2m2 2V3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
