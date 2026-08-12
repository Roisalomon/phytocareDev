import React from "react";
import { contactMethods } from "../../../../data/contactData";

export const ContactInfo: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in-up py-16 px-[8%]">
            <div>
                <h2 className="text-3xl font-bold text-[#034949] mb-4 font-serif">
                    Parlons de votre santé
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Vous avez des questions sur nos produits naturels ou besoin d'un
                    conseil personnalisé ? Remplissez le formulaire et notre équipe
                    vous répondra directement sur WhatsApp.
                </p>
            </div>

            <div className="space-y-4">
                {contactMethods.map((method) => (
                    <a
                        key={method.label}
                        href={method.href}
                        className="flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 bg-green-100 text-[#034949] flex items-center justify-center rounded-full flex-shrink-0">
                            <i className={`fas ${method.icon}`} aria-hidden="true"></i>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase">{method.label}</p>
                            <p className="font-bold group-hover:text-[#034949] transition-colors">
                                {method.value}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div >
    );
};

export default ContactInfo;