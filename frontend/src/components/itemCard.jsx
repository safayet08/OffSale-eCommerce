import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import { useContext } from "react";

const Item = (props) => {
    const { item } = props;
    const cart = useContext(CartContext);
    return (
        <div
            id={item.id}
            key={item.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
        >
            <div className="card text-center h-100" key={item.id}>
                <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {item.name.substring(0, 12)}...
                    </h5>
                    <p className="card-text">
                        {item.description.substring(0, 90)}
                        ...
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">$ {item.price}</li>
                </ul>
                <div className="card-body">
                    <Link
                        to={"/item/" + item._id}
                        className="btn btn-success m-1"
                    >
                        Buy Now
                    </Link>
                    <button
                        className="btn btn-warning m-1"
                        onClick={() => cart.addOneToCart(item._id)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
