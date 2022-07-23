import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="NateFugal.tech" />
      <Page useSplashScreenAnimation>
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" />
        <InterestsSection sectionId="interests" heading="Interests" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
