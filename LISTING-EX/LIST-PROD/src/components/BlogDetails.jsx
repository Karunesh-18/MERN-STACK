import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-2xl text-gray-600">Loading post details...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-2xl text-red-600">Post not found</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <button
                onClick={() => navigate('/blogs')}
                className="mb-6 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
                ← Back to Blogs
            </button>
            
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                <div className="mb-4">
                    <span className="inline-block bg-[#e53238] text-white text-sm px-4 py-2 rounded-full">
                        Post ID: {post.id}
                    </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
                    {post.title}
                </h1>
                
                <div className="border-t border-gray-300 pt-6 mt-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {post.body}
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                    <p className="text-sm text-gray-500">User ID: {post.userId}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
