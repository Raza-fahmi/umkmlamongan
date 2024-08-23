"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Array of products with their details
const produk = [
  {
    id: 1,
    judul: "Rengginang dan Keripik Singkong",
    pemilik: "Ibu Muksonah",
    alamat: "RT 02 RW 02 LAMONGAN, PURBALINGGA",
    gambar: "/keripik singkong.jpeg",
    link: "/produk/keripik",
  },
  {
    id: 2,
    judul: "Rengginang Beras Rasa Terasi",
    pemilik: "Ibu Narijah",
    alamat: "RT 03 RW 01 LAMONGAN, PURBALINGGA",
    gambar: "/rengginang.jpg",
    link: "/produk/rengginang",
  },
  {
    id: 3,
    judul: "Risol Mayo",
    pemilik: "Ibu Juriah",
    alamat: "RT 03 RW 01 LAMONGAN, PURBALINGGA",
    gambar: "/risol.jpg",
    link: "/produk/risol",
  },
  {
    id: 4,
    judul: "Bawang Goreng",
    pemilik: "Ibu Juriah",
    alamat: "RT 03 RW 01 LAMONGAN, PURBALINGGA",
    gambar: "/bawang.jpeg",
    link: "/produk/bawang",
  },
  {
    id: 5,
    judul: "Bakso Bang Timin",
    pemilik: "Pak Timin",
    alamat: "RT 03 RW 01 LAMONGAN, PURBALINGGA",
    gambar: "/bakso.jpeg",
    link: "/produk/bakso",
  },
  {
    id: 6,
    judul: "Seblak Mama Kiya",
    pemilik: "Mama Kiya",
    alamat: "RT 03 RW 01 LAMONGAN, PURBALINGGA",
    gambar: "/seblak.jpeg",
    link: "/produk/seblak",
  },
];

export default function Produc() {
  return (
    <div
      id="produk"
      className="bg-gray-100 font-Poppins text-gray-800 px-6 py-16 lg:px-32 lg:py-24"
    >
      <h1 className="font-semibold text-4xl text-center mb-4">
        Produk Unggulan
      </h1>
      <p className="text-xl text-center mb-8">
        Temukan berbagai produk terbaik dari desa kami yang siap memanjakan
        lidah Anda.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {produk.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={item.gambar}
                alt={`Gambar produk ${item.judul}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.alamat}</p>
              <div className="flex justify-center">
                <button className="bg-quaternary text-white font-bold rounded-lg py-2 px-4 hover:bg-yellow-400 transition duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
