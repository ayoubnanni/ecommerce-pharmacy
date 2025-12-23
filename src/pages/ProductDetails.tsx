import React from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "@/pages/ProductListing"; // ✅ IMPORT
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, FileText } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  // ✅ FIND PRODUCT BY ID
  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center items-center bg-card p-6 rounded-lg shadow-sm">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-pharmacy-blue-800">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-extrabold text-pharmacy-green-700">
              DA{product.price.toFixed(2)}
            </span>

            {product.prescriptionRequired && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <FileText className="h-4 w-4" /> Rx Required
              </Badge>
            )}
          </div>

          <Button size="lg" className="w-full">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>

          <Tabs defaultValue="description">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="warnings">Warnings</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              {product.description}
            </TabsContent>

            <TabsContent value="usage">
              Usage information coming soon.
            </TabsContent>

            <TabsContent value="warnings">
              Warnings information coming soon.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
