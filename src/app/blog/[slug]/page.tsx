import * as React from 'react';
import { getBlogPostContent, getMultipleBlogPostsMetadata } from '@/utils/BlogPosts';
import { Container, Link } from '@mui/material';
import Markdown from 'markdown-to-jsx';

export const getStaticPaths = (async () => {
    const posts = getMultipleBlogPostsMetadata();
    return {
        paths: posts.map((post) => ({ 
            params: { slug: post.slug }
        })),
        fallback: false
    }
});

type GenerateMetadataProps = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
    const post = getBlogPostContent(params?.slug);

    return {
        title: `${post.data.title} | Emil Mohammed`
    }
}

interface Props {
    params: any
}

export default function BlogPage(props: Props) {
    const slug = props.params.slug; 
    const post = getBlogPostContent(slug);

    return (
        <Container 
            component="main"
        >
            <Markdown
                options={{
                    overrides: {
                        a: Link
                    }
                }}
            >
                {post.content}
            </Markdown>
        </Container>
    );
}