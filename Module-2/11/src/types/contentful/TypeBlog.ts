import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  contentTypeId: "blog";
  fields: {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    summary: EntryFields.Symbol;
    details: EntryFields.RichText;
    articleImage: {
      fields: {
        file: {
          url: EntryFields.Symbol;
        };
      };
    };
    author: EntryFields.Symbol;
    createdAt: EntryFields.Date;
  };
}

export type TypeBlog = Entry<TypeBlogFields>;
