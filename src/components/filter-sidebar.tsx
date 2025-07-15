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
import { useEffect, useState } from "react";

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

  const [country, setCountry] = useState(defaultCountry ?? null);
  const [ageRating, setAgeRating] = useState(defaultAgeRating ?? null);
  const [rating, setRating] = useState(defaultRating ?? null);
  const [category, setCategory] = useState<string[]>(defaultCategory ?? null);

  const updateURL = (
    next: {
      country?: string;
      ageRating?: string;
      rating?: string;
      category?: string[];
    } = {},
  ) => {
    const params = new URLSearchParams();

    if (next.country) params.set("country", next.country);
    if (next.ageRating) params.set("ageRating", next.ageRating);
    if (next.rating) params.set("rating", next.rating);
    if (next.category && next.category.length > 0) {
      params.set("category", next.category.join(","));
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    updateURL({ country, ageRating, rating, category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
