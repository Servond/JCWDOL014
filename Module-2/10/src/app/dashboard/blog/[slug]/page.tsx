"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface IDog {
  message: string;
  status: string;
}

function Blog({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<IDog>({
    message: "",
    status: "",
  });

  const fetchBlog = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blog", {
        method: "GET",
        next: {
          tags: ["blogs"],
        },
      });
      const parse = await res.json();
      console.log(parse);
      setBlog(parse);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <h1>{params.slug}</h1>
      <h2>{blog?.message}</h2>
      <p>{blog?.status}</p>
      <Image
        src="/static/programs/kesehatan/scen.png"
        alt="foto"
        width={64}
        height={64}
      />
    </div>
  );
}
export default Blog;
