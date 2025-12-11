import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const BlogsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/blogs/${id}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-2xl text-gray-600">Loading posts...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posts.map(post => (
                    <div
                        key={post.id}
                        onClick={() => handleCardClick(post.id)}
                        className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform border border-gray-200"
                    >
                        <div className="mb-4">
                            <span className="inline-block bg-[#e53238] text-white text-xs px-3 py-1 rounded-full">
                                Post ID: {post.id}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                            {post.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-4">Click to read more →</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsList;
