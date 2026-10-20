import { NavLink } from "react-router";
import { House, LayoutDashboard, Info, ArrowRight, Check } from "lucide-react";
import "../style/Navbar.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
         <span>Taskio<span className="brand-dot"></span></span>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end>
            <House size={19} />
            <span>Trang chủ</span>
          </NavLink>

          <NavLink to="/boards">
            <LayoutDashboard size={19} />
            <span>Bảng công việc</span>
          </NavLink>

          <NavLink to="/about-us">
            <Info size={19} />
            <span>Giới thiệu</span>
          </NavLink>
        </div>

        <NavLink to="/boards" className="navbar-button">
          Bắt đầu ngay <ArrowRight size={18} />
        </NavLink>
      </nav>
    </header>
  );
}