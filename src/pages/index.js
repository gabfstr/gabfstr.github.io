import React from "react";
import {
  AboutSection,
  NewsSection,
  TeachingSection,
  HeroSection,
  Page,
  ResearchSection,
  Seo,
} from "../../plugins/gatsby-theme-portfolio-minimal/gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gabriel Fiastre" />
      <Page>
        <HeroSection sectionId="hero" />
        <div style={{ marginTop: '-100px' }}></div>
        <AboutSection sectionId="aboutme" heading="About me" />
        <NewsSection sectionId="news" heading="News" />
        <ResearchSection sectionId="research" heading="Research" />
        <TeachingSection sectionId="teaching" heading="Teaching" />
      </Page>
    </>
  );
}
