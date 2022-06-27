import Head from 'next/head';

function Blog({ post }) {
    return (
        <div>
            <div>{post.uuid}</div>
            <div>{post.title}</div>
            <div>{post.created}</div>
            <div>{post.updated}</div>
            <div>{post.short_description}</div>
            <div>{post.content}</div>
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