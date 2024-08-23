"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Icon from "../atoms/Icon";
import Avatar from "../../../../public/avatar.png";

const review = [
  {
    id: 1,
    name: "Ibnu Kusuma",
    rating: 5,
    comment:
      "Produk dari UMKM Desa Lamongan benar-benar luar biasa. Kualitasnya sangat baik dan harga yang ditawarkan sangat terjangkau.",
    created_at: "Pengrajin Bank Sampah",
    image: Avatar,
  },
  {
    id: 2,
    name: "Reza Fahmi Pahlevi",
    rating: 5,
    comment:
      "Layanan yang diberikan oleh UMKM Desa Lamongan sangat memuaskan. Produk-produk mereka sangat berkualitas dan pelayanannya sangat responsif.",
    created_at: "KKN UMP Desa Lamongan",
    image: Avatar,
  },
  {
    id: 3,
    name: "Dimas Andrean",
    rating: 5,
    comment:
      "Saya sangat puas dengan produk UMKM Desa Lamongan. Rasanya enak dan pengemasannya juga sangat baik.",
    created_at: "Dimas Andrean",
    image: Avatar,
  },
  {
    id: 4,
    name: "Finka Setya Wibawa",
    rating: 4.5,
    comment:
      "Produk dari UMKM Desa Lamongan sangat berkualitas dan sesuai dengan harapan. Saya sangat merekomendasikan produk mereka.",
    created_at: "Finka Setya Wibawa",
    image: Avatar,
  },
  {
    id: 5,
    name: "Rahma Sri Endah Mahesti",
    rating: 4.5,
    comment:
      "Pengalaman belanja di UMKM Desa Lamongan sangat menyenangkan. Produk-produk mereka memuaskan dan pelayanannya cepat.",
    created_at: "Rahma Sri Endah Mahesti",
    image: Avatar,
  },
  {
    id: 6,
    name: "Zahra Salsabila",
    rating: 5,
    comment:
      "Saya sangat senang dengan produk yang saya beli dari UMKM Desa Lamongan. Kualitasnya sangat baik dan harga yang ditawarkan sangat bersaing.",
    created_at: "Zahra Salsabila",
    image: Avatar,
  },
  {
    id: 7,
    name: "Hani Muhayah",
    rating: 5,
    comment:
      "Produk UMKM Desa Lamongan sangat memuaskan. Saya akan terus membeli produk mereka dan merekomendasikannya kepada teman-teman.",
    created_at: "Hani Muhayah",
    image: Avatar,
  },
  {
    id: 8,
    name: "Anjelita Susanto",
    rating: 5,
    comment:
      "Belanja di UMKM Desa Lamongan adalah pengalaman yang menyenangkan. Produk-produk mereka berkualitas dan pelayanan sangat baik.",
    created_at: "Anjelita Susanto",
    image: Avatar,
  },
  {
    id: 9,
    name: "Rizky Putri Retno Winayu",
    rating: 5,
    comment:
      "Produk UMKM Desa Lamongan sangat memuaskan dan sesuai dengan harapan. Proses pembelian juga sangat mudah dan cepat.",
    created_at: "Rizky Putri Retno Winayu",
    image: Avatar,
  },
];

const generateStarIcons = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <Icon key={index} name="star" />;
    } else if (hasHalfStar && index === fullStars) {
      return <Icon key={index} name="star-half" />;
    } else {
      return <Icon key={index} name="star-outline" />;
    }
  });

  return <div className="flex gap-1">{stars}</div>;
};

export default function Review() {
  return (
    <div id="testimoni" className="my-[100px] mx-5 md:mx-20">
      <div className="justify-center">
        <h2 className="text-baseBlack text-2xl md:text-4xl tracking-tight font-bold text-center">
          UMKM Desa Lamongan telah memiliki banyak
          <span className="text-quaternary"> testimoni positif</span> dari
          pelanggan.
        </h2>
      </div>

      <Marquee pauseOnHover={true} gradient={true}>
        <div className="mt-8 md:mt-16 flex px-2 gap-5">
          {review.map((data) => (
            <figure
              key={data.id}
              className="w-[400px] h-[240px] rounded-[20px] px-8 py-7 border border-slate-200"
            >
              <figcaption className="flex gap-5">
                <div className="w-14 h-14 rounded-full">
                  <Image
                    alt="profil"
                    src={data.image}
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-dark">{data.name}</span>
                  <span className="text-sm text-slate-500">
                    {data.created_at}
                  </span>
                </div>
              </figcaption>
              <blockquote>
                <p className="text-gray text-base mt-6 line-clamp-2">
                  {data.comment}
                </p>

                <div className="flex gap-1 mt-5">
                  {generateStarIcons(data.rating)}
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
