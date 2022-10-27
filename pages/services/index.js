import Head from "next/head";
import InvestorSection from "../../components/generals/InvestorSection";

function Services() {
  return (
    <div>
      <Head>
        <title>Buildit Services</title>
        <meta name="description" content="Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/Switch.svg" />
      </Head>
      <div>
        <InvestorSection
          subTitle="Services"
          title="Owner and investor with a reputation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. "
        />
      </div>
    </div>
  );
}

export default Services;
