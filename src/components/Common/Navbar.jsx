'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//= Static Data
import appData from "@/data/app.json";

const navItems = [
  { href: "#intro", label: "Profile" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#network", label: "References" },
  { href: "#contact", label: "Email", isCta: true },
];

const Navbar = ({ theme }) => {
  const navbar = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!navbar.current) return;

      if (window.scrollY > 300) {
        navbar.current.classList.add("nav-scroll");
      } else {
        navbar.current.classList.remove("nav-scroll");
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbar}
      className={`navbar ${theme === "light" ? "light" : ""}`}
      aria-label="Primary navigation"
    >
      <div className="container">
        <Link className="logo portfolio-logo" href="#intro" onClick={() => setIsOpen(false)}>
          <span className="portfolio-logo-mark" aria-hidden="true">
            {theme ? (
              theme === "light" ? (
              <Image src={appData.darkLogo} alt="" width={38} height={38} unoptimized />
            ) : (
                <Image src={appData.lightLogo} alt="" width={38} height={38} unoptimized />
            )
          ) : (
              <Image src={appData.lightLogo} alt="" width={38} height={38} unoptimized />
          )}
          </span>
          <span className="portfolio-logo-copy">
            <span>Anis Maïri</span>
            <small>Data & AI Engineer</small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-lines ${isOpen ? "is-open" : ""}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show-with-trans" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${item.isCta ? "nav-link-cta" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

 
