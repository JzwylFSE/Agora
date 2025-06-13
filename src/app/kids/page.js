"use client";

import { React, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Header/Navbar";

export default function KidsClothing() {
  const categories = [
    {
      title: "Tops",
      items: [
        {
          name: "Graphic T-Shirt",
          price: "$15",
          img: "/images/kids-graphic-tshirt.jpg",
        },
        {
          name: "Cotton Polo Shirt",
          price: "$20",
          img: "/images/kids-polo.jpg",
        },
        {
          name: "Long Sleeve T-Shirt",
          price: "$18",
          img: "/images/kids-longsleeve.jpg",
        },
        {
          name: "Sweatshirt",
          price: "$25",
          img: "/images/kids-sweatshirt.jpg",
        },
      ],
    },
    {
      title: "Bottoms",
      items: [
        {
          name: "Denim Shorts",
          price: "$20",
          img: "/images/kids-denim-shorts.jpg",
        },
        { name: "Jogger Pants", price: "$25", img: "/images/kids-joggers.jpg" },
        { name: "Leggings", price: "$15", img: "/images/kids-leggings.jpg" },
        { name: "Cargo Pants", price: "$30", img: "/images/kids-cargo.jpg" },
      ],
    },
    {
      title: "Dresses",
      items: [
        {
          name: "Casual Dress",
          price: "$25",
          img: "/images/kids-casual-dress.jpg",
        },
        {
          name: "Party Dress",
          price: "$35",
          img: "/images/kids-party-dress.jpg",
        },
        {
          name: "Floral Sundress",
          price: "$30",
          img: "/images/kids-sundress.jpg",
        },
      ],
    },
    {
      title: "Outerwear",
      items: [
        {
          name: "Puffer Jacket",
          price: "$40",
          img: "/images/kids-puffer-jacket.jpg",
        },
        { name: "Raincoat", price: "$35", img: "/images/kids-raincoat.jpg" },
        {
          name: "Denim Jacket",
          price: "$30",
          img: "/images/kids-denim-jacket.jpg",
        },
      ],
    },
    {
      title: "Accessories",
      items: [
        { name: "Baseball Cap", price: "$12", img: "/images/kids-cap.jpg" },
        { name: "Backpack", price: "$25", img: "/images/kids-backpack.jpg" },
        { name: "Wool Scarf", price: "$15", img: "/images/kids-scarf.jpg" },
      ],
    },
    {
      title: "Footwear",
      items: [
        { name: "Sneakers", price: "$30", img: "/images/kids-sneakers.jpg" },
        {
          name: "Rain Boots",
          price: "$25",
          img: "/images/kids-rain-boots.jpg",
        },
        { name: "Sandals", price: "$20", img: "/images/kids-sandals.jpg" },
      ],
    },
  ];

  return (
    <div>
      {/* <header className="bg-[#4a7c59] shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-[#f2e2d2]">
            AGORA - Kids Clothing
          </h1>
          <nav className="flex gap-6">
            <a href="/" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Home
            </a>
            <a href="/men" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Men
            </a>
            <a href="/women" className="text-[#f2e2d2] hover:text-[#1e1014]">
              Women
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
