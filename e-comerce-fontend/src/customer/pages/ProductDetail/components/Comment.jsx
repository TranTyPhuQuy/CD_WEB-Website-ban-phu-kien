import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useMatch } from "react-router-dom";
import commentApi from "../../../../api/commentApi";
import { useSelector } from "react-redux";
import { userid } from "../../../../app/Selectors";
Coment.propTypes = {
  onSubmit: PropTypes.func,
};

const Comment = ({ comment }) => (
  <Paper elevation={1} style={{ padding: "16px", marginBottom: "8px" }}>
    <Typography variant="body1">
      <strong>{comment.author}</strong>
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {comment.date}
    </Typography>
    <Typography variant="body1" style={{ marginTop: "8px" }}>
      {comment.content}
    </Typography>
    <Button style={{ marginTop: "8px" }}>Trả lời</Button>
    {comment.replies && comment.replies.length > 0 && (
      <Box marginTop={2}>
        {comment.replies.map((reply, index) => (
          <Comment key={index} comment={reply} />
        ))}
      </Box>
    )}
  </Paper>
);

const commentsData = [
  {
    author: "tái dương",
    date: "8 ngày trước",
    content: "con này dùng main gì ạ",
    replies: [
      {
        author: "Phan Hoàng Lân (Quản trị viên)",
        date: "7 ngày trước",
        content:
          "Chào anh Dương, Dạ anh quan tâm sản phẩm cụ thể nào vậy ạ. Để được hỗ trợ chi tiết về sản phẩm, anh vui lòng liên hệ tổng đài miễn phí 18006601 hoặc để lại SĐT bên em liên hệ tư vấn nhanh nhất ạ. Thân mến!",
      },
    ],
  },
  {
    author: "Lương Tuấn Thành",
    date: "9/5/2024",
    content:
      "Poco m6 pro 8-256gb nằm ở loại 3 mua được 3 tháng mình muốn lên poco m6 pro 12-512gb thì phải bù bao nhiêu bạn?",
    replies: [],
  },
];
function Coment() {
  const match = useMatch("/products/:productId");
  const {
    params: { productId },
  } = match;

  const [question, setQuestion] = useState("");

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
    if (event.target.value) {
      setError(""); // Xóa thông báo lỗi nếu người dùng nhập gì đó
    }
  };
  const userId = useSelector(userid);
  const handleSubmitComment = async () => {
    console.log("coment");
    if (!question.trim()) {
      // Kiểm tra nếu question rỗng hoặc chỉ chứa khoảng trắng
      setError("Câu hỏi không được để trống");
      return;
    }
    if (userId == null) {
      // Kiểm tra nếu question rỗng hoặc chỉ chứa khoảng trắng
      setError("Yêu cầu đăng nhập");
      return;
    }
    const commentData = {
      content: question,
      productId: productId,
      parentCommentId: "",
      userId: userId,
    };
    try {
      const res = await commentApi.createComment(commentData);
      if (res.status === "success") {
        alert("Comment thanh cong: " + res.message);
      } else {
        alert("Comment thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng ký: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng ký");
    }
  };
  return (
    <Box padding="24px 0px">
      <Box>
        {commentsData.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <Box marginTop={2}>
          <TextField
            label="Viết câu hỏi của bạn"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={question}
            onChange={handleInputChange}
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "8px" }}
            onClick={handleSubmitComment}
          >
            Gửi câu hỏi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Coment;
