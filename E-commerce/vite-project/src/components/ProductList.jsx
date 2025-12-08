import ProductCard from "./ProductCard"

const ProductList = () => {

    const products = [
        {id: 1, name: "Rog Strix", price: '2,50,000', image: "/Rog.mp4", isVideo: true},
        {id: 2, name: "Legion 9i", price: '3,50,000', image: "/Legion.mp4", isVideo: true},
        {id: 3, name: "Predator Helios", price: '1,50,000', image: "/Predator.mp4", isVideo: true},
        {id: 4, name: "MacBook Air", price: '1,15,000', image: "/MacBook.mp4", isVideo: true}
    ]
    return (
        <div className="mx-auto bg-yellow-200 p-5 flex justify-center flex-wrap">
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    id={product.id}     
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    isVideo={product.isVideo}
                />
            ))}
        </div>
    )
}

export default ProductList;         