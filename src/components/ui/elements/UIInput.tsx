import React from "react";
import { UseFormRegister, FieldValues, FieldError, Path } from "react-hook-form";

interface UIInputProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    type: "text" | "email" | "date" | "tel" | "password"; // Ajout de "password"
    icon?: React.ReactNode;
    register: UseFormRegister<T>;
    error?: FieldError | undefined;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Ajout pour gérer onChange
}

const UIInput = <T extends FieldValues>({
    name,
    label,
    type,
    icon,
    register,
    error,
    disabled,
    required,
    onChange,
}: UIInputProps<T>) => {
    return (
        <div>
            <label className="block text-xs font-medium text-dark dark:text-white mb-1">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative flex items-center">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark/70 dark:text-white/70 flex items-center justify-center w-4 h-4">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={`w-full ${icon ? "pl-10" : "pl-3"} pr-3 py-2 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white dark:bg-gray-800 text-dark dark:text-white ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${error ? "border-red-500" : ""}`}
                    {...register(name)}
                    onChange={onChange}
                    disabled={disabled}
                    aria-invalid={error ? "true" : "false"}
                />
            </div>
            {error?.message && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default UIInput;