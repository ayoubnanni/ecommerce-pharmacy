import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const cartItemCount = 0; // Dummy value for cart badge

  const navLinks = (
    <>
      <Link to="/products" className="text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
        Shop Medicines
      </Link>
      <Link to="/categories" className="text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
        Categories
      </Link>
      <Link to="/about" className="text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
        About Us
      </Link>
      <Link to="/contact" className="text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-pharmacy-blue-700 hover:text-pharmacy-blue-900 transition-colors">
          <img src="/public/img/medicare-logo.jpg" alt="MediCare Logo" className="h-8 w-8 rounded-full" />
          MediCare
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium pt-8">
                {navLinks}
                <div className="flex items-center gap-4 mt-4">
                  <Input
                    type="search"
                    placeholder="Search medicines..."
                    className="h-9 w-full rounded-md bg-muted px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
                <Link to="/cart" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                  {cartItemCount > 0 && (
                    <Badge variant="destructive" className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {cartItemCount}
                    </Badge>
                  )}
                </Link>
                <Link to="/account" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-pharmacy-blue-500">
                  <User className="h-5 w-5" />
                  Account
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks}
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search medicines..."
                  className="h-9 w-[200px] rounded-md bg-muted px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                {cartItemCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;