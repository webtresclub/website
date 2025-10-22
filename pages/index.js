import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { History } from '../components/History';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { HallOfFameSection } from '../components/HallOfFameSection';
import { JoinCommunity } from '../components/JoinCommunity';
import { Resources } from '../components/Resources';
import { FooterNew } from '../components/FooterNew';

export default function Home() {
  return (
    <>
      <Head>
        <title>WebtrES - Comunidad Web3</title>
        <meta name="description" content="La comunidad más grande y diversa sobre Web3" />
        <link rel="icon" href="favicon.gif" type="image/gif" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <History />
        <HallOfFameSection />
        <JoinCommunity />
        <FeaturedProjects />
        <Resources />
        <FooterNew />
      </main>
    </>
  );
}
