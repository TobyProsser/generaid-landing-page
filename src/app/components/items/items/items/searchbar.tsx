"use client"; // Required for Next.js client component

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogoIonic } from "react-ionicons";

type SearchBarProps = {
  height: number;
};

export default function SearchBar({ height }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (loading) return;
    setLoading(true);
    try {
      // Simulate a delay for loading state
      setTimeout(() => {
        router.push(`/post?response=${inputValue}`);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="search-bar" style={{ minHeight: height }}>
      <input
        className="search-input"
        type="text"
        placeholder="Type anything..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Trigger search on Enter key
      />
      <button
        className="search-button"
        onClick={handleSearch}
        disabled={loading}
      >
        <LogoIonic size={24} color="black" />
      </button>
    </div>
  );
}
