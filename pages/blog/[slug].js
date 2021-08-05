import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import marked from 'marked';

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    return (
        <div className="bg-blue-50 ">
            <Link href="/">
                <a className="inline-block bg-gray-300 text-gray-700 border-none rounded-md cursor-pointer text-xs m-4 py-2 px-4 hover:bg-gray-500 hover:text-white">Go Back</a>
            </Link>
            <div className="py-4 md:px-24 sm:px-4 px-2 md:mx-16 sm:mx-8 mx-4 rounded-xl shadow-2xl">
                <h1 className="my-3 text-3xl font-extrabold text-center">
                    {title}
                </h1>
                <div className="text-gray-500 font-extrabold text-center text-xs mb-3 px-3 py-1 rounded">Post on {date} </div>
                <img src={cover_image} alt="" 
                    className="w-full rounded-lg "/>
                <div className="prose md:m-7 my-7" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    // Get files from posts dir:
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    console.log(paths)
    return {
        // paths: [{params: {slug: 'my slug'}}]
        paths,
        fallback: false
    }
}
 
export async function getStaticProps({ params: { slug }}) {
    console.log(slug);
    const markdown = fs.readFileSync(
        path.join('posts', slug + '.md'), 'utf-8'
    )
    const {data: frontmatter, content} = matter(markdown);
    return {
        props: {
            slug,
            frontmatter,
            content
        },
    }
}