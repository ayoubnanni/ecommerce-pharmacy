import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    prescriptionRequired: boolean;
    category: string; // Added category property
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-foreground hover:text-pharmacy-blue-700 transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground flex-grow mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-pharmacy-green-700">
            {product.price.toFixed(2)}DA
          </span>
          {product.prescriptionRequired && (
            <span className="text-xs text-red-500 font-medium">Rx Required</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-pharmacy-blue-500 hover:bg-pharmacy-blue-600 text-white transition-colors">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;