
import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) => {
    const wordCount = content.split(" ").length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex items-center py-2">
                    <div className="flex justify-center flex-col">
                        <Avatar name={authorName} size="small" />
                    </div>
                    <div className="font-light pl-2 text-sm">{authorName}</div>
                    <div className="pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-light text-slate-500 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-2xl font-bold leading-7 pb-1">{title}</div>
                <div className="text-base font-extralight">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-400 text-sm font-light pt-4">{`${readingTime} min read`}</div>
            </div>
        </Link>
    );
};

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-600"></div>;
}

export function Avatar({
    name,
    size = "small",
}: {
    name: string;
    size: "small" | "big";
}) {
    return (
        <div
            className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-8 h-8"
                } overflow-hidden bg-gray-600 rounded-full`}
        >
            <span
                className={`${size === "small" ? "text-xs" : "text-base"
                    } font-extralight text-gray-200`}
            >
                {name[0]}
            </span>
        </div>
    );
}
