import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, ShieldCheck, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pharmacy-blue-800 mb-6">
          About MediCare
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At MediCare, we are dedicated to providing accessible, affordable, and high-quality healthcare products to our community. Our mission is to empower individuals to take control of their health and well-being with confidence and ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-pharmacy-blue-700">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a vision to revolutionize how people access essential medicines, MediCare started as a small initiative to bridge the gap between patients and reliable pharmaceutical products. Over the years, we've grown into a trusted online platform, committed to upholding the highest standards of safety and customer service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that everyone deserves easy access to the medications and health products they need, delivered right to their doorstep with care and discretion.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/public/img/medicare-logo.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="bg-pharmacy-blue-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-3xl font-bold text-pharmacy-blue-700 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <ShieldCheck className="h-12 w-12 text-pharmacy-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Trust & Safety</h3>
            <p className="text-muted-foreground text-sm">Ensuring all products are certified and safe for use.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Heart className="h-12 w-12 text-pharmacy-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Customer-Centric</h3>
            <p className="text-muted-foreground text-sm">Prioritizing your health and satisfaction above all.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <CheckCircle className="h-12 w-12 text-pharmacy-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground text-sm">Delivering only the highest quality medications.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Users className="h-12 w-12 text-pharmacy-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Community Focus</h3>
            <p className="text-muted-foreground text-sm">Committed to serving and improving community health.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-pharmacy-blue-700 mb-6">
          Have Questions?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our friendly customer support team is here to help you.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-pharmacy-blue-500 hover:bg-pharmacy-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;