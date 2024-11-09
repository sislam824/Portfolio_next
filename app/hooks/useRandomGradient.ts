"use client";
import { useEffect, useState } from "react";

const gradients = [
  // "from-purple-400 via-pink-500 to-red-500",
  "from-blue-400 via-teal-500 to-green-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-indigo-400 via-purple-500 to-pink-500",
  "from-green-400 via-teal-500 to-blue-500",
];

export function useRandomGradient() {
  const [gradient, setGradient] = useState("");

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    setGradient(gradients[randomIndex]);
  };

  useEffect(() => {
    getRandomGradient();
  }, []);

  return { gradient, getRandomGradient };
}
