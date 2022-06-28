import Head from 'next/head';
import styles from '../../styles/blog.module.css'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import React from 'react';

function Blog({ post }) {
    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.short_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.item + styles.item_main}>
                    <h1>{post.title}</h1>
                    <p className={styles.blogDate}>{new Date(post.created).toDateString()}</p>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
                <div className={styles.item + styles.item_aside}>
                    <h4 id="blogTagsHeader">Tags:</h4>
                    <p><b>Coming soon:</b> a tag system to search for related blog posts!</p>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ params }){
    const res = await fetch(`https://api.emilmoham.io/blog/${params.uuid}`);
    const post = await res.json();

    return { props: { post } }
}

export async function getStaticPaths() {
    const res = await fetch('https://api.emilmoham.io/blog/list');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { uuid: post.uuid }
    }));

    return { paths, fallback: false }
}
export default Blog;