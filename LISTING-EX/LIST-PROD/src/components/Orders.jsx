const Orders = () => {
    const orders = [
        {
            id: 1,
            date: "2025-12-10",
            total: 24999,
            status: "Delivered",
            items: ["Product A", "Product B"]
        },
        {
            id: 2,
            date: "2025-12-08",
            total: 12499,
            status: "Shipped",
            items: ["Product C"]
        },
        {
            id: 3,
            date: "2025-12-05",
            total: 41999,
            status: "Processing",
            items: ["Product D", "Product E", "Product F"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Orders</h1>
            
            <div className="max-w-4xl mx-auto space-y-6">
                {orders.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <p className="text-xl text-gray-600">No orders yet</p>
                    </div>
                ) : (
                    orders.map(order => (
                        <div key={order.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800">Order #{order.id}</h2>
                                    <p className="text-gray-600 mt-1">Date: {order.date}</p>
                                </div>
                                <span className={`px-4 py-2 rounded-full text-white font-semibold ${
                                    order.status === 'Delivered' ? 'bg-green-500' :
                                    order.status === 'Shipped' ? 'bg-blue-500' :
                                    'bg-yellow-500'
                                }`}>
                                    {order.status}
                                </span>
                            </div>
                            
                            <div className="border-t border-gray-300 pt-4 mt-4">
                                <h3 className="font-semibold text-gray-700 mb-2">Items:</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {order.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">
                                <p className="text-xl font-bold text-gray-800">Total: ₹{order.total.toLocaleString('en-IN')}</p>
                                <button className="bg-[#0064d2] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;
