import { routes } from '@/infra';
import { FaHome, FaCreditCard, FaThLarge, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  // Função para verificar se a rota está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-gray-100 shadow-lg">
      <ul className="flex justify-around py-2">
        {/* Início */}
        <li className="flex flex-col items-center">
          <Link to={routes.DASH_ROUTE}  className="flex flex-col items-center">
            <FaHome className={`text-2xl ${isActive(routes.DASH_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.DASH_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Início</span>
          </Link>
        </li>

        {/* Cartões */}
        <li className="flex flex-col items-center">
          <Link to={routes.CARDS_ROUTE} className="flex flex-col items-center">
            <FaCreditCard className={`text-2xl ${isActive(routes.CARDS_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.CARDS_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Cartões</span>
          </Link>
        </li>

        {/* Aplicações */}
        <li className="flex flex-col items-center">
          <Link to={routes.APPS_ROUTE} className="flex flex-col items-center">
            <FaThLarge className={`text-2xl ${isActive(routes.APPS_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.APPS_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Aplicações</span>
          </Link>
        </li>

        {/* Perfil */}
        <li className="flex flex-col items-center">
          <Link to={routes.PROFILE_ROUTE} className="flex flex-col items-center">
            <FaUser className={`text-2xl ${isActive(routes.PROFILE_ROUTE) ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive(routes.PROFILE_ROUTE) ? 'text-primary' : 'text-gray-700'}`}>Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
