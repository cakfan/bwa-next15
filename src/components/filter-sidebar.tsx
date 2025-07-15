"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";

interface FilterSidebarProps {
  countries: { id: string; code: string; name: string }[];
  categories: { id: string; slug: string; name: string }[];
  ageRatings: { id: string; code: string; description: string }[];
}

export default function FilterSidebar({
  countries,
  categories,
  ageRatings,
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [country, setCountry] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    const countryParam = searchParams.get("country") || "";
    const ageRatingParam = searchParams.get("ageRating") || "";
    const ratingParam = searchParams.get("rating") || "";
    const categoryParam = searchParams.get("category");

    setCountry(countryParam);
    setAgeRating(ageRatingParam);
    setRating(ratingParam);
    setCategory(categoryParam ? categoryParam.split(",").filter(Boolean) : []);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (country) params.set("country", country);
    else params.delete("country");

    if (ageRating) params.set("ageRating", ageRating);
    else params.delete("ageRating");

    if (rating) params.set("rating", rating);
    else params.delete("rating");

    if (category.length > 0) {
      params.set("category", category.join(","));
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setCountry("");
    setAgeRating("");
    setRating("");
    setCategory([]);
    router.push(pathname);
  };

  const handleCategoryChange = (slug: string, checked: boolean) => {
    setCategory((prev) =>
      checked ? [...prev, slug] : prev.filter((s) => s !== slug),
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border w-64 space-y-6 border-r p-4"
    >
      {/* Country */}
      <div>
        <Label>Country</Label>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div>
        <Label>Categories</Label>
        <div className="space-y-2">
          {categories.map((cat) => {
            const isChecked = category.includes(cat.slug);
            return (
              <div key={cat.slug} className="flex items-center gap-2">
                <Checkbox
                  id={cat.slug}
                  checked={isChecked}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(cat.slug, Boolean(checked))
                  }
                />
                <label htmlFor={cat.slug} className="text-sm capitalize">
                  {cat.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Age Rating */}
      <div>
        <Label>Age Rating</Label>
        <Select value={ageRating} onValueChange={setAgeRating}>
          <SelectTrigger>
            <SelectValue placeholder="Select age rating" />
          </SelectTrigger>
          <SelectContent>
            {ageRatings.map((ar) => (
              <SelectItem key={ar.code} value={ar.code}>
                {ar.code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Min Rating */}
      <div>
        <Label>Min Rating</Label>
        <RadioGroup
          value={rating}
          onValueChange={setRating}
          className="space-y-2"
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <div key={val} className="flex items-center space-x-2">
              <RadioGroupItem value={val.toString()} id={`rating-${val}`} />
              <label
                htmlFor={`rating-${val}`}
                className="flex items-center gap-1 text-sm"
              >
                {Array.from({ length: val }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Apply Filters
        </Button>
        <Button
          type="button"
          variant="destructive"
          onClick={handleReset}
          className="w-full"
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
