import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupinput, signininput } from "@dhruvkumar1805/medium-common-module";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();

userRouter.post("/signup", async (c) => {
    const body = await c.req.json();
    const { success } = signupinput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs are invalid",
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                password: body.password,
            },
        });
        const jwt = await sign(
            {
                id: user.id,
            },
            c.env.JWT_SECRET
        );
        return c.text(jwt);
    } catch (error) {
        console.log(error);
        c.status(411);
        return c.text("Some error occured!");
    }
});

userRouter.post("/signin", async (c) => {
    const body = await c.req.json();
    const { success } = signininput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs are invalid",
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            },
        });

        if (!user) {
            c.status(403);
            return c.text("Invalid creds");
        }

        const jwt = await sign(
            {
                id: user.id,
            },
            c.env.JWT_SECRET
        );
        return c.text(jwt);
    } catch (error) {
        console.log(error);
        c.status(411);
        return c.text("Some error occured!");
    }
});