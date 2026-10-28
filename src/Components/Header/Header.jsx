
import React, { useState } from "react";
import "./Header.css";
import Logoimg from "../../Assets/logo.webp";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const MenuItems = [
        { id: 1, MenuName: "Home", menuLink: "/" },
        { id: 2, MenuName: "About", menuLink: "/about" },
        { id: 3, MenuName: "Workprocess", menuLink: "/workprocess" },
        { id: 4, MenuName: "Testimonials", menuLink: "/testimonials" },
        { id: 5, MenuName: "Pricing Tables", menuLink: "/pricingtable" },
        { id: 6, MenuName: "Blog Entries", menuLink: "/blogentries" },
        { id: 7, MenuName: "Contact Us", menuLink: "/contactus" },
    ];

    return (
        <header>
            <div className="logo">
                <div className="logoimg">
                    <span>TechNova</span>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={Logoimg} alt="TechNova logo" />
                    </Link>
                </div>
            </div>

            <button
                type="button"
                className="icons"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <IoClose /> : <TbMenuDeep />}
            </button>

            <nav className={`Menus ${menuOpen ? "active" : ""}`}>
    <ul>
        {MenuItems.map((menu) => (
            <li key={menu.id}>
                <Link
                    to={menu.menuLink}
                    onClick={() => setMenuOpen(false)}
                >
                    {menu.MenuName}
                </Link>
            </li>
        ))}
    </ul>
</nav>
        </header>
    );
}