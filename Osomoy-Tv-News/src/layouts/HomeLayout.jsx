import Header from "@/components/Header";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <section className="w-11/12 mx-auto px-8">
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default HomeLayout;
