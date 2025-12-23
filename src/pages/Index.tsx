import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import TrustIndicators from "@/components/home/TrustIndicators";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center bg-gradient-to-b from-pharmacy-blue-50 to-white py-12 px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-pharmacy-blue-800 mb-6 leading-tight">
            Your Trusted Online Pharmacy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience safety, fast delivery, and certified products right at your doorstep. We care for your health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-pharmacy-blue-500 hover:bg-pharmacy-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                Shop Medicines
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-pharmacy-blue-500 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <FeaturedCategories />

      {/* Trust Indicators Section */}
      <TrustIndicators />
    </div>
  );
};

export default Index;