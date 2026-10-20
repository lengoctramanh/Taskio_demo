import { Link } from "react-router";
import "../style/Home.css";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Quản lý công việc cùng Taskio</h1>
        <p>
          Sắp xếp ý tưởng, theo dõi tiến độ và hoàn thành công việc
          trên một bảng trực quan.
        </p>
        <Link className="primary-button" to="/boards">
          Mở bảng công việc
        </Link>
      </section>
    </main>
  );
}