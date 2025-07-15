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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface FilterSidebarProps {
  countries: { id: string; code: string; name: string }[];
  categories: { id: string; slug: string; name: string }[];
  ageRatings: { id: string; code: string; description: string }[];
  defaultCountry?: string;
  defaultAgeRating?: string;
  defaultRating?: string;
  defaultCategory?: string[];
}

export default function FilterSidebar({
  countries,
  categories,
  ageRatings,
  defaultCountry = "",
  defaultAgeRating = "",
  defaultRating = "",
  defaultCategory = [],
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [country, setCountry] = useState(defaultCountry);
  const [ageRating, setAgeRating] = useState(defaultAgeRating);
  const [rating, setRating] = useState(defaultRating);
  const [category, setCategory] = useState<string[]>(defaultCategory);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const updateURL = () => {
    const params = new URLSearchParams();

    if (country) params.set("country", country);
    if (ageRating) params.set("ageRating", ageRating);
    if (rating) params.set("rating", rating);
    if (category.length > 0) {
      params.set("category", category.join(","));
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  useEffect(() => {
    // Clear previous timeout if still pending
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Set new timeout for debounce
    debounceRef.current = setTimeout(() => {
      updateURL();
    }, 500); // delay 500ms

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [country, ageRating, rating, category]);

  const handleCategoryChange = (slug: string, checked: boolean) => {
    setCategory((prev) =>
      checked ? [...prev, slug] : prev.filter((s) => s !== slug),
    );
  };

  return (
    <div className="border-border w-64 space-y-6 border-r p-4">
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
    </div>
  );
}
