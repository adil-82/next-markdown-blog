import Link from 'next/link';

export default function Post({ post }) {
    return (
        <div className="p-4 rounded shadow-2xl bg-blue-50 mb-5">
            <img src={post.frontmatter.cover_image} alt="" 
                className="w-full rounded-lg"/>
            <div className="text-gray-500 text-xs mb-3 px-3 py-1"> 
                Posted on {post.frontmatter.date} </div>
            <h3 className="mb-3 font-bold"> 
                {post.frontmatter.title} </h3>
            <p className="my-4 leading-relaxed"> 
                {post.frontmatter.excerpt} </p>
            <Link href={`/blog/${post.slug}`}>
                <a className="inline-block bg-blue-500 text-white border-none rounded-md cursor-pointer text-xs py-2 px-4 hover:bg-blue-400 ">
                    Read More!</a>
            </Link>
        </div>
    )
}
