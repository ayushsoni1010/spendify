// Basic Imports
import { NextPage } from "next";

// Components Imports
import Header from "@/website/Header";
import Hero from "@/website/Hero";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo />

      <main>
        <Header />
        <Hero {...props} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        description: "Support us by becoming a stargazer! 🚀",
        stargazerTitle: "Repository Star",
        stargazerLink:
          "https://img.shields.io/github/stars/ayushsoni1010/spendify.svg?style=social&label=Star",
        href: "https://github.com/ayushsoni1010/spendify",
      },
      heroSection: {
        heading: "Get your spending money under control and manage",
        description:
          "Spendify is the most intuitive, affordable, and smart way to automate your freelancer business and focus on what really matters.",
        buttonText: "Get started",
      },
    },
  };
}

export default Home;
