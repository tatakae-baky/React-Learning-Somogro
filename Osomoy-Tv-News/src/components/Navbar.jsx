import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Politics", href: "/politics" },
    { name: "Sports", href: "/sports" },
    { name: "Technology", href: "/technology" },
    { name: "Entertainment", href: "/entertainment" },
    { name: "Business", href: "/business" },
  ];

  return (
    <header>
      <div className="w-11/12 mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Date */}
          <div className="flex flex-col gap-0.5 ">
            <p className="font-bold text-gray-700">
              {format(new Date(), "EEEE , MMMM MM , yyyy")}
            </p>
          </div>

          {/* Navigations */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 font-semibold hover:text-[#D72050] px-3 py-2 text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Signup button */}
            <Button className="text-gray-100 hover:bg-[#D72050] hover:text-white ">
              {" "}
              Sign Up
            </Button>

            {/* Login button */}
            <Button className="text-gray-100 bg-[#D72050] hover:text-gray-100 hover:bg-black ">
              {" "}
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
