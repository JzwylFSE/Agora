"use client"

import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");

  // Mock data - replace with your actual cart data fetching
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data.items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    // Add API call to update quantity in backend
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    // Add API call to remove item from backend
  };

  const applyCoupon = () => {
    // Add coupon validation logic
    console.log("Applying coupon:", couponCode);
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2e2d2]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4a7c59]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2e2d2]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1e1014] mb-8 flex items-center">
          <ShoppingCart className="mr-2" /> Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-[#4a7c59] mb-4">Your cart is empty</p>
            <Link
              href="/shop"
              className="bg-[#4a7c59] text-[#f2e2d2] px-6 py-3 rounded-lg hover:bg-[#1e1014] transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 bg-[#4a7c59] text-[#f2e2d2] p-4 font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 p-4 border-b items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-6 md:col-span-5 flex items-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 mr-2 md:mr-4"
                        aria-label="Remove item"
                      >
                        <X size={18} />
                      </button>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-[#1e1014]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[#4a7c59]">
                          Size: {item.size}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center text-[#1e1014] hidden md:block">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-3 flex justify-center">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#4a7c59] hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#4a7c59] hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-right font-medium text-[#1e1014]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code */}
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-[#1e1014] mb-3">
                  Apply Coupon Code
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a7c59]"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-[#4a7c59] text-[#f2e2d2] px-6 py-2 rounded-r-lg hover:bg-[#1e1014] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h3 className="text-xl font-bold text-[#1e1014] mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#4a7c59]">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4a7c59]">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4a7c59]">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg text-[#1e1014]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full bg-[#4a7c59] text-[#f2e2d2] text-center py-3 rounded-lg hover:bg-[#1e1014] transition-colors mb-4"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/home"
                  className="block w-full border border-[#4a7c59] text-[#4a7c59] text-center py-3 rounded-lg hover:bg-[#f2e2d2] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}