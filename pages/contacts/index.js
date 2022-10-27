import Head from "next/head";
import HomeContactSection from "../../components/sections/homeSections/HomeContactSection";

function About() {
  return (
    <div>
      <Head>
        <title>Buildit Contact us</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
      <div>
        <HomeContactSection />
      </div>
    </div>
  );
}

export default About;
