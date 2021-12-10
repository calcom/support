import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CommunityCTA from "../components/CommunityCTA";
import Footer from "../components/Footer";
import { useIntercom } from "react-use-intercom";
import { useEffect } from "react";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {
  const { boot, show } = useIntercom();

  useEffect(() => {
    boot();
  });
  
  return (
    <div className="bg-grid">
      <Head>
        <title>
          Cal.com Support Center | Get help with using the app, managing your
          account and billing
        </title>
        <meta
          name="description"
          content="The support portal for help with using the app, managing your account and billing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero intercomShow={show} />
        <CommunityCTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
