import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch} from 'react-redux'

import {removeProduct} from '../../store/actions/productActions'
import "./Product.css";

export const Product = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const removeAProduct = () => {
    dispatch(removeProduct(product.id))
  }
  return (
    <div className="product">
      <button className="btn-remove" onClick={removeAProduct}>
        <FontAwesomeIcon icon={faTrash} color="red" />
      </button>
      <div className="product-head">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-body">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">
          {product.description.substring(0, 150)}...
        </p>
        <p className="product-category">
          <em>Category</em> : <strong>{product.category}</strong>
        </p>
        <h3 className="product-price">$ {product.price}</h3>
        <div className="product-foot">
          <button className="btn btn-accent btn-block">
            Add <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="btn btn-primary btn-block">
            Add <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};
