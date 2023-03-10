import Header from "../../Header";
import style from "./Contact.module.css";

function Contact() {
  return (
    <div className={style.container}>
      <Header>About me</Header>
      <div className={style.about}>
        <div>
          <h2>Bài tập lớn môn lập trình web</h2>
          <h2>Đề tài: Quản Lý Công Việc</h2>
          <h2>Mã sinh viên: A41151</h2>
          <h2>Họ và tên: Nguyễn Đức Khiêm</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
