import * as React from 'react';
import { getBlogPostContent, getMultipleBlogPostsMetadata } from '@/utils/BlogPosts';
import { Container, Link } from '@mui/material';
import Markdown from 'markdown-to-jsx';

interface Props {
    params: any
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = getMultipleBlogPostsMetadata();
    return posts.map((post) => ({
        slug: post.slug
    })); 
}

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