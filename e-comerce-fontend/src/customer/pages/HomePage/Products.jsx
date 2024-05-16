import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryApi from "../../../api/categoryApi";
import { Button, Card } from "react-bootstrap";
import { formatPrice } from "../../../utils";
import "./stylesProducts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IMGBANNERS, BLOGCONTENTS } from "../../../constants";
import Item from "../ProductList/components/Item"

function Products(props) {
  const navigate = useNavigate();

  const [cate1, setCate1] = useState([]);
  const [cate2, setCate2] = useState([]);
  const [cate3, setCate3] = useState([]);
  const [cate4, setCate4] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoryApi.getProuctsForHome();
        // Chuyển đổi đối tượng thành mảng
        const categoriesArray = Object.values(res);

        setCate1(categoriesArray[0]);
        setCate2(categoriesArray[1]);
        setCate3(categoriesArray[2]);
        setCate4(categoriesArray[3]);

        console.log(res);
      } catch (error) {
        console.log("Loi product list: ", error);
      }
    })();
  }, []);
  const handleClickCard = (productId) => {
    navigate(`products/${productId}`);
  };
  return (
    <>
      <div className="div__title">
        <h2 className="title-accessory">Phụ kiện Apple Watch</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate1.map((product) => (
              <Card
                key={product.id}
                style={{
                  width: "13.5rem",
                  height: "25.5rem",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <div className="card-image">
                  <Card.Link className="card-product">
                    <Card.Img variant="top" src={product.imageUrl} />
                  </Card.Link>
                </div>
                <Card.Body>
                  <Card.Text className="card-trademark">SHOPPHUKIEN</Card.Text>
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
            ))}
          </div>
          <Button variant="outline-dark" className="button__seeMore">
            Xem thêm sản phẩm <b className="bold-text">Apple Watch</b>
          </Button>
        </div>
      </div>
      <div className="div__title">
        <h2 className="title-accessory">Phụ kiện Apple Watch</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate2.map((product) => (
              <Card
                key={product.id}
                style={{
                  width: "13.5rem",
                  height: "25.5rem",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <div className="card-image">
                  <Card.Link className="card-product">
                    <Card.Img variant="top" src={product.imageUrl} />
                  </Card.Link>
                </div>
                <Card.Body>
                  <Card.Text className="card-trademark">SHOPPHUKIEN</Card.Text>
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
            ))}
          </div>
          <Button variant="outline-dark" className="button__seeMore">
            Xem thêm sản phẩm <b className="bold-text">Apple Watch</b>
          </Button>
        </div>
      </div>
      <div className="div__banners">
        <div className="banners">
          <img src={IMGBANNERS.imgID1} className="img-banners" alt="banners" />
        </div>
      </div>
      <div className="div__title">
        <h2 className="title-accessory">Phụ kiện Apple Watch</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate3.map((product) => (
              <Card
                key={product.id}
                style={{
                  width: "13.5rem",
                  height: "25.5rem",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <div className="card-image">
                  <Card.Link className="card-product">
                    <Card.Img variant="top" src={product.imageUrl} />
                  </Card.Link>
                </div>
                <Card.Body>
                  <Card.Text className="card-trademark">SHOPPHUKIEN</Card.Text>
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
            ))}
          </div>
          <Button variant="outline-dark" className="button__seeMore">
            Xem thêm sản phẩm <b className="bold-text">Apple Watch</b>
          </Button>
        </div>
      </div>
      <div className="div__banners">
        <div className="banners">
          <img src={IMGBANNERS.imgID1} className="img-banners" alt="banners" />
        </div>
      </div>
      <div className="div__title">
        <h2 className="title-accessory">Phụ kiện Apple Watch</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate4.map((product) => (
              <Item product={product}/>
              // <Card
              //   style={{
              //     width: "13.5rem",
              //     height: "25.5rem",
              //     marginBottom: "10px",
              //     cursor: "pointer",
              //   }}
              //   onClick={handleClickCard(product.id)}
              // >
              //   <div className="card-image">
              //     <Card.Link className="card-product">
              //       <Card.Img variant="top" src={product.imageUrl} />
              //     </Card.Link>
              //   </div>
              //   <Card.Body>
              //     <Card.Text className="card-trademark">SHOPPHUKIEN</Card.Text>
              //     <Card.Title>{product.productName}</Card.Title>
              //     <div className="card-price">
              //       <Card.Text className="card__text-price">
              //         {formatPrice(product.discountedPrice)}
              //       </Card.Text>
              //       <Card.Text className="card__text-cost">
              //         {formatPrice(product.price)}
              //       </Card.Text>
              //     </div>
              //   </Card.Body>
              // </Card>
            ))}
          </div>
          <Button variant="outline-dark" className="button__seeMore">
            Xem thêm sản phẩm <b className="bold-text">Apple Watch</b>
          </Button>
        </div>
      </div>
      <div className="blogs">
        <div className="div-title">
          <h4 className="blog-title">Có thể bạn muốn biết</h4>
        </div>
        <div className="div__list-blogs">
          <ul className="list-blogs">
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
          </ul>
          <div className="div__button">
            <Button variant="outline-dark" className="button-seeMore">
              Xem thêm <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
