import { NavbarPrincipal } from "../components/navbar";
import { Hero } from "../components/hero";
import { Nosotros } from "../components/WhyUs";
import { Prices } from "../components/Pricing";

export function Landing() {
  return (
    <>
      <NavbarPrincipal />
      <Hero />
      <Nosotros />
      <Prices />
    </>
  );
}
