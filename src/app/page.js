"use client"
import { useEffect } from "react";
import Steps from "../../components/Steps";
import CTA from "../../components/CTA";
import HeroSection from "../../components/Hero";
import ContentSection from "../../components/ContentSection";
import WhatHappens from "../../components/WhatHappen";
import Problem from "../../components/Problem";
import Help from "../../components/Help";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    const utm_campaign = params.get("utm_campaign");
    const utm_term = params.get("utm_term");

    if (utm_source) sessionStorage.setItem("utm_source", utm_source);
    if (utm_medium) sessionStorage.setItem("utm_medium", utm_medium);
    if (utm_campaign) sessionStorage.setItem("utm_campaign", utm_campaign);
    if (utm_term) sessionStorage.setItem("utm_term", utm_term);
  }, []);

  return (
    <>
      <HeroSection />
      <Problem />
      <ContentSection />
      <Steps />
      <WhatHappens />
      <Help />
      <CTA />
    </>
  );
}
