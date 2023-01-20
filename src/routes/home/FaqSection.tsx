import { useState } from "react";

import { Question } from "../../types/property";

import { ReactComponent as PlusIcon } from "../../assets/icons/listing/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/listing/minus.svg";
export const FaqSection = () => {
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
  const showDescription = (id: number) => {
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
      <div className="w-5/6 md:max-w-7xl mx-auto mt-24">
        <h1 className="font-semibold text-2xl md:text-3xl text-primary-900">
          Frequently asked questions
        </h1>
        <h4 className="text-secondaryText text-base md:text-xl font-semibold mt-2">
          Everything you need to know about us
        </h4>

        <div className="flex flex-col gap-y-10 pt-10">
          <div className="flex flex-col gap-y-8">
            {faq.map((el) => (
              <>
                <button
                  className="flex items-center gap-x-2 "
                  onClick={() => showDescription(el.id)}
                >
                  {el.isShown ? <MinusIcon /> : <PlusIcon />}

                  <h2 className="text-primary-900  font-semibold text-sm  md:text-xl " >
                    {el.question}
                  </h2>
                </button>
                {el.isShown && (
                  <p className=" md:w-1/2 md:pl-9 text-secondaryText text-xs">
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
