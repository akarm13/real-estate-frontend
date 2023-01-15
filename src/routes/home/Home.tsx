import { Content } from "../../components/Content";
import { Faq } from "../../components/Faq";
import { Feature } from "../../components/Feature";
import { Listing } from "../../components/Listing";


export const Home = () => {
  return (
    <div className="container py-7">
      <Content />

      <Feature />
      <Listing />
      <Faq />
    </div>
  );
};
