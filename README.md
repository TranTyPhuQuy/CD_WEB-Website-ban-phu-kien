
# shopphukien - Dự án E-commerce Full Stack

shopphukien là một dự án E-commerce full stack được xây dựng bằng **Spring Boot**, **MySQL**, và **React.js**. Dự án này xử lý các hoạt động khác nhau phía máy chủ, chẳng hạn như quản lý giỏ hàng và các chức năng khác. Để đảm bảo an toàn, nó sử dụng xác thực và ủy quyền JWT bằng **Spring Security**.

## Các công nghệ sử dụng

- **Backend Framework**: Spring Boot
- **Frontend Framework**: React.js
- **Cơ sở dữ liệu**: MySQL

## Yêu cầu tiên quyết

Để chạy dự án này trên máy tính của bạn, bạn cần cài đặt các phần mềm sau:

1. **JDK 17**
2. **Node.js**
3. **MySQL Server**
4. **Git**

## Bắt đầu

1. **Clone kho lưu trữ**:
   ```
   git clone https://github.com/TranTyPhuQuy/CD_WEB-Website-ban-phu-kien.git
   cd CD_WEB-Website-ban-phu-kien
   ```

2. **Cài đặt cơ sở dữ liệu**:
   - Tạo một cơ sở dữ liệu MySQL và cấu hình chi tiết kết nối trong tệp `backend/src/main/resources/application.properties`.

3. **Cài đặt phía máy chủ (Backend)**:
   - Di chuyển vào thư mục `springboot`:
     ```
     cd springboot
     ```
   - Xây dựng và chạy ứng dụng Spring Boot:
     ```
     ./mvnw spring-boot:run
     ```
   - Máy chủ backend sẽ chạy tại [http://localhost:8080](http://localhost:8080).

4. **Cài đặt phía giao diện (Frontend)**:
   - Di chuyển vào thư mục `reactjs`:
     ```
     cd reactjs
     ```
   - Cài đặt các phụ thuộc:
     ```
     npm install
     ```
   - Khởi chạy máy chủ phát triển React:
     ```
     npm start
     ```
   - Máy chủ frontend sẽ chạy tại [http://localhost:3000](http://localhost:3000).

5. **Truy cập ứng dụng shopphukien**:
   - Mở trình duyệt web và truy cập [http://localhost:3000](http://localhost:3000).

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Nếu bạn muốn đóng góp cho Organica, hãy làm theo các bước sau:

1. **Fork kho lưu trữ**.
2. **Tạo một nhánh mới** cho tính năng/sửa lỗi của bạn.
3. **Thực hiện thay đổi** và **commit** chúng.
4. **Đẩy thay đổi** lên kho lưu trữ đã fork của bạn.
5. **Gửi yêu cầu kéo (pull request)** đến kho lưu trữ chính.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, hãy liên hệ với người duy trì dự án:

- ****: 

---

Hy vọng tệp README này sẽ giúp bạn bắt đầu với dự án E-commerce của mình! 🛒🌟
