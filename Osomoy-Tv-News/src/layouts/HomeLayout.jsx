import Header from "@/components/Header";
import LeftSide from "@/components/Homelayout/LeftSide";
import RightSide from "@/components/Homelayout/RightSide";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import FindUsOn from "@/components/Homelayout/FindUsOn";

const HomeLayout = () => {

  const location = useLocation();
  const {pathname} = location;

  const hideNavbar = 
  pathname.startsWith('/news')

  const hideLatesNews = 
  pathname.startsWith('/news')

  const hideLeftSide = 
  pathname.startsWith('/news')

  const showLoginSignup = 
  pathname.startsWith('/news')

  return (
    <>
      {/* Navbar and Header */}
      <header>
        {!hideNavbar && <Navbar></Navbar>}
        <Header></Header>
        <section className="w-11/12 mx-auto px-8 mt-4">
          {!hideLatesNews && <LatestNews></LatestNews>}
        </section>
      </header>
      {/* Main Content */}
      <main className="w-11/12 mx-auto my-12 px-8 grid grid-cols-12 gap-5">
        {/* Left Sidebar */}
        {
          !hideLeftSide && (
            <aside className="col-span-2 sticky top-4 h-fit">
              <LeftSide></LeftSide>
            </aside>
          )
        }
        {/* News Contents */}
        {
          !hideLeftSide? <section className="main col-span-7">
            <Outlet></Outlet>
          </section> : <section className="main col-span-9">
            <Outlet></Outlet>
          </section>
        }
        {/* Right Sidebar */}
        <aside className="col-span-3 sticky top-4 h-fit">
          <RightSide>
          </RightSide>
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
