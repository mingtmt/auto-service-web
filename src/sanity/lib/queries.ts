import { client } from "./client";
import { groq } from "next-sanity";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  excerpt: any;
  serviceSlug: string;
  author: string;
  publishedAt: string;
  content: any;
}

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      "excerpt": pt::text(excerpt),
      serviceSlug,
      author,
      publishedAt
    }`,
  );
}

export async function getPostsByService(serviceSlug: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && serviceSlug == $serviceSlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      "excerpt": pt::text(excerpt),
      author,
      publishedAt
    }`,
    { serviceSlug },
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      mainImage,
      excerpt,
      serviceSlug,
      author,
      publishedAt,
      content
    }`,
    { slug },
  );
}
