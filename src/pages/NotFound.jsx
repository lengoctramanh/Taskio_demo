import { Link } from "react-router";
import "../style/NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <span className="decor decor-1">?</span>
      <span className="decor decor-2">+</span>
      <span className="decor decor-3">#</span>
      <span className="decor decor-4">?</span>
      <span className="decor decor-5">+</span>
      <span className="decor decor-6">#</span>

      <div className="notfound-content">
        <h1>404</h1>

        <svg
          className="plug-illustration"
          viewBox="0 0 1000 430"
          role="img"
          aria-label="Hai đầu dây điện bị ngắt kết nối"
        >
          {/* Dây bên trái */}
          <path
            d="M0 260 C70 285 95 290 160 280"
            fill="none"
            stroke="#086bc4"
            strokeWidth="17"
          />

          {/* Đầu cắm bên trái */}
          <path
            d="M150 280 C210 280 215 170 285 170 L345 170 L345 350 L285 350 C215 350 210 280 150 280 Z"
            fill="#0ba9ed"
          />
          <ellipse cx="345" cy="260" rx="45" ry="90" fill="#0878d0" />
          <ellipse cx="365" cy="260" rx="39" ry="90" fill="#b5e4f6" />
          <rect x="358" y="215" width="125" height="25" rx="12" fill="#086bc4" />
          <rect x="358" y="280" width="125" height="25" rx="12" fill="#086bc4" />

          {/* Dây bên phải */}
          <path
            d="M845 280 C910 290 935 285 1000 260"
            fill="none"
            stroke="#086bc4"
            strokeWidth="17"
          />

          {/* Ổ cắm bên phải */}
          <path
            d="M850 280 C790 280 785 170 715 170 L650 170 L650 350 L715 350 C785 350 790 280 850 280 Z"
            fill="#0ba9ed"
          />
          <ellipse cx="650" cy="260" rx="45" ry="90" fill="#0878d0" />
          <ellipse cx="625" cy="260" rx="37" ry="90" fill="#08a6e8" />
          <ellipse cx="625" cy="225" rx="7" ry="16" fill="#086bc4" />
          <ellipse cx="625" cy="295" rx="7" ry="16" fill="#086bc4" />
        </svg>

        <p className="notfound-message">
          Rất tiếc, trang bạn tìm kiếm không tồn tại.
        </p>

        <Link to="/" className="notfound-button">
          ← Quay về trang chủ
        </Link>
      </div>
    </main>
  );
}