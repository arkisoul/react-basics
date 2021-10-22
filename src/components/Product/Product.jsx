import './Product.css'

export const Product = (props) => {
    const { product } = props 
    return (
        <div className="product">
            <div className="product-head">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-body">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description.substring(0, 150)}...</p>
                <p><strong>{product.category}</strong></p>
                <h3 className="product-price">$ {product.price}</h3>
                <div className="product-foot">
                    <button className="btn btn-accent">Add to Favorite</button>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}