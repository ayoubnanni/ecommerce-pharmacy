import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted!");
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pharmacy-blue-800 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to provide feedback, please don't hesitate to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 block text-sm font-medium">Your Name</Label>
                <Input id="name" type="text" placeholder="ayoub nanni" required />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block text-sm font-medium">Your Email</Label>
                <Input id="email" type="email" placeholder="ayoub@example.com" required />
              </div>
              <div>
                <Label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry about an order" required />
              </div>
              <div>
                <Label htmlFor="message" className="mb-2 block text-sm font-medium">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-pharmacy-blue-500 hover:bg-pharmacy-blue-600 text-white text-lg py-3 transition-colors">
                Submit Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg bg-pharmacy-blue-50 border-pharmacy-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pharmacy-blue-700">Our Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-pharmacy-green-700" />
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <a href="mailto:support@medicare.com" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">support@medicare.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-pharmacy-green-700" />
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-pharmacy-blue-500 transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-pharmacy-green-700" />
              <div>
                <h3 className="font-medium text-foreground">Address</h3>
                <p className="text-muted-foreground">1008, BBA City, 98765</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-medium text-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground">sunday - thursday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground">friday: Closed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;