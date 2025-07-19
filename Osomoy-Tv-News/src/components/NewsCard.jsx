import { Card, CardContent } from "@/components/ui/card";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { Eye } from "lucide-react";

export default function NewsCard({ news }) {

    const {title, image_url, details, rating, total_view, author} = news;

  return (
    <Card className="rounded-xs border">
      {/* Top Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-muted-foreground">
              {author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <FiBookmark className="w-4 h-4" />
          <FiShare2 className="w-4 h-4" />
        </div>
      </div>

      {/* Title, Image, Content */}
      <CardContent className="p-4 space-y-4">
        <h2 className="text-lg font-bold leading-snug">
          {title}
        </h2>

        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />

        <p className="text-sm text-muted-foreground">
          {details.slice(0, 200)}...
          <span className="text-[#D72050] font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Footer: Rating + Views */}
        <div className="flex justify-between items-center border-t pt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 text-[#D72050]">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-[#D72050]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.872 1.42 8.28L12 19.771 4.58 23.9 6 15.62 0 9.748l8.332-1.593z" />
              </svg>
            ))}
            <span className="text-black font-semibold ml-1">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            {total_view}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
