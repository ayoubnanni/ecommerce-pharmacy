import React, { useState, useEffect } from "react";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { useSearchParams } from "react-router-dom";

// ✅ EXPORT the products
export const dummyProducts = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    description: "Effective relief from pain and fever.",
    price: 250,
    imageUrl: "/public/img/paracetamol.jpg",
    prescriptionRequired: false,
    category: "pain-relief",
  },
  {
    id: "2",
    name: "Panadol Antibiotic",
    description: "Antibiotic for bacterial infections.",
    price: 175,
    imageUrl: "/public/img/panadol.jpg",
    prescriptionRequired: true,
    category: "cold-flu",
  },
  {
    id: "3",
    name: "Multivitamin Tablets",
    description: "Daily essential vitamins for overall health.",
    price: 875,
    imageUrl: "/public/img/multivitamin.avif",
    prescriptionRequired: false,
    category: "vitamins",
  },
  {
    id: "4",
    name: "Cough Syrup",
    description: "Soothes cough and relieves throat irritation.",
    price: 175,
    imageUrl: "/public/img/cough.avif",
    prescriptionRequired: false,
    category: "cold-flu",
  },
  {
    id: "5",
    name: "Insulin Pen",
    description: "For managing blood sugar levels in diabetes.",
    price: 1500,
    imageUrl: "/public/img/insulin-pen.jpg",
    prescriptionRequired: true,
    category: "chronic-conditions",
  },
  {
    id: "6",
    name: "Antacid Tablets",
    description: "Fast relief from heartburn and indigestion.",
    price: 499,
    imageUrl: "/public/img/antacid.jpg",
    prescriptionRequired: false,
    category: "digestive-health",
  },
  {
    id: "7",
    name: "Band-Aids (Assorted)",
    description: "Protects minor cuts and scrapes.",
    price: 120,
    imageUrl: "/public/img/band.webp",
    prescriptionRequired: false,
    category: "first-aid",
  },
  {
    id: "8",
    name: "Allergy Relief Pills",
    description: "Non-drowsy formula for seasonal allergies.",
    price: 1000,
    imageUrl: "/public/img/allergy.jpg",
    prescriptionRequired: false,
    category: "cold-flu",
  },
    {
    id: "9",
    name: "doliprane 500mg",
    description: "Non-drowsy formula for seasonal allergies.",
    price: 230,
    imageUrl: "/public/img/doliprane.jpg",
    prescriptionRequired: false,
    category: "pain-relief",
  },
];

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update state if URL param changes (e.g., navigating from another page with a category link)
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "all";
    if (categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = dummyProducts.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    }
    return product.category === selectedCategory;
  });

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-pharmacy-blue-800 mb-8 text-center">
        Our Medicines
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </aside>

        <section className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductListing;