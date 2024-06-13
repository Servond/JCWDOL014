"use client";
import { useState, useEffect } from "react";
import { TypeBlogFields, TypeBlog } from "@/types/contentful";
import { client } from "@/utils/contentful";
import RichText from "@/view/home/components/richText";

export default function Article({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<any>();

  const fetchArticle = async () => {
    try {
      const data = await client.getEntries({
        content_type: "blog",
        limit: 1,
        "fields.slug": params.slug,
      });
      setArticle(data.items[0].fields);
    } catch (err) {
      //   throw new Error(err);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div>
      <div>{article?.title}</div>
      <div>{article?.summary}</div>
      <RichText document={article?.details} />
    </div>
  );
}
