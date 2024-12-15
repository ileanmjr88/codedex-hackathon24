import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        title: z.string(),
        description: z.string(),
        category: z.array(z.string()), // Adjusted to match the array format in frontmatter
        date: z.string(),
        audience: z.string().optional(),
    }),
});

export const collections = {
  posts: blogCollection,
};