import { useState } from "react";

import { Question } from "../../types/listing";

import { ReactComponent as PlusIcon } from "../../assets/icons/listing/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/listing/minus.svg";
export const FaqSection = () => {
  const [questionList, setQuestionList] = useState<Question[]>([
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
    const filteredFaq = questionList.map((question) => {
      if (question.id === id) {
        if (question.isShown) {
          return { ...question, isShown: false };
        } else {
          return { ...question, isShown: true };
        }
      }
      return question;
    });

    setQuestionList(filteredFaq);
  };

  return (
    <div className="">
      <div className="md: container mx-auto mt-24">
        <h1 className="text-2xl font-semibold text-primary-900 md:text-3xl">
          Frequently asked questions
        </h1>
        <h4 className="mt-2 text-base font-semibold text-secondaryText md:text-xl">
          Everything you need to know about us
        </h4>

        <div className="mt-16 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-8">
            {questionList.map((question) => (
              <div key={question.id} className="flex flex-col">
                <button
                  className="flex items-center gap-x-2"
                  onClick={() => showDescription(question.id)}
                >
                  {question.isShown ? <MinusIcon /> : <PlusIcon />}

                  <h2 className="text-left font-semibold text-primary-900 md:text-xl">
                    {question.question}
                  </h2>
                </button>
                {question.isShown && (
                  <p className="lg:1/2 mt-4 w-full pl-8 text-sm text-secondaryText md:w-4/5 md:pl-9 md:text-base">
                    {question.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
