import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';

import {sortByDate} from '../utils/index'

export default function Home({posts}) {
  // console.log("posts", posts)
  return (
    <div className="bg-blue-50" >
      <Head>
        <title>Dev Blog</title>
      </Head>

      <main className="max-w-3xl mx-auto px-3 ">
      <div className=" px-8 py-20 text-center">
          <Hero /> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">    
          {posts.map((post, index) => (
            // <h3> {post.frontmatter.title} </h3>
            <Post post={post} />
          ))}

      </div>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  // Get files from posts directory:
  const files = fs.readdirSync(path.join('posts'));
  // console.log(files)
  // Get slug and frontmatter from posts:
  const posts = files.map( filename => { 
    // Create slug:
    const slug = filename.replace('.md', '');
    // Get frontMatter:
    const markdown = fs.readFileSync(
      path.join('posts', filename), 'utf-8'
    );
    // console.log(markdown);
    const { data: frontmatter } = matter(markdown);
    return {
      slug,
      frontmatter
    }
  });
  // console.log(posts);
  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
