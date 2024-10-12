"use client"
import React from "react";
import clsx from "clsx";
import {
  baseButtonClasses,
  primaryButtonClasses,
  secondaryButtonClasses,
  disabledButtonClasses,
  outlinedButtonClasses,
  transparentButtonClasses,
  blackButtonClasses,
  outlinedBlackButtonClasses,
  whiteButtonClasses,
} from "./style";
import { FaSpinner } from "react-icons/fa";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "white" | "secondary" | "outlined" | "transparent" | "black" | "outlined-black";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  children: React.ReactNode;
  className?: string;
  link?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className,
  link,
  onClick,
  ...rest
}) => {
  const buttonClasses = clsx(
    baseButtonClasses,
    {
      [primaryButtonClasses]: variant === "primary" && !disabled,
      [whiteButtonClasses]: variant === "white" && !disabled,
      [secondaryButtonClasses]: variant === "secondary" && !disabled,
      [outlinedButtonClasses]: variant === "outlined" && !disabled,
      [outlinedBlackButtonClasses]: variant === "outlined-black" && !disabled,
      [blackButtonClasses]: variant === "black" && !disabled,
      [transparentButtonClasses]: variant === "transparent" && !disabled,
      [disabledButtonClasses]: disabled,
    },
    className
  );

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (link) {
      router.push(link);
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <FaSpinner className="mr-2 animate-spin" />}
      {LeftIcon && <LeftIcon className="my-auto" />}
      {children}
      {RightIcon && <RightIcon className="my-auto" />}
    </button>
  );
};

export default Button;
