import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./ProductTabs.css";
import Comment from './Comment'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  commentsData: PropTypes.array,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductTabs({commentsData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Mô tả" {...a11yProps(0)} />
          <Tab label="Đánh giá" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div
          id="cpsContent"
          className="cps-block-content"
          style={{ maxHeight: "100000px" }}
        >
          <div className="ksp-content p-2 mb-2">
            <h2 className="ksp-title has-text-centered">ĐẶC ĐIỂM NỔI BẬT</h2>
            <div>
              <ul>
                <li>
                  Pin dung lượng lớn lên đến 20.000 mAh hỗ trợ sạc nhiều lần cho
                  các thiết bị điện tử
                </li>
                <li>
                  Công nghệ độc quyền Power IQ và VoltageBoots giúp tối ưu công
                  suất sạc đến 2.4A
                </li>
                <li>
                  Sạc cùng lúc 2 thiết bị với công suất sạc tối đa 15W với trang
                  bị cổng đầu ra USB-A và Type-C
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 style={{ textAlign: "justify" }}>
              <strong>
                Pin sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286
                - Dung lượng pin cao, tối ưu cho nhiều thiết bị
              </strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Pin sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286
              giúp thiết bị của bạn sạc được nhiều hơn với dung lượng 20.000mAh.
              Hơn nữa, mẫu
              <a
                href="https://cellphones.com.vn/phu-kien/pin-du-phong/anker.html"
                title="Pin dự phòng Anker chính hãng"
                target="_blank"
              >
                <strong>pin dự phòng Anker</strong>
              </a>
              này sở hữu công nghệ PowerIQ và VoltageBoost sẽ mang tới khả năng
              sạc nhỏ giọt để tiêu thụ điện năng thấp hơn.
            </p>
            <h3 style={{ textAlign: "justify" }}>
              <strong>
                Dung lượng tới 20000mAh, sạc tốt hơn với công nghệ hiện đại
              </strong>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Pin sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286
              được trang bị mức dung lượng cực cao đạt 20000mAh. Đây là một con
              số ấn tượng để thiết bị có thể sạc đầy được nhiều lần trong ngày.
              Chẳng hạn như 5 lần sạc đầy cho Samsung Galaxy S10 hay hơn 2 lần
              cho iPad mini 5,...
            </p>
            <p style={{ textAlign: "justify" }}>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/phu-kien/pin-sac-du-phong/Anker/pin-sac-du-phong-anker-325-powercore-ii-1c1a-15w-20000mah-a1286-1.jpg"
                alt="Dung lượng sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286"
                loading="lazy"
              />
            </p>
            <p style={{ textAlign: "justify" }}>
              Bên cạnh đó, Anker còn tích hợp vào pin sạc 2 công nghệ độc quyền
              PowerIQ và VoltageBoost. Điều này đã giúp phụ kiện có được chế độ
              sạc nhỏ giọt và mang tới hiệu quả tiết kiệm điện năng tối ưu hơn.
            </p>
            <h3 style={{ textAlign: "justify" }}>
              <strong>Thiết kế nhỏ gọn, thông minh cùng đầu ra kép</strong>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Pin sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286
              được làm theo kiểu hình trụ dài bo tròn nhỏ gọn. Bên trên bề mặt
              còn tích hợp đèn báo nguồn LED và bao phủ bởi tông đen nhám giúp
              tăng khả năng chống trầy xước vượt trội.
            </p>
            <p style={{ textAlign: "justify" }}>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/phu-kien/pin-sac-du-phong/Anker/pin-sac-du-phong-anker-325-powercore-ii-1c1a-15w-20000mah-a1286-2.jpg"
                alt="Thiết kế sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286"
                loading="lazy"
              />
            </p>
            <p style={{ textAlign: "justify" }}>
              Tuy nhỏ gọn nhưng pin sạc vẫn trang bị hai cổng đầu ra USB-A. Đồng
              thời, phụ kiện còn có thể sạc lại đa năng với cả cổng đầu vào
              USB-C và Micro USB.
            </p>
            <h2 style={{ textAlign: "justify" }}>
              <strong>
                Mua ngay pin sạc dự phòng Anker 325 Powercore II 1C1A 15W
                20000mAh A1286 giá tốt với CellphoneS
              </strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Pin sạc dự phòng Anker 325 Powercore II 1C1A 15W 20000mAh A1286
              hiện đang có mức giá bán ra hấp dẫn tại CellphoneS. Do đó, khi đến
              đây mua hàng, bạn không chỉ rinh về pin sạc chính hãng mà còn sở
              hữu chế độ bảo hành, đổi trả linh hoạt đó nhé!
            </p>
          </div>
          <div
            className="cps-block-content_btn-showmore"
            style={{ display: "none" }}
          >
            <a className="btn-show-more button__content-show-more">
              Xem thêm  
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="10"
                  height="10"
                >
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Comment data={commentsData}/>
      </CustomTabPanel>
    </Box>
  );
}
