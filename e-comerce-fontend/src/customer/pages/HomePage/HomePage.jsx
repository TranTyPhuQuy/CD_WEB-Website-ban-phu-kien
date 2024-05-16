import React from "react";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// CSS
import "./styles.css";
// Icon
import ChatIcon from "../../../utils/images/chats.svg";
// Page
import Carousel from "./CarouselHome";
import Accessory from "./Products";
import { Box, Container } from "@mui/material";

export default function HomePage() {
  
  return (
    <Box sx={{
      bgcolor: '#f4f4f4',
    }}>
      <Container>
        <div className="div__chat">
          <img src={ChatIcon} className="chat-icon" alt="chat" />
        </div>
        <div className="div__menu">
          <div className="menu-list-items">
            <ul className="list-items">
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Ốp lưng Iphone</a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Phụ kiện Apple Watch</a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">
                  Dán <span>cường lực</span>
                </a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Dán PPF</a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Phụ kiện Ipad</a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Phụ kiện AirPods</a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">
                  Cáp sạc <span>và pin sạc dự phòng</span>
                </a>
              </li>
              <li className="items">
                <a className="block-pages" href="/categories/Phụ kiện Apple Watch">Phụ kiện khác</a>
              </li>
              <li className="items">
                <a href="/blogs" className="block-pages">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contents">
          <div className="carouselMain">
            <div className="div-carousel">
              <Carousel />
              <div className="block__service">
                <h4 className="service-title">Ưu đãi của bạn</h4>
                <div className="block__service-list">
                  <ul className="service-list">
                    <li className="service">
                      <p className="service-text1">Miễn phí giao hàng</p>
                      <p className="service-text2">
                        Freeship cho đơn hàng thanh toán trước
                      </p>
                    </li>
                    <li className="service">
                      <p className="service-text1">Đổi trả/ Bảo hành</p>
                      <p className="service-text2">
                        Đổi trả 7 ngày, bảo hành đến 2 năm
                      </p>
                    </li>
                    <li className="service">
                      <p className="service-text1">Chấp nhận COD</p>
                      <p className="service-text2">
                        Kiểm tra hàng trước khi thanh toán
                      </p>
                    </li>
                    <li className="service">
                      <p className="service-text1">
                        Gửi feedback nhận quà ngay
                      </p>
                      <p className="service-text2">
                        Với mỗi feedback được gửi, quý khách nhận ngay voucher
                        giảm 5% cho đơn hàng tiếp theo
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accessoryMain">
            <Accessory />
          </div>
        </div>
      </Container>
    </Box>
  );
}
