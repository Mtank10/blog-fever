import PostCard from '@/components/postcard/postCard'
import React from 'react'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data';
 const getData = async ()=>{
  const res = await fetch(`${process.env.NEXT_URL}api/blog`);
  if(!res.ok){
    throw new Error("something went wrong");
  }
  return res.json();
 }

export default async function BlogPage(){
  // const posts =  await getPosts();
  const posts = await getData()
  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
         <PostCard post={post} />
      </div>
       ))}
    </div>
  )
}
