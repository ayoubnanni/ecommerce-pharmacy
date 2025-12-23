import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Package, User, Settings } from "lucide-react";

const Account = () => {
  // Dummy user data
  const user = {
    name: "ayoub nanni",
    email: "ayoub@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Pharmacy , bba, algeria",
  };

  // Dummy order history
  const orders = [
    { id: "ORD001", date: "2023-10-26", total: 180, status: "Delivered" },
    { id: "ORD002", date: "2023-11-10", total: 875, status: "Processing" },
    { id: "ORD003", date: "2023-12-01", total: 2250, status: "Shipped" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-pharmacy-blue-800 mb-8 text-center">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700 flex items-center gap-2">
              <User className="h-6 w-6" /> Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2 block text-sm font-medium">Full Name</Label>
              <Input id="name" type="text" value={user.name} readOnly />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block text-sm font-medium">Email Address</Label>
              <Input id="email" type="email" value={user.email} readOnly />
            </div>
            <div>
              <Label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone Number</Label>
              <Input id="phone" type="tel" value={user.phone} readOnly />
            </div>
            <div>
              <Label htmlFor="address" className="mb-2 block text-sm font-medium">Shipping Address</Label>
              <Input id="address" type="text" value={user.address} readOnly />
            </div>
            <Button className="bg-pharmacy-blue-500 hover:bg-pharmacy-blue-600 text-white transition-colors">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Order History */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700 flex items-center gap-2">
              <Package className="h-6 w-6" /> Order History
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-muted-foreground text-center">No orders found.</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Order #{order.id}</span>
                    <span className="text-sm text-muted-foreground">{order.date}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-pharmacy-green-700 font-semibold">${order.total.toFixed(2)}</span>
                    <span className={`text-sm font-medium ${order.status === "Delivered" ? "text-green-600" : order.status === "Processing" ? "text-yellow-600" : "text-blue-600"}`}>
                      {order.status}
                    </span>
                  </div>
                  <Link to={`/orders/${order.id}`} className="text-sm text-pharmacy-blue-500 hover:underline mt-2 block">
                    View Details
                  </Link>
                </div>
              ))
            )}
            <Button variant="outline" className="w-full mt-4 border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="lg:col-span-3 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700 flex items-center gap-2">
              <Settings className="h-6 w-6" /> Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
              Manage Payment Methods
            </Button>
            <Button variant="outline" className="w-full justify-start border-pharmacy-blue-300 text-pharmacy-blue-700 hover:bg-pharmacy-blue-50 hover:text-pharmacy-blue-800 transition-colors">
              Notification Preferences
            </Button>
            <Separator />
            <Button variant="destructive" className="w-full justify-start">
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;