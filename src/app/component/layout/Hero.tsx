import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-hero text-secoundaty p-6 lg:px-80 lg:pt-28 font-Jakarta w-full h-[500px] flex items-center justify-center bg-no-repeat bg-cover lg:bg-center">
      <div className="flex flex-col gap-2 lg:gap-7 justify-center items-center bg-white bg-opacity-50 p-4 w-full max-w-lg lg:w-[730px] lg:h-[349px]">
        <h1 className="text-2xl font-bold text-center">
          Nikmati Kelezatan Asli Desa Lamongan!
        </h1>
        <p className="text-base text-center">
          Produk UMKM Kami, Dibuat dengan Cinta dan Bahan-Bahan Pilihan, Siap
          Menggoyang Lidah Anda!
        </p>
        <div className="flex justify-center">
          <Link href="#produk">
            <button className="bg-quaternary text-white w-40 h-10 text-base font-bold rounded-md">
              Lihat Produk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
