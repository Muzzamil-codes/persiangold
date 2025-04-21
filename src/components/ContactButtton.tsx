"use client"; // for client-side rendering

import { useEffect, useState } from "react";

export default function CallButton() {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  useEffect(() => {
    // Ask for geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Use a free geocoding API to get country (like OpenCage, OpenStreetMap, etc.)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        const country = data.address.country || "";

        if (country.toLowerCase().includes("qatar")) {
          setPhoneNumber("tel:+97477979916");
        } else if (country.toLowerCase().includes("united arab emirates")) {
          setPhoneNumber("tel:+971551855916");
        } else {
          // fallback
          setPhoneNumber("tel:+97477979916");
        }
      });
    }
  }, []);

  if (!phoneNumber) return null; // or show loading

  return (
    <a href={phoneNumber} className="btn-primary">
      Contact Us
    </a>
  );
}
