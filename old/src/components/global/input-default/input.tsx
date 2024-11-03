"use client";
import React, { useState } from 'react';
import clsx from 'clsx';
import {
    baseInputClasses,
    primaryInputClasses,
    secondaryInputClasses,
    disabledInputClasses,
    defaultInputClasses
} from './style';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importação direta dos ícones

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'primary' | 'secondary' | 'default';
    disabled?: boolean;
    loading?: boolean;
    placeholder?: string;
    leftIcon?: React.ReactNode; // Alterado para aceitar ReactNode (JSX)
    rightIcon?: React.ReactNode; // Alterado para aceitar ReactNode (JSX)
    label?: string;
    className?: string;
    type?: string;
};

const InputDefault: React.FC<InputProps> = ({
    variant = 'primary',
    disabled = false,
    loading = false,
    leftIcon, // Aceita JSX
    rightIcon, // Aceita JSX
    className,
    placeholder,
    label,
    type = 'text',
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
            [disabledInputClasses]: disabled,
        },
        className
    );

    return (
        <div>
            {label && <label className="-mb-4 text-xs tracking-widest text-gray-400">{label}</label>}
            <div className={inputClasses}>
                <div className="flex items-center">
                    {/* Renderiza o ícone à esquerda, se existir */}
                    {leftIcon && <span className="my-auto mr-2">{leftIcon}</span>}

                    <input
                        type={inputType}
                        className="w-full px-2 py-1 bg-transparent border-none outline-none"
                        placeholder={placeholder}
                        disabled={disabled || loading}
                        {...rest}
                    />

                    {/* Botão para alternar a visibilidade da senha */}
                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="ml-2"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    )}

                    {/* Renderiza o ícone à direita, se existir */}
                    {rightIcon && <span className="ml-2">{rightIcon}</span>}
                </div>
            </div>
        </div>
    );
};

export default InputDefault;
