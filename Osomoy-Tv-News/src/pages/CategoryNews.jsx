import NewsCard from "@/components/NewsCard";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryNews = () => {
  const news = useLoaderData();
  const [noData, setNoData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (news.data.length === 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
    setIsLoading(false);
  }, [news.data]);


  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
        </div>
      ) : noData ? (
        <h2 className="text-center text-gray-600 text-xl py-8">No News in this Category</h2>
      ) : (
        <div>
          {news.data.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
