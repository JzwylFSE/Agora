"use client";

import { React, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Header/Navbar";

export default function WomenClothing() {
  // <Navbar sectionTitle="Women's Clothing" />
  const categories = [
    {
      title: "Tops",
      items: [
        { name: "Silk Blouse", price: "$40", img: "/images/silk-blouse.jpg" },
        { name: "Cotton Tank Top", price: "$15", img: "/images/tank-top.jpg" },
        {
          name: "Floral Print Shirt",
          price: "$35",
          img: "/images/floral-shirt.jpg",
        },
        { name: "Lace Trim Cami", price: "$25", img: "/images/lace-cami.jpg" },
        {
          name: "Chiffon Tunic",
          price: "$30",
          img: "/images/chiffon-tunic.jpg",
        },
      ],
    },
    {
      title: "Dresses",
      items: [
        { name: "A-Line Sundress", price: "$50", img: "/images/sundress.jpg" },
        {
          name: "Evening Gown",
          price: "$120",
          img: "/images/evening-gown.jpg",
        },
        {
          name: "Floral Maxi Dress",
          price: "$60",
          img: "/images/maxi-dress.jpg",
        },
        {
          name: "Cocktail Dress",
          price: "$80",
          img: "/images/cocktail-dress.jpg",
        },
        { name: "Wrap Dress", price: "$70", img: "/images/wrap-dress.jpg" },
      ],
    },
    {
      title: "Bottoms",
      items: [
        { name: "Skinny Jeans", price: "$50", img: "/images/skinny-jeans.jpg" },
        {
          name: "Pleated Skirt",
          price: "$40",
          img: "/images/pleated-skirt.jpg",
        },
        {
          name: "Wide-Leg Trousers",
          price: "$60",
          img: "/images/wide-leg.jpg",
        },
        { name: "Denim Shorts", price: "$25", img: "/images/denim-shorts.jpg" },
        { name: "Stretch Leggings", price: "$20", img: "/images/leggings.jpg" },
      ],
    },
    {
      title: "Activewear",
      items: [
        { name: "Sports Bra", price: "$30", img: "/images/sports-bra.jpg" },
        { name: "Yoga Pants", price: "$40", img: "/images/yoga-pants.jpg" },
        {
          name: "Running Shorts",
          price: "$25",
          img: "/images/running-shorts.jpg",
        },
        {
          name: "Performance Tank",
          price: "$20",
          img: "/images/performance-tank.jpg",
        },
        { name: "Track Jacket", price: "$60", img: "/images/track-jacket.jpg" },
      ],
    },
    {
      title: "Outerwear",
      items: [
        { name: "Wool Coat", price: "$120", img: "/images/wool-coat.jpg" },
        { name: "Denim Jacket", price: "$70", img: "/images/denim-jacket.jpg" },
        {
          name: "Leather Jacket",
          price: "$150",
          img: "/images/leather-jacket.jpg",
        },
        { name: "Quilted Vest", price: "$80", img: "/images/quilted-vest.jpg" },
        { name: "Faux Fur Coat", price: "$200", img: "/images/fur-coat.jpg" },
      ],
    },
    {
      title: "Accessories",
      items: [
        {
          name: "Leather Tote Bag",
          price: "$120",
          img: "/images/tote-bag.jpg",
        },
        { name: "Silk Scarf", price: "$50", img: "/images/silk-scarf.jpg" },
        {
          name: "Statement Necklace",
          price: "$80",
          img: "/images/necklace.jpg",
        },
        { name: "Wide-Brim Hat", price: "$40", img: "/images/hat.jpg" },
        { name: "Sunglasses", price: "$60", img: "/images/sunglasses.jpg" },
      ],
    },
    {
      title: "Footwear",
      items: [
        { name: "Stiletto Heels", price: "$100", img: "/images/stilettos.jpg" },
        { name: "Ankle Boots", price: "$80", img: "/images/ankle-boots.jpg" },
        { name: "Ballet Flats", price: "$50", img: "/images/flats.jpg" },
        { name: "Strappy Sandals", price: "$60", img: "/images/sandals.jpg" },
        {
          name: "Running Shoes",
          price: "$90",
          img: "/images/running-shoes.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      {/* <header className="bg-[#4a7c59] shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-[#f2e2d2]">
            AGORA - Women’s Clothing
          </h1>
          <nav className="flex gap-6">
            <a href="/" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Home
            </a>
            <a href="/men" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Men
            </a>
            <a href="/kids" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Kids
            </a>
          </nav>
        </div>
      </header> */}
       <Navbar />

      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
          Explore Our Collection
        </h2>
        {categories.map((category, index) => (
          <section key={index} className="mb-10">
            <h3 className="text-2xl font-bold text-[#1e1014] mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f2e2d2] rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-lg mb-4 w-full h-auto object-cover"
                  />
                  <h4 className="text-lg font-bold text-[#4a7c59]">
                    {item.name}
                  </h4>
                  <p className="text-[#1e1014] font-semibold">{item.price}</p>
                  <button className="mt-4 bg-[#4a7c59] text-[#f2e2d2] px-4 py-2 rounded-lg hover:bg-[#1e1014]">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-[#1e1014] text-[#f2e2d2] py-6">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2025 Agora Clothing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-[#4a7c59]">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#4a7c59]">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
