import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-pharmacy-blue-700 hover:text-pharmacy-blue-900 transition-colors">
            <img src="/public/img/medicare-logo.jpg" alt="Pharmacy Logo" className="h-8 w-8 rounded-full" />
            MediCare
          </Link>
          <p className="text-sm text-muted-foreground">
            Your trusted online pharmacy for safe, fast, and certified medicines.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/products" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Shop Medicines</Link></li>
            <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Categories</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Policies & Help</h3>
          <ul className="space-y-1">
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Terms of Service</Link></li>
            <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MediCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;