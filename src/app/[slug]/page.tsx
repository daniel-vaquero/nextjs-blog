import getPost from "@/services/getPost";
import MarkdownPreview from "@/components/markdownPreview";

const PostPage = (
        { params: { slug } }: { params: { slug: string } }
    ) => {
    const post = getPost(slug);

    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">{post.title}</h1>
            <span>{post.content}</span>
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.category}</span>
            <span>{post.description}</span>
            <MarkdownPreview source={post.content} />
        </div>
    );
};

export default PostPage;