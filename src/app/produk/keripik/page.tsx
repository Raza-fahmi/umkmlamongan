import React from "react";
import Image from "next/image";
import keripik from "../../../../public/kerupuk.jpeg";
import rengginang from "../../../../public/rengginang.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 px-6 py-24 lg:px-32 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center lg:text-5xl text-gray-900">
          Rengginang dan Keripik Singkong Bu Son Son
        </h1>
        <div className="flex flex-col lg:flex-col lg:space-y-10">
          {/* Rengginang Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold p-6 text-center text-gray-900">
              Rengginang
            </h2>
            <div className="flex justify-center p-6">
              <Image
                src={rengginang}
                alt="Rengginang"
                width={500}
                height={350}
                className="object-cover object-center rounded-lg lg:h-[300px]"
              />
            </div>
            <p className="text-base font-medium p-6 text-center text-gray-700">
              Rengginang, kerupuk khas Indonesia yang terbuat dari beras ketan
              berkualitas, kini hadir untuk memanjakan lidah Anda! Dimasak
              dengan bumbu pilihan, dibentuk bulat-pipih, dan dikeringkan di
              bawah sinar matahari, rengginang kami digoreng hingga renyah
              sempurna. Nikmati tekstur gurih atau manis yang menggugah selera
              dalam setiap gigitan!
            </p>
          </div>

          {/* Keripik Singkong Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold p-6 text-center text-gray-900">
              Kerupuk Singkong
            </h2>
            <div className="flex justify-center p-6">
              <Image
                src={keripik}
                alt="Keripik Singkong"
                width={500}
                height={350}
                className="object-cover object-center rounded-lg lg:h-[300px]"
              />
            </div>
            <p className="text-base font-medium p-6 text-center text-gray-700">
              Rasakan kelezatan autentik Keripik Singkong kami, irisan tipis
              singkong yang digoreng hingga renyah dan dibumbui dengan rasa asin
              serta aroma bawang yang menggugah selera. Setiap gigitan
              menawarkan kombinasi gurih dan crispy yang membuat Anda ketagihan.
              Nikmati camilan istimewa ini, sempurna untuk setiap kesempatan!
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          {" "}
          {/* Added margin-top for spacing */}
          <Link
            href={`https://wa.me/62895322351415?text=${encodeURIComponent(
              "Halo! Saya ingin memesan Kerupuk dan Rengginang Bu Son. Bisa dibantu untuk pemesanan saya? Terima kasih!"
            )}`}
          >
            <button className="flex gap-2 w-fit items-center justify-center px-4 py-2 bg-transparent text-quaternary border-2 border-quaternary rounded-full shadow-lg hover:bg-quaternary hover:text-white transition ease-in-out duration-300">
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
  );
}
