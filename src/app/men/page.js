"use client";

import { React, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Header/Navbar";

export default function MenClothing() {
  const categories = [
    {
      title: "Tops",
      items: [
        {
          name: "Classic White T-Shirt",
          price: "$15",
          img: "/images/tshirt.jpg",
        },
        { name: "Slim Fit Polo Shirt", price: "$25", img: "/images/polo.jpg" },
        {
          name: "Cotton Crew Neck Sweater",
          price: "$40",
          img: "/images/sweater.jpg",
        },
        {
          name: "Linen Casual Shirt",
          price: "$30",
          img: "/images/linen-shirt.jpg",
        },
        {
          name: "Formal Button-Up Shirt",
          price: "$35",
          img: "/images/buttonup.jpg",
        },
        {
          name: "Flannel Plaid Shirt",
          price: "$28",
          img: "/images/flannel.jpg",
        },
        { name: "Lightweight Hoodie", price: "$45", img: "/images/hoodie.jpg" },
        {
          name: "Oversized Graphic Tee",
          price: "$20",
          img: "/images/graphic-tee.jpg",
        },
      ],
    },
    {
      title: "Bottoms",
      items: [
        {
          name: "Slim Fit Denim Jeans",
          price: "$50",
          img: "/images/jeans.jpg",
        },
        {
          name: "Straight Fit Chinos",
          price: "$45",
          img: "/images/chinos.jpg",
        },
        {
          name: "Relaxed Fit Cargo Pants",
          price: "$55",
          img: "/images/cargo.jpg",
        },
        {
          name: "Tailored Dress Pants",
          price: "$60",
          img: "/images/dress-pants.jpg",
        },
        {
          name: "Sports Jogger Pants",
          price: "$35",
          img: "/images/joggers.jpg",
        },
        {
          name: "Corduroy Trousers",
          price: "$48",
          img: "/images/corduroy.jpg",
        },
        {
          name: "Knee-Length Denim Shorts",
          price: "$25",
          img: "/images/shorts.jpg",
        },
        {
          name: "Classic Swim Trunks",
          price: "$20",
          img: "/images/swim-trunks.jpg",
        },
      ],
    },
    {
      title: "Outerwear",
      items: [
        {
          name: "Tailored Wool Blazer",
          price: "$100",
          img: "/images/blazer.jpg",
        },
        {
          name: "Padded Bomber Jacket",
          price: "$80",
          img: "/images/bomber.jpg",
        },
        {
          name: "Leather Moto Jacket",
          price: "$150",
          img: "/images/leather.jpg",
        },
        {
          name: "Lightweight Windbreaker",
          price: "$60",
          img: "/images/windbreaker.jpg",
        },
        { name: "Hooded Parka Coat", price: "$120", img: "/images/parka.jpg" },
        { name: "Quilted Down Vest", price: "$70", img: "/images/vest.jpg" },
        {
          name: "Cashmere Overcoat",
          price: "$200",
          img: "/images/overcoat.jpg",
        },
      ],
    },
    {
      title: "Activewear",
      items: [
        {
          name: "Moisture-Wicking Gym T-Shirt",
          price: "$25",
          img: "/images/gym-tshirt.jpg",
        },
        {
          name: "Compression Leggings",
          price: "$40",
          img: "/images/leggings.jpg",
        },
        { name: "Athletic Shorts", price: "$30", img: "/images/shorts.jpg" },
        {
          name: "Performance Hoodie",
          price: "$50",
          img: "/images/performance-hoodie.jpg",
        },
        {
          name: "Lightweight Running Jacket",
          price: "$70",
          img: "/images/running-jacket.jpg",
        },
        {
          name: "Training Sweatpants",
          price: "$45",
          img: "/images/sweatpants.jpg",
        },
        {
          name: "Breathable Tank Top",
          price: "$20",
          img: "/images/tank-top.jpg",
        },
      ],
    },
    {
      title: "Traditional and Cultural Wear",
      items: [
        { name: "Kurta Pajama Set", price: "$60", img: "/images/kurta.jpg" },
        { name: "Nehru Jacket", price: "$80", img: "/images/nehru.jpg" },
        { name: "Scottish Kilt", price: "$90", img: "/images/kilt.jpg" },
        { name: "Dashiki Shirt", price: "$35", img: "/images/dashiki.jpg" },
        { name: "Agbada Robe", price: "$100", img: "/images/agbada.jpg" },
        { name: "Yukata Kimono", price: "$120", img: "/images/yukata.jpg" },
        {
          name: "Mandarin Collar Shirt",
          price: "$45",
          img: "/images/mandarin.jpg",
        },
      ],
    },
    {
      title: "Accessories",
      items: [
        { name: "Classic Leather Belt", price: "$25", img: "/images/belt.jpg" },
        { name: "Woven Straw Fedora", price: "$30", img: "/images/fedora.jpg" },
        { name: "Sports Cap", price: "$20", img: "/images/cap.jpg" },
        { name: "Cashmere Scarf", price: "$50", img: "/images/scarf.jpg" },
        {
          name: "Aviator Sunglasses",
          price: "$80",
          img: "/images/sunglasses.jpg",
        },
        { name: "Cotton Bandanas", price: "$15", img: "/images/bandana.jpg" },
        { name: "Woolen Beanie Hat", price: "$18", img: "/images/beanie.jpg" },
      ],
    },
    {
      title: "Footwear",
      items: [
        {
          name: "Leather Oxford Shoes",
          price: "$120",
          img: "/images/oxford.jpg",
        },
        { name: "Casual Sneakers", price: "$60", img: "/images/sneakers.jpg" },
        { name: "Slip-On Loafers", price: "$70", img: "/images/loafers.jpg" },
        { name: "Chelsea Boots", price: "$150", img: "/images/chelsea.jpg" },
        {
          name: "Ankle Strap Sandals",
          price: "$40",
          img: "/images/sandals.jpg",
        },
        { name: "Hiking Boots", price: "$100", img: "/images/hiking.jpg" },
        { name: "House Slippers", price: "$20", img: "/images/slippers.jpg" },
      ],
    },
    {
      title: "Occasion Wear",
      items: [
        { name: "Black Tie Tuxedo", price: "$250", img: "/images/tuxedo.jpg" },
        {
          name: "Double-Breasted Suit",
          price: "$300",
          img: "/images/suit.jpg",
        },
        {
          name: "Satin Lapel Dinner Jacket",
          price: "$200",
          img: "/images/dinner-jacket.jpg",
        },
        {
          name: "Velvet Smoking Jacket",
          price: "$180",
          img: "/images/smoking-jacket.jpg",
        },
        { name: "Pinstripe Suit", price: "$270", img: "/images/pinstripe.jpg" },
        {
          name: "Linen Wedding Suit",
          price: "$320",
          img: "/images/wedding-suit.jpg",
        },
      ],
    },
  ];

  return (
    <div>
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
