"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { logoutUser } from "@/app/api";

// Page title mappings (auto-detect section names)
const PAGE_TITLES = {
  "/men": "Men's Clothing",
  "/women": "Women's Collection",
  "/kids": "Kids' Fashion",
  "/login": "Login",
  "/admin": "Admin Dashboard",
  // Add more routes as needed
};

// Define which links to show per route
const NAV_CONFIG = {
  default: [
    { href: "/", label: "Home" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/kids", label: "Kids" },
  ],
  admin: [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // Auto-detect section title
  const sectionTitle = PAGE_TITLES[pathname] || "";

  // Determine which links to show
  const getNavLinks = () => {
    if (pathname.startsWith("/admin")) return NAV_CONFIG.admin;
    return NAV_CONFIG.default;
  };
  const navLinks = getNavLinks();

  // Close mobile menu on route change
  useEffect(() => setIsMobileOpen(false), [pathname]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsAuthenticated(false);
      // Optional: redirect after logout
      if (pathname.startsWith("/admin") || pathname === "/account") {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-[#4a7c59] shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Auto Page Title */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-[#f2e2d2]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-2xl font-bold text-[#f2e2d2]">
            AGORA{sectionTitle && ` - ${sectionTitle}`}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[#f2e2d2] hover:text-[#1e1014] ${
                pathname === link.href ? "font-bold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Universal Actions (Search, Cart, Login/Logout) */}
          <div className="flex items-center gap-4 ml-6">
            <SearchBar />
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link href="/account" className="text-[#f2e2d2] hover:text-[#1e1014]">
                    <User size={20} />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-[#f2e2d2] hover:text-[#1e1014]"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="text-[#f2e2d2] hover:text-[#1e1014]">
                  <User size={20} />
                </Link>
              )}
              <Link href="/cart" className="relative text-[#f2e2d2] hover:text-[#1e1014]">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1e1014] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile: Show only cart/login/logout */}
        <div className="flex md:hidden gap-4">
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/account" className="text-[#f2e2d2] hover:text-[#1e1014]">
                  <User size={20} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-[#f2e2d2] hover:text-[#1e1014]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="text-[#f2e2d2] hover:text-[#1e1014]">
                <User size={20} />
              </Link>
            )}
            <Link href="/cart" className="relative text-[#f2e2d2] hover:text-[#1e1014]">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1e1014] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#4a7c59] px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-[#f2e2d2] hover:text-[#1e1014] ${
                pathname === link.href ? "font-bold border-l-4 border-[#1e1014] pl-2" : "pl-6"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#f2e2d2]/20">
            <SearchBar mobile />
          </div>
        </div>
      )}
    </header>
  );
}

// Sub-components for modularity
function SearchBar({ mobile = false }) {
  return (
    <div className={`${mobile ? "mt-4" : "relative ml-4"}`}>
      <input
        type="text"
        placeholder="Search..."
        className={`border rounded-lg px-4 py-1 ${mobile ? "w-full" : "pl-10 w-64"}`}
      />
      {!mobile && <Search className="absolute left-3 top-2 text-[#4a7c59]" />}
    </div>
  );
}