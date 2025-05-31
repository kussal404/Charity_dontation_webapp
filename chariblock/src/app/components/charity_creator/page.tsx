"use client";
import React, { FormEvent } from "react";

const CreatorPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle the form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-xl font-bold mb-4">Register Your Charity</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-80">
        <input type="text" placeholder="Charity Name" className="p-2 border rounded" />
        <input type="text" placeholder="Wallet Address" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CreatorPage;
