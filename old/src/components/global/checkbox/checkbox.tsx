import React from 'react';
import clsx from 'clsx';


type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'blue' | 'green' | 'red';
    labelClass?: string
};

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    className,
    size = 'small',
    color = 'blue',
    labelClass,
    ...rest
}) => {

    const sizeClasses: Record<'small' | 'medium' | 'large', string> = {
        small: 'w-4 h-4',
        medium: 'w-6 h-6',
        large: 'w-8 h-8',
    };


    const colorClasses: Record<'blue' | 'green' | 'red', string> = {
        blue: 'checked:bg-blue-600 checked:border-blue-600',
        green: 'checked:bg-green-600 checked:border-green-600',
        red: 'checked:bg-red-600 checked:border-red-600',
    };

    const checkboxClasses = clsx(
        'form-checkbox border-2 rounded-sm focus:outline-none transition-colors',
        sizeClasses[size as keyof typeof sizeClasses],
        colorClasses[color as keyof typeof colorClasses],
        className
    );


    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id='check-input'
                className={checkboxClasses}
                {...rest}
            />
            {label && <label htmlFor='check-input' className={`ml-2 my-auto text-gray-600 ${labelClass}`}>{label}</label>}
        </div>
    );
};

export default Checkbox;
