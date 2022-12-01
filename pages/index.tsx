import type { NextPage } from "next";

import SecRegional from "../components/SecRegional";
import SecPartners from "../components/SecPartners";
import NavbarFooterHomeLayout from "../layout/NavbarFooterHomeLayout";
import SecBanner from "../components/SecBanner";
import SecAboutUs from "../components/SecAboutUs";
import SecEvent from "../components/SecEvent";


const Home: NextPage = () => {
  return (
    <>
    <NavbarFooterHomeLayout>
      <SecBanner/>
      <SecAboutUs />
      <SecRegional />
      <SecEvent />
      <SecPartners />
    </NavbarFooterHomeLayout>
    </>
  );
};

export default Home;