import { Header } from "./components/Header";
import { MagneticButton } from "./components/MagneticButton/MagneticButton";
import { RealEstateSection } from "./components/RealEstateSection";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { MobMenu } from "./components/mobMenu/mobMenu";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <RealEstateSection />
      <WhatWeOffer />
    </div>
  );
}
