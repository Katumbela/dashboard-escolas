import { FC, ChangeEvent } from 'react';
import type { IconType } from 'react-icons';
import { baseInputClasses, defaultInputClasses, disabledInputClasses, primaryInputClasses, secondaryInputClasses } from './style';
import clsx from 'clsx';

interface Option {
  value: string;
  label: string;
}

interface SelectDefaultProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  variant?: 'primary' | 'secondary' | 'default';
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

const SelectDefault: FC<SelectDefaultProps> = ({
  className = '',
  variant,
  disabled = false,
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false
}) => {


  const inputClasses = clsx(
    baseInputClasses,
    {
      [primaryInputClasses]: variant === 'primary' && !disabled,
      [secondaryInputClasses]: variant === 'secondary' && !disabled,
      [defaultInputClasses]: variant === 'default' && !disabled,
      [disabledInputClasses]: disabled
    },
    className
  );

  return (
    <div className={`${inputClasses} flex items-center  `}>
      {LeftIcon && <LeftIcon className="my-auto mr-2" />}
      <select
        className={` outline-none bg-none w-full my-auto `}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled || loading}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {RightIcon && <RightIcon className="ml-2" />}
    </div>
  );
};

export default SelectDefault;
