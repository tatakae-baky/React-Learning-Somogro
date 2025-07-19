import Header from "@/components/Header";
import LeftSide from "@/components/Homelayout/LeftSide";
import RightSide from "@/components/Homelayout/RightSide";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      {/* Navbar and Header */}
      <header>
        <Navbar></Navbar>
        <Header></Header>
        <section className="w-11/12 mx-auto px-8">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* Main Content */}
      <main className="w-11/12 mx-auto my-8 px-8 grid grid-cols-12 gap-5">
        {/* Left Sidebar */}
        <aside className="col-span-2 sticky top-0 h-fit">
          <LeftSide></LeftSide>
        </aside>
        {/* News Contents */}
        <section className="main col-span-7">
          <Outlet></Outlet>
        </section>
        {/* Right Sidebar */}
        <aside className="col-span-3 sticky top-0 h-fit border-2 border-amber-600">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
