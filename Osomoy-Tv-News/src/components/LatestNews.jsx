import React from "react";
import Marquee from "react-fast-marquee";

/**
 * LatestNews component displays scrolling news headlines
 * Uses react-fast-marquee for smooth scrolling animation
 */
const LatestNews = () => {
  return (
    <div className="flex mt-8">
      {/* Headline label with brand color */}
      <h2 className="bg-[#D72050] text-white p-2 font-semibold">Headline</h2>
      
      {/* Marquee container for scrolling news */}
      <Marquee 
        className="flex-1" 
        pauseOnHover={true} 
        speed={150}
        gradient={true}
        gradientWidth={60}
      >
        {/* News items with proper spacing using margins instead of gap */}
        <p className="font-bold mx-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae deleniti ipsa nihil ipsam amet perspiciatis, delectus odit, a numquam minus? Quae odio, quam cupiditate eveniet autem optio mollitia rem.
        </p>
        <p className="font-bold mx-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni consequuntur porro ullam culpa quasi, deserunt, incidunt ea voluptates repellendus quidem sint vel reiciendis et enim aliquid. Nisi, distinctio quidem!
        </p>
        <p className="font-bold mx-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis et eum, amet nesciunt nisi maxime deserunt neque at voluptatum nulla cumque laudantium totam corporis, unde, qui officiis expedita autem velit. 
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
