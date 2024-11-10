"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./sub-menu";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  LayoutDashboard,
  Users,
  Menu,
  BookText,
  Boxes,
  BadgePercent,
  Wallet,
  CreditCard,
  BarChart3,
} from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 912px)" });
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname, isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[48] max-h-screen bg-black/50 lg:hidden ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="text-gray fixed z-[49] h-screen w-[16rem] max-w-[16rem] overflow-hidden bg-white dark:bg-dark lg:relative"
      >
        <div className="mx-5 flex items-center gap-4 py-5 px-3 font-medium">
          <Image
            src="/logo.png"
            className="flex-shrink-0"
            alt="icon"
            width={100}
            height={45}
            style={{ width: "80%", height: "auto" }}
          />
        </div>

        <div className="flex h-full flex-col pb-32">
          <ul className="scrollbar-thin flex flex-1 flex-col gap-1 overflow-x-hidden whitespace-pre px-2.5 py-5 text-[0.9rem] font-medium md:h-[68%]">
            <li>
              <Link
                href="/dashboard"
                className={`${
                  pathname === "/dashboard" &&
                  "bg-zinc-200 text-primary dark:bg-zinc-800"
                } flex cursor-default items-center gap-5 rounded-md p-2.5 font-medium duration-300 md:cursor-pointer`}
              >
                <LayoutDashboard size={23} className="min-w-max" />
                Dashboard
              </Link>
            </li>
            <div className="flex flex-col">
              <li>
                <Link
                  href="/dashboard/orders"
                  className={`${
                    pathname === "/dashboard/orders" && "text-primary"
                  } flex cursor-default items-center justify-start rounded-md bg-transparent p-3 font-medium outline-none duration-300 md:cursor-pointer`}
                >
                  <CreditCard size={23} className="min-w-max" />
                  <p className="ml-5 flex-1 text-left capitalize">Pagamentos</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/revenue"
                  className={`${
                    pathname === "/dashboard/revenue" && "text-primary"
                  } flex cursor-default items-center justify-start rounded-md bg-transparent p-3 font-medium outline-none duration-300 md:cursor-pointer`}
                >
                  <Wallet size={23} className="min-w-max" />
                  <p className="ml-5 flex-1 text-left capitalize">Receita</p>
                </Link>
              </li>
              <SubMenu
                isOpen={open}
                data={{
                  name: "Cursos",
                  icon: BookText,
                  menus: [
                    { title: "Visão geral", url: "/products" },
                    // { title: "Gerir", url: "/products/categories" },
                  ],
                }}
              />
              <SubMenu
                isOpen={open}
                data={{
                  name: "Estudantes",
                  icon: Users,
                  menus: [
                    { title: "Visão geral", url: "/customers" },
                    { title: "Bolsas e estágios", url: "/customers/addresses" },
                  ],
                }}
              />
              <li>
                <Link
                  href="/dashboard/offers"
                  className={`${
                    pathname === "/dashboard/offers" && "text-primary"
                  } flex cursor-default items-center justify-start rounded-md bg-transparent p-3 font-medium outline-none duration-300 md:cursor-pointer`}
                >
                  <BadgePercent size={23} className="min-w-max" />
                  <p className="ml-5 flex-1 text-left capitalize">
                    Calendários
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/site-traffic"
                  className={`${
                    pathname === "/dashboard/site-traffic" &&
                    "bg-zinc-200 text-primary dark:bg-zinc-800"
                  } flex cursor-default items-center gap-5 rounded-md p-2.5 font-medium duration-300 md:cursor-pointer`}
                >
                  <BarChart3 size={23} className="min-w-max" />
                  Estatísticas 
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  rotate: 0,
                }
              : {
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className={`absolute bottom-3 ${
            open ? "right-2" : "right-5"
          } z-50 hidden h-fit w-fit cursor-pointer md:block`}
        >
          <ChevronLeft size={25} />
        </motion.div>
      </motion.div>
      <div
        className="absolute top-3 z-20 m-3 cursor-pointer md:top-5 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
