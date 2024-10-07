"use client"

import React, { useState } from 'react';
import clsx from 'clsx';
import {
    baseInputClasses,
    primaryInputClasses,
    secondaryInputClasses,
    disabledInputClasses,
    defaultInputClasses
} from './style';
import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'primary' | 'secondary' | 'default';
    disabled?: boolean;
    loading?: boolean;
    placeholder?: string;
    leftIcon?: IconType;
    rightIcon?: IconType;
    label?: string;
    className?: string; // Torna a prop opcional
    type?: string; // Permite especificar o tipo de input, como "password"
};

const InputDefault: React.FC<InputProps> = ({
    variant = 'primary',
    disabled = false,
    loading = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className,
    placeholder,
    label,
    type = 'text', // Define o tipo padrão como "text"
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    // Alterna a visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Define o tipo de input com base na visibilidade da senha
    const inputType = type === 'password' && !showPassword ? 'password' : 'text';

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
        <div>
            {label && <label className="text-xs tracking-widest text-primarxy text-gray-400">{label}</label>}
            <div className={inputClasses}>
                <div className='flex items-center'>
                    {LeftIcon && <LeftIcon className="mr-2 my-auto" />}
                    <input
                        type={inputType}
                        className='outline-none bg-transparent py-1 px-2 border-none w-full'
                        placeholder={placeholder}
                        disabled={disabled || loading}
                        {...rest}
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="ml-2"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    )}
                    {RightIcon && <RightIcon className="ml-2" />}
                </div>
            </div>
        </div>
    );
};

export default InputDefault;
