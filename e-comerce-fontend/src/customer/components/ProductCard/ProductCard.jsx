import React from "react";
import PropTypes from "prop-types";
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils";
import { Card } from "react-bootstrap";

ProductCard.propTypes = {
  product: PropTypes.object,
};

function ProductCard({ product }) {
  const navigate = useNavigate();
  // const thumbnailUrl = product.imageUrl
  //   ? `${BASEURLHOST}${product.imageUrl}`
  //   : THUMBNAIL_PLACEHOLDER;
  const thumbnailUrl = product.imageUrl
    ? product.imageUrl
    : THUMBNAIL_PLACEHOLDER;

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      style={{
        width: "13.5rem",
        height: "25.5rem",
        marginBottom: "10px",
        cursor: "pointer",
      }}
      onClick={() => handleProductClick(product.id)}
    >
        <div className="card-image">
          <Card.Link className="card-product">
            <Card.Img variant="top" src={thumbnailUrl} />
          </Card.Link>
        </div>
        <Card.Body>
          <Card.Text className="card-trademark">{product.brand}</Card.Text>
          <Card.Title>{product.productName}</Card.Title>
          <div className="card-price">
            <Card.Text className="card__text-price">
              {formatPrice(product.discountedPrice)}
            </Card.Text>
            <Card.Text className="card__text-cost">
              {formatPrice(product.price)}
            </Card.Text>
          </div>
        </Card.Body>
    </Card>
  );
}

export default ProductCard;