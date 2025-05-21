import React, { useState } from "react";
import { Sparkles, Home, Package, Heart, MessageCircle, Menu, X } from "lucide-react";
  
const Navbar= () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold tracking-tight text-gray-800">PureSkin</span>
        </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <Home className="h-4 w-4" />
            Home
          </a>
          <a href="#products" className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <Package className="h-4 w-4" />
            Products
          </a>
          <a href="#benefits" className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <Heart className="h-4 w-4" />
            Benefits
          </a>
          <a href="#testimonials" className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <MessageCircle className="h-4 w-4" />
            Testimonials
          </a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login"><button className="text-sm text-gray-700 hover:text-pink-500 transition">Sign In</button></a>
          <button className="text-sm bg-pink-500 text-white px-4 py-1.5 rounded hover:bg-pink-600 transition">Shop Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#products" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
            <Package className="h-4 w-4" /> Products
          </a>
          <a href="#benefits" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
            <Heart className="h-4 w-4" /> Benefits
          </a>
          <a href="#testimonials" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
            <MessageCircle className="h-4 w-4" /> Testimonials
          </a>
          <div className="pt-2 border-t flex flex-col gap-2">
             <a href="/login"><button className="text-sm text-gray-700 hover:text-pink-500 transition">Sign In</button></a>
            <button className="text-sm bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;