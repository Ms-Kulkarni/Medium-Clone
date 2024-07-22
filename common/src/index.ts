import z from "zod";

export const signupinput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
});

export const signininput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number(),
});

export type SignupInput = z.infer<typeof signupinput>;
export type SigninInput = z.infer<typeof signininput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;