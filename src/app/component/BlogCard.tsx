import React from "react";
import { Card, CardContent, CardTitle } from "@/app/component/ui/card";
import Image from "next/image";
import Link from "next/link";
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: any;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4  ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
      height={300}
        width={300}
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-fill rounded-t-lg"
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on :{new Date(post.date).toLocaleDateString()}
        </p>
        <Link
          href={`/post/${post.id}`}
          className={`w-full py-2 text-center px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          ReadMore
        </Link>
      </div>
    </Card>
  );
}

export default BlogCard;
