import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const navigate = useNavigate();

  const news = newsDetails.data[0]; // assuming `data` is an array with one item

  if (!news)
    return (
      <p className="text-center mt-10 text-muted-foreground">News not found.</p>
    );

  return (
    <div className="w-11/12 mx-auto p-2 bg-white rounded-xs space-y-5">
      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="rounded-lg w-full h-full object-cover"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight">{news.title}</h1>

      {/* Full Details */}
      <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
        {news.details}
      </p>

      {/* CTA Button */}
      <div>
        <Button
          className="bg-[#D72050] text-white hover:bg-black hover:text-white"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="w-4 h-4" /> All news in this category
        </Button>
      </div>
    </div>
  );
};

export default NewsDetails;
