import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Lock, Shield, Headset } from "lucide-react"; // Added Headset

const CartCheckout = () => {
  // Dummy cart items and totals
  const cartItems = [
    
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-pharmacy-blue-800 mb-8 text-center">Your Cart & Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Steps / Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700">1. Review Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                      <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded-md" />
                      <div className="flex-grow">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-pharmacy-green-700">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700">2. Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {/* Placeholder for shipping form/details */}
                Shipping address and delivery options will be displayed here.
              </p>
              <Button variant="outline" className="mt-4 border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
                Add Shipping Details
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700">3. Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {/* Placeholder for payment options */}
                Payment options (credit card, etc.) will be displayed here.
              </p>
              <Button variant="outline" className="mt-4 border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
                Select Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary & Trust Badges */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="shadow-lg bg-pharmacy-blue-50 border-pharmacy-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-pharmacy-blue-800">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-xl text-foreground">
                <span>Order Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full bg-pharmacy-green-500 hover:bg-pharmacy-green-600 text-white text-lg py-3 transition-colors">
                <CheckCircle className="mr-2 h-5 w-5" /> Place Order
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-pharmacy-blue-700">Shop with Confidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-pharmacy-green-700">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">Secure Payment Processing</span>
              </div>
              <div className="flex items-center gap-3 text-pharmacy-green-700">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Certified & Authentic Products</span>
              </div>
              <div className="flex items-center gap-3 text-pharmacy-green-700">
                <Headset className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Customer Support</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;