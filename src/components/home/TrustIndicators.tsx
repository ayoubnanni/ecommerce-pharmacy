import React from "react";
import { ShieldCheck, Truck, CreditCard, Headset } from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Certified Products",
    description: "All medicines are sourced from verified manufacturers.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Get your orders delivered quickly and safely to your door.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your transactions are protected with industry-leading encryption.",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support",
    description: "Our team is always ready to assist you with any queries.",
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-pharmacy-blue-50 px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pharmacy-blue-800 mb-10">
          Why Choose MediCare?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <indicator.icon className="h-12 w-12 text-pharmacy-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {indicator.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;