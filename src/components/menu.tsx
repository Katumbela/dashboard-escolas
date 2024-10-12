"use client"
import React from "react";
import menu from "@/styles/menu.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Menu() {

  // const router = useRouter();
  
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { href: "/home", label: "Início", icon: <AiOutlineHome /> },
    { href: "/cards", label: "Cartões", icon: <AiOutlineCreditCard /> },
    { href: "/applications", label: "Aplicaçõesss", icon: <AiOutlineAppstore /> },
    { href: "/profile", label: "Perfil", icon: <AiOutlineUser /> },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentIndex = menuItems.findIndex(
      (item) => item.href === currentPath
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [window.location.pathname]);

  return (
    <div className={menu.menu_f}>
      {menuItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={menu.item}
          onClick={() => setActiveIndex(index)}
        >
          <div className={menu.in}>
            <div
              className={`${menu.inner} ${activeIndex === index ? menu.active : ""
                }`}
            >
              <div
                className={`${menu.icon} ${activeIndex === index ? menu.iconActive : ""
                  }`}
              >
                {React.cloneElement(item.icon, { style: { fontSize: "22px" } })}
              </div>
            </div>
            <div className={menu.txt}>
              <p>{item.label}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
