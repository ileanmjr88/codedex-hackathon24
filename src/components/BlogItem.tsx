import react from '@astrojs/react';

interface BlogItemProps {
    title: string;
    description: string;
    url: string;
}

const BlogItem = ({title, description, url}: BlogItemProps) => {
    return (
        <div className='flex flex-col p-4'>

        <div className='flex flex-col p-4'>
            <h2 className='text-lg'>{title}</h2>
            <p>{description}</p>
            <a className='font-' href={url}>Read more</a>
        </div>
        </div>
    );
}

export default BlogItem;