import Head from "next/head";
import AboutHeroSection from "../../components/sections/aboutSections/AboutHeroSection";
import AboutStatisticsSection from "../../components/sections/aboutSections/AboutStatisticsSection";
import AboutTeamSection from "../../components/sections/aboutSections/AboutTeamSection";

function About() {
  return (
    <div>
      <Head>
        <title>Buildit About</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
      <div>
        <AboutHeroSection />
        <AboutStatisticsSection />
        <AboutTeamSection />
      </div>
    </div>
  );
}

export default About;
