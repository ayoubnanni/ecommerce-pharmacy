import React from "react";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button"; // Removed as buttons are no longer needed
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Filters</h3>

      {/* Category Filter */}
      <div>
        <Label htmlFor="category" className="mb-2 block text-sm font-medium">Category</Label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="pain-relief">Pain Relief</SelectItem>
            <SelectItem value="vitamins">Vitamins & Supplements</SelectItem>
            <SelectItem value="cold-flu">Cold & Flu</SelectItem>
            <SelectItem value="skin-care">Skin Care</SelectItem>
            <SelectItem value="digestive-health">Digestive Health</SelectItem>
            <SelectItem value="first-aid">First Aid</SelectItem>
            <SelectItem value="fever-pain">Fever & Pain</SelectItem>
            <SelectItem value="personal-care">Personal Care</SelectItem>
            <SelectItem value="eye-care">Eye Care</SelectItem>
            <SelectItem value="dental-care">Dental Care</SelectItem>
            <SelectItem value="bone-joint">Bone & Joint</SelectItem>
            <SelectItem value="chronic-conditions">Chronic Conditions</SelectItem>
            <SelectItem value="mother-baby">Mother & Baby</SelectItem>
            <SelectItem value="herbal-natural">Herbal & Natural</SelectItem>
            <SelectItem value="sun-care">Sun Care</SelectItem>
            <SelectItem value="sexual-wellness">Sexual Wellness</SelectItem>
            <SelectItem value="medical-devices">Medical Devices</SelectItem>
            <SelectItem value="health-books">Health Books</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div>
        <Label htmlFor="price-range" className="mb-2 block text-sm font-medium">Price Range</Label>
        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Min" className="w-1/2" />
          <span>-</span>
          <Input type="number" placeholder="Max" className="w-1/2" />
        </div>
      </div>

      {/* Prescription Required Filter */}
      <div className="flex items-center space-x-2">
        <Checkbox id="prescription-required" />
        <Label htmlFor="prescription-required" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Prescription Required
        </Label>
      </div>

      {/* Removed Apply Filters and Clear Filters buttons */}
    </div>
  );
};

export default ProductFilters;