"use client"
import { logos, users } from "@/utils/image-exporter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from 'react-icons/fa6';

export interface INavBar {
  showBackButton?: boolean
  showLogo?: boolean
  title?: string
  iconColor?: string
  className?: string
}

export function Header({ className, iconColor = "text-primary", showBackButton = false, title = '', showLogo = true }: INavBar) {


  const navigate = useRouter();

  const handleBack = () => {
    navigate.back();
  };



  return (
    <div className="relative py-5">
      <div className={`flex w-full justify-between px-3 ${className}`}>
        {/* Imagem do Usuário */}
        <div className="my-auto">
          {
            showBackButton ?
              <FaArrowLeft className={`text-2xl ${iconColor}`} onClick={handleBack} />
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
          <h2 className="font-bold">{title}</h2>
        </div>

        {/* Botão de Menu */}
        <div className="my-auto">
          {
            !showLogo ?
              <div></div>
              :
              <Image
                src={logos.logo}
                className="w-[3.5em] h-[3.5em]    "
                alt="student picture"
              />
          }
        </div>
      </div>

    </div>
  );
}
