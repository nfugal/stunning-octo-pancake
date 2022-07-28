import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="NateFugal.tech" />
      <Page>
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
