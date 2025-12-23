import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Syringe, Stethoscope, Heart, Brain, Shield } from "lucide-react";

const categories = [
  { name: "Pain Relief", icon: Pill, link: "/products?category=pain-relief" },
  { name: "Vitamins & Supplements", icon: Syringe, link: "/products?category=vitamins" },
  { name: "Cold & Flu", icon: Stethoscope, link: "/products?category=cold-flu" },
  { name: "Skin Care", icon: Heart, link: "/products?category=skin-care" },
  { name: "Digestive Health", icon: Brain, link: "/products?category=digestive-health" },
  { name: "First Aid", icon: Shield, link: "/products?category=first-aid" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pharmacy-blue-800 mb-10">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group">
              <Card className="flex flex-col items-center justify-center p-6 h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg border-2 border-transparent hover:border-pharmacy-blue-300">
                <CardContent className="flex flex-col items-center p-0">
                  <category.icon className="h-12 w-12 text-pharmacy-blue-500 mb-4 group-hover:text-pharmacy-blue-700 transition-colors" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-pharmacy-blue-800 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;