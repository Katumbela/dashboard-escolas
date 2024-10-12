"use client"

import { useState } from 'react';
import { users } from "@/utils/image-exporter";
import { HiMenu } from "react-icons/hi";
import { FaUniversity, FaDollarSign, FaCog, FaSignOutAlt, FaClipboardList, FaCreditCard, FaGraduationCap, FaChalkboardTeacher, FaQuestionCircle, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MenuItem } from './menu-item-navbar';
import { FaArrowLeft } from 'react-icons/fa6';
import { routes } from '@/infra';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export interface INavBar {
  showBackButton?: boolean
  title?: string
}

export function NavBar({ showBackButton = false, title = 'Mary Jane' }: INavBar) {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useRouter();

  const handleBack = () => {
    navigate.back();
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="relative py-5">
      <div className="flex justify-between px-3 ">
        {/* Imagem do Usuário */}
        <div className="my-auto">
          {
            showBackButton ?
              <FaArrowLeft className='text-2xl text-primary' onClick={handleBack} />
              :
              <Image
                src={users.ft_estudante}
                className="w-[3.5em] h-[3.5em] rounded-full border-2 border-primary/20"
                alt="student picture"
              />
          }
        </div>

        {/* Saudação do Usuário */}
        <div className="my-auto">
          <h2 className="font-bold">Olá, {title}</h2>
        </div>

        {/* Botão de Menu */}
        <div className="my-auto">
          <div
            className="bg-slate-100 grid items-center place-content-center rounded-full w-[3em] h-[3em] hover:bg-slate-200 transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            <HiMenu className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Menu Lateral */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 z-50 w-2/3 h-full bg-white shadow-lg md:w-1/4"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Menu</h3>
            <button
              className="text-xl font-semibold text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >

              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Lista de Itens de Menu */}
          <ul className="space-y-4">
            <MenuItem icon={FaUniversity} label="Consultas" />
            <MenuItem icon={FaDollarSign} label="Transferências" />
            <MenuItem icon={FaCreditCard} label="Mensalidades" />
            <MenuItem icon={FaClipboardList} label="Pagamentos" link={routes.PAYMENTS_ROUTE} />
            <MenuItem icon={FaGraduationCap} label="Educacional" />
            <MenuItem icon={FaChalkboardTeacher} label="Serviços multischool" link={routes.SERVICES_ROUTE} />
            <MenuItem icon={FaCog} label="Definições" />
            <MenuItem icon={FaQuestionCircle} label="Ajuda" />
            <MenuItem click={handleLogout} icon={FaSignOutAlt} label="Terminar sessão" />
          </ul>
        </div>
      </motion.div>

      {/* Sobreposição quando o menu estiver aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
