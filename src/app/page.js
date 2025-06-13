"use client"

import React, { useState } from "react";
import Link from "next/link";
import Category from "@/components/Category";
import Navbar from "@/components/Header/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Connect to your cart state

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />

      {/* Hero Section */}
      <section className="bg-[#f2e2d2] py-16 md:py-24 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1014] mb-4">
            Discover Fashion That Defines You
          </h2>
          <p className="text-base md:text-lg text-[#4a7c59] mb-6 max-w-2xl mx-auto">
            Exclusive clothing collections for every style and occasion.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#4a7c59] text-[#f2e2d2] px-6 py-3 rounded-lg hover:bg-[#1e1014] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto py-10 px-4 flex-1">
        <h3 className="text-2xl font-bold text-[#4a7c59] mb-6 text-center md:text-left">
          Shop by Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Category
            imageUrl="/Images/Men's_clothing_2.jpeg"
            categoryName="Men"
            href="/men"
          />
          <Category
            imageUrl="/Images/Women's_Clothing.jpg"
            categoryName="Women"
            href="/women"
          />
          <Category
            imageUrl="/Images/kids_clothing_2.jpg"
            categoryName="Kids"
            href="/kids"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1014] text-[#f2e2d2] py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2025 Agora Clothing. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#4a7c59] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#4a7c59] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}