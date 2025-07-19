import NewsCard from "@/components/NewsCard";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryNews = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.data.map((singleNews) => (
        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
