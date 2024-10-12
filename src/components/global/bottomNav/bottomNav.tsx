
"use client"
import { routes } from '@/infra';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineHome, AiOutlineCreditCard, AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai';

const BottomNav = () => {
  const location = useRouter();

  // Função para verificar se a rota está ativa
  const isActive = (path: string) => window.location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full shadow-lg bg-gray-100/70 backdrop-blur-md">
      <ul className="flex justify-around py-2">
        {/* Início */}
        <li className="flex flex-col items-center">
          <Link href={routes.DASH_ROUTE} className="flex flex-col items-center">
            <AiOutlineHome className={`text-2xl ${isActive(routes.DASH_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.DASH_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Início</span>
          </Link>
        </li>

        {/* Cartões */}
        <li className="flex flex-col items-center">
          <Link href={routes.CARDS_ROUTE} className="flex flex-col items-center">
            <AiOutlineCreditCard className={`text-2xl ${isActive(routes.CARDS_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.CARDS_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Cartões</span>
          </Link>
        </li>

        {/* Aplicações */}
        <li className="flex flex-col items-center">
          <Link href={routes.APPS_ROUTE} className="flex flex-col items-center">
            <AiOutlineAppstore className={`text-2xl ${isActive(routes.APPS_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.APPS_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Aplicações</span>
          </Link>
        </li>

        {/* Perfil */}
        <li className="flex flex-col items-center">
          <Link href={routes.PROFILE_ROUTE} className="flex flex-col items-center">
            <AiOutlineUser className={`text-2xl ${isActive(routes.PROFILE_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.PROFILE_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
