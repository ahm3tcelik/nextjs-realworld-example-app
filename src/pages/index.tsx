import Link from 'next/link';
import React from 'react';
import HeadTag from '../components/common/HeadTag';
import Meta from '../components/common/Meta';
import MainLayout from '../components/layouts/MainLayout';
import { IMeta, IMetaOpenGraph, IMetaPrimary, } from '../types';

const metaPrimary: IMetaPrimary = {
  title: "Home Page",
  keywords: "home, Home",
  author: "ahmet"
};

const metaOpenGraph: IMetaOpenGraph = {
  title: "Home",
  description: "açıklama güzel home index",
  type: "website"
}

const metaTags: IMeta = {
  metaPrimary: metaPrimary,
  metaOpenGraph: metaOpenGraph
}

const IndexPage = () => (
  <MainLayout>
    <HeadTag title="Index Page">
      <Meta {...metaTags} />
    </HeadTag>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </MainLayout>
)

export default IndexPage
