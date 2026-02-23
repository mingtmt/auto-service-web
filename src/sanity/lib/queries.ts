import { client } from "./client";
import { groq } from "next-sanity";

export interface Service {
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

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  sku: string;
  price: number;
  discountPrice: number;
  stock: number;
  category: string;
  mainImage: any;
  description: any;
}

export async function getAllPosts(): Promise<Service[]> {
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

export async function getPostsByService(
  serviceSlug: string,
): Promise<Service[]> {
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

export async function getPostBySlug(slug: string): Promise<Service> {
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

export async function getAllProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      sku,
      price,
      discountPrice,
      stock,
      category,
      mainImage
    }`,
  );
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      sku,
      price,
      discountPrice,
      stock,
      category,
      mainImage,
      description
    }`,
    { slug },
  );
}
