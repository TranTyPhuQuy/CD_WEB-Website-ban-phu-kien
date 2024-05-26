import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi.js";
import { Button } from "react-bootstrap";
import "./Collection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IMGBANNERS, BLOGCONTENTS } from "../../../../constants/index.js";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

function Collection() {
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
              <ProductCard product={product} />
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
              <ProductCard product={product} />
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
              <ProductCard product={product} />
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
              <ProductCard product={product} />
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

export default Collection;