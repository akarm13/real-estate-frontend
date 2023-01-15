import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

import { Question } from "../types/property";

export const Faq = () => {
    const [faq, setFaq] = useState<Question[]>([
        {
            id: 1,
            question: "What types of properties do you list on your website?",
            description:
                "We list a wide variety of properties on our website, including houses, condos, apartments, commercial properties, vacation rentals, and land. Our extensive selection of listings allows buyers, sellers, and agents to find the perfect property for their needs.",
            isShown: false,
        },
        {
            id: 2,
            question: "How do I search for properties on your website?",
            description:
                "You can use our advanced search filters to search for properties by location, price, size, type, and other criteria. You can also use our map view to see listings in a specific area, or you can browse through our featured listings to see a selection of our most popular properties.",
            isShown: false,
        },
        {
            id: 3,
            question: "How do I contact an agent on your website?",
            description:
                "You can use our contact form from a property listing. You can also use our directory of agents to find an agent in your area and view their contact information.",
            isShown: false,
        },
        {
            id: 4,
            question: "How do I list my property on your website?",
            description:
                "If you are an agent or a property owner, you can list your property on our website by creating a listing and providing the necessary information and photos. You can also contact us to learn more about our listing process and to get assistance from one of our agents.",
            isShown: false,
        },
    ]);
    const showDesc = (id: number) => {
        const data = faq.map((obj) => {
            if (obj.id === id) {
                if (obj.isShown) {
                    return { ...obj, isShown: false };
                } else {
                    return { ...obj, isShown: true };
                }
            }
            return obj;
        });

        setFaq(data);
    };

    return (
        <div className="">
            <div className="max-w-7xl mx-auto pt-14">
                <h1 className="font-semibold text-2xl text-[#120F33]">
                    Frequently asked questions
                </h1>
                <h4 className="text-secondaryText text-sm">
                    Everything you need to know about us
                </h4>

                <div className="flex flex-col gap-y-10 pt-10">
                    <div className="flex flex-col gap-y-8">
                        {faq.map((el) => (
                            <>
                                <button
                                    className="flex items-center gap-x-4"
                                    onClick={() => showDesc(el.id)}
                                >
                                    {el.isShown ? (
                                        <svg width="24" height="4" viewBox="0 0 33 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1667 0.666809H1.83333C1.09695 0.666809 0.5 1.26376 0.5 2.00014C0.5 2.73652 1.09695 3.33348 1.83333 3.33348H31.1667C31.903 3.33348 32.5 2.73652 32.5 2.00014C32.5 1.26376 31.903 0.666809 31.1667 0.666809Z" fill="#5B4DFF" />
                                        </svg>

                                    ) : (
                                        <svg width="24" height="16" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1667 14.6668H17.8333V1.33346C17.8333 0.979833 17.6929 0.640695 17.4428 0.390646C17.1928 0.140598 16.8536 0.00012207 16.5 0.00012207V0.00012207C16.1464 0.00012207 15.8072 0.140598 15.5572 0.390646C15.3071 0.640695 15.1667 0.979833 15.1667 1.33346V14.6668H1.83333C1.47971 14.6668 1.14057 14.8073 0.890524 15.0573C0.640476 15.3074 0.5 15.6465 0.5 16.0001H0.5C0.5 16.3537 0.640476 16.6929 0.890524 16.9429C1.14057 17.193 1.47971 17.3335 1.83333 17.3335H15.1667V30.6668C15.1667 31.0204 15.3071 31.3596 15.5572 31.6096C15.8072 31.8596 16.1464 32.0001 16.5 32.0001C16.8536 32.0001 17.1928 31.8596 17.4428 31.6096C17.6929 31.3596 17.8333 31.0204 17.8333 30.6668V17.3335H31.1667C31.5203 17.3335 31.8594 17.193 32.1095 16.9429C32.3595 16.6929 32.5 16.3537 32.5 16.0001C32.5 15.6465 32.3595 15.3074 32.1095 15.0573C31.8594 14.8073 31.5203 14.6668 31.1667 14.6668Z" fill="#5B4DFF" />
                                        </svg>

                                    )}

                                    <h2 className="text-[#120F33] font-semibold text-base">
                                        {el.question}
                                    </h2>
                                </button>
                                {el.isShown && (
                                    <p className="w-1/2 pl-9 text-[#7F7D8C] text-sm">
                                        {el.description}
                                    </p>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
