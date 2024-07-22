
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const wordCount = blog.content.split(" ").length;
    const readingTime = Math.ceil(wordCount / 200);
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 w-full max-w-screen-xl pt-6 md:pt-12">
                    <div className="md:col-span-8">
                        <div className="text-3xl md:text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-4">
                            Posted on 2nd December 2023
                        </div>
                        <div className="text-slate-500">{`${readingTime} min read`}</div>
                        <div className="md:col-span-4 mt-4 md:mt-0 md:hidden">
                            <div className="text-slate-500 text-lg hidden md:block">
                                Author
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 flex flex-col justify-center">
                                    <Avatar name={blog.author.name || "Anonymous"} size="big" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className=" text-slate-500">
                                        Lorem ipsum dolor sit amet. Eum excepturi autem eos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10">{blog.content}</div>
                    </div>
                    <div className="md:col-span-4 mt-8 md:mt-0 hidden md:block">
                        <div className="text-slate-500 text-lg hidden md:block">Author</div>
                        <div className="flex pt-4">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "Anonymous"} size="big" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className=" text-slate-500">
                                    A random catch phrase about the author for the ab kilites
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
