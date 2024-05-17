interface PostProps {
    title: String,
    author: String,
    content: String,
    createdAt: Date
}

const Post: React.FC<PostProps> = ({ title, author, content, createdAt }) => {
    return (
        <article className="p-5 my-10 border-white border">
            <h1 className="text-4xl mb-2">{title}</h1>
            <h1 className="text-2xl">by {author}</h1>
            <h1 className="text-xl">posted on {createdAt.toString()}</h1>
            <br />
            <hr />
            <br />
            <p>{content}</p>
        </article>
    )
};

export default Post;