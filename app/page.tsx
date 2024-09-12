"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function Page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
