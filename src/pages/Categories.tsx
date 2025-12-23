import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pill, Syringe, Stethoscope, Heart, Brain, Shield,
  Thermometer, Bandage, Eye, Clipboard, Bone, Dna, // Changed Tooth to Clipboard
  Baby, Apple, Sun, FlaskConical, Microscope, BookOpen
} from "lucide-react";

const categories = [
  { name: "Pain Relief", icon: Pill, description: "Solutions for various types of pain.", link: "/products?category=pain-relief" },
  { name: "Vitamins & Supplements", icon: Syringe, description: "Boost your health and wellness.", link: "/products?category=vitamins" },
  { name: "Cold & Flu", icon: Stethoscope, description: "Relief from common cold and flu symptoms.", link: "/products?category=cold-flu" },
  { name: "Skin Care", icon: Heart, description: "Products for healthy and radiant skin.", link: "/products?category=skin-care" },
  { name: "Digestive Health", icon: Brain, description: "Support for a healthy digestive system.", link: "/products?category=digestive-health" },
  { name: "First Aid", icon: Shield, description: "Essentials for minor injuries and emergencies.", link: "/products?category=first-aid" },
  { name: "Fever & Pain", icon: Thermometer, description: "Medicines for fever and general pain.", link: "/products?category=fever-pain" },
  { name: "Personal Care", icon: Bandage, description: "Everyday hygiene and personal wellness.", link: "/products?category=personal-care" },
  { name: "Eye Care", icon: Eye, description: "Products for vision and eye health.", link: "/products?category=eye-care" },
  { name: "Dental Care", icon: Clipboard, description: "Maintain oral hygiene and health.", link: "/products?category=dental-care" }, // Changed Tooth to Clipboard
  { name: "Bone & Joint", icon: Bone, description: "Support for strong bones and healthy joints.", link: "/products?category=bone-joint" },
  { name: "Chronic Conditions", icon: Dna, description: "Management for long-term health issues.", link: "/products?category=chronic-conditions" },
  { name: "Mother & Baby", icon: Baby, description: "Care products for mothers and infants.", link: "/products?category=mother-baby" },
  { name: "Herbal & Natural", icon: Apple, description: "Natural remedies and herbal supplements.", link: "/products?category=herbal-natural" },
  { name: "Sun Care", icon: Sun, description: "Protection and care for sun-exposed skin.", link: "/products?category=sun-care" },
  { name: "Sexual Wellness", icon: FlaskConical, description: "Products for intimate health.", link: "/products?category=sexual-wellness" },
  { name: "Medical Devices", icon: Microscope, description: "Equipment for health monitoring and care.", link: "/products?category=medical-devices" },
  { name: "Health Books", icon: BookOpen, description: "Educational resources for health awareness.", link: "/products?category=health-books" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pharmacy-blue-800 mb-12">
          All Product Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group">
              <Card className="flex flex-col items-center p-6 h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg border-2 border-transparent hover:border-pharmacy-blue-300">
                <CardContent className="flex flex-col items-center p-0 text-center">
                  <category.icon className="h-12 w-12 text-pharmacy-blue-500 mb-4 group-hover:text-pharmacy-blue-700 transition-colors" />
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-pharmacy-blue-800 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;