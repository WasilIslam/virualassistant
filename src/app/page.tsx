import Head from "next/head";
import { DevVaLandingPage } from "@/components/dev-va-landing-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevVA - Your Developer Virtual Assistant</title>
        <meta
          name="description"
          content="Maximize your productivity with DevVA, the perfect combination of a developer and virtual assistant. Technical expertise meets effective management in one solution."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="DevVA, Developer Virtual Assistant, Virtual Assistant, Productivity, Coding Assistance, Remote Developer, Automation, Technical Virtual Assistant"
        />
        <meta name="author" content="DevVA Inc." />
        <meta property="og:title" content="DevVA - Your Developer Virtual Assistant" />
        <meta
          property="og:description"
          content="Get the best of both worlds with DevVA: a virtual assistant who understands coding and management. Explore features, skills, and pricing today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virualassistant.com" />
        <meta property="og:image" content="https://virualassistant.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevVA - Your Developer Virtual Assistant" />
        <meta
          name="twitter:description"
          content="Combine coding expertise and management skills with DevVA. Find out more about our features and pricing."
        />
        <meta name="twitter:image" content="https://virualassistant.com/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DevVaLandingPage />
    </>
  );
}
