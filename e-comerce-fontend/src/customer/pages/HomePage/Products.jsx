import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./stylesProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import categoryApi from "../../../api/categoryApi";
import { formatPrice } from "../../../utils";
// import {
//   Box,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";

const productsData = [
  {
    id: 1,
    name: "Điện thoại 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/302654/xiaomi-redmi-a2-xanh-1.jpg",
    description: "Ốp Bearbrick magsafe cho iPhone",
    price: "7.000.000đ",
    cost: "8.000.000đ",
  },
  {
    id: 2,
    name: "Điện thoại 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/302654/xiaomi-redmi-a2-xanh-1.jpg",
    description: "Ốp Bearbrick magsafe cho iPhone",
    price: "7.000.000đ",
    cost: "8.000.000đ",
  },
  {
    id: 3,
    name: "Điện thoại 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/302654/xiaomi-redmi-a2-xanh-1.jpg",
    description: "Ốp Bearbrick magsafe cho iPhone",
    price: "7.000.000đ",
    cost: "8.000.000đ",
  },
  {
    id: 4,
    name: "Điện thoại 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/302654/xiaomi-redmi-a2-xanh-1.jpg",
    description: "Ốp Bearbrick magsafe cho iPhone",
    price: "7.000.000đ",
    cost: "8.000.000đ",
  },
  {
    id: 5,
    name: "Điện thoại 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/302654/xiaomi-redmi-a2-xanh-1.jpg",
    description: "Ốp Bearbrick magsafe cho iPhone",
    price: "7.000.000đ",
    cost: "8.000.000đ",
  },
];

const imgBanners = {
  imgID1:
    "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_2_image.jpg?v=366",
  imgID2:
    "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_4_image.jpg?v=366",
  imgID3:
    "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_6_image.jpg?v=366",
};

const blogContents = {
  id: 1,
  imgs: "https://file.hstatic.net/200000454999/article/snapedit_1706866990105_efc0d2d565d24f54b57cf1bf865f897f_small.png",
  description: "6 điểm mới sắp có trên iOS 17.4",
  date: "13/05/2024",
};
// const useStyles = makeStyles((theme) => ({
//   root: {},

//   cart: { flex: "1 1 0" },
// }));
export default function Products() {
  // const classes = useStyles();

  const maxCardsToShow = 5;
  const [data, setData] = useState([]);
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
              style={{ width: "13.5rem", height: "25.5rem", marginBottom: '10px', cursor:'pointer' }}
            >
              <div className="card-image">
                <Card.Link className="card-product">
                  <Card.Img variant="top" src={product.imageUrl} />
                </Card.Link>
              </div>
              <Card.Body>
                <Card.Text className="card-trademark">
                  SHOPPHUKIEN
                </Card.Text>
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
             style={{ width: "13.5rem", height: "25.5rem", marginBottom: '10px', cursor:'pointer' }}
           >
             <div className="card-image">
               <Card.Link className="card-product">
                 <Card.Img variant="top" src={product.imageUrl} />
               </Card.Link>
             </div>
             <Card.Body>
               <Card.Text className="card-trademark">
                 SHOPPHUKIEN
               </Card.Text>
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
          <img src={imgBanners.imgID1} className="img-banners" alt="banners" />
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
             style={{ width: "13.5rem", height: "25.5rem", marginBottom: '10px', cursor:'pointer' }}
           >
             <div className="card-image">
               <Card.Link className="card-product">
                 <Card.Img variant="top" src={product.imageUrl} />
               </Card.Link>
             </div>
             <Card.Body>
               <Card.Text className="card-trademark">
                 SHOPPHUKIEN
               </Card.Text>
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
          <img src={imgBanners.imgID1} className="img-banners" alt="banners" />
        </div>
      </div>
      <div className="div__title">
        <h2 className="title-accessory">Phụ kiện Apple Watch</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate4.map((product) => (
            <Card
            key={product.id}
            style={{ width: "13.5rem", height: "25.5rem", marginBottom: '10px', cursor:'pointer' }}
            onClick={handleClickCard}
          >
            <div className="card-image">
              <Card.Link className="card-product">
                <Card.Img variant="top" src={product.imageUrl} />
              </Card.Link>
            </div>
            <Card.Body>
              <Card.Text className="card-trademark">
                SHOPPHUKIEN
              </Card.Text>
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
      <div className="blogs">
        <div className="div-title">
          <h4 className="blog-title">Có thể bạn muốn biết</h4>
        </div>
        <div className="div__list-blogs">
          <ul className="list-blogs">
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={blogContents.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {blogContents.description}
                  </a>
                </h5>
                <p className="blog-date">{blogContents.date}</p>
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
