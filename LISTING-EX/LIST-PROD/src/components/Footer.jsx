const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            Your trusted e-commerce platform for quality products and great service.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/" className="hover:text-[#f5af02] transition-colors">Home</a></li>
                            <li><a href="/products" className="hover:text-[#f5af02] transition-colors">Products</a></li>
                            <li><a href="/blogs" className="hover:text-[#f5af02] transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-[#f5af02] transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Email: info@example.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: Mumbai, India</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
                    <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
