import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface InstitutionCardProps {
  title: string;
  description: string;
  available: string;
  backgroundImage: string;
  checked: boolean;
  onClick: () => void;
}

export const InstitutionCard: React.FC<InstitutionCardProps> = ({
  title,
  available,
  backgroundImage,
  checked,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: `linear-gradient(90deg, #0000008F, #0000008F), url('${backgroundImage}') center center`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative font-regular h-[13rem] w-[10rem] rounded-xl active"
    >
      <div className="flex justify-between p-4">
        <span>Angola</span>
        <div
          className={`${checked ? 'bg-blue-600 border-white' : 'bg-white border-blue-700'
            } border-2 h-[2em] grid items-center place-content-center w-[2em] rounded-full`}
        >
          {checked && <FaCheck className="text-xl font-bold" />}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-3 text-end">
        <h2 className="mb-1 text-sm">{title}</h2>
        <span className="w-full px-3 py-1 text-[10px] font-bold text-black rounded-full bg-secondary">
          {available} Disponíveis
        </span>
      </div>
    </div>
  );
};
