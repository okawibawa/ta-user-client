import React from 'react';
import Head from 'next/head';

const HeadSeo = () => {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Sanatras</title>
      <meta name="title" content="Sanatras — Wikipedia Upacara Yadnya" />
      <meta
        name="description"
        content="Sanatras merupakan sebuah situs yang menyediakan informasi mengenai Upacara Yadnya di Bali beserta properti-properti yang digunakan."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sanatras.vercel.app" />
      <meta property="og:title" content="Sanatras — Wikipedia Upacara Yadnya" />
      <meta
        property="og:description"
        content="Sanatras merupakan sebuah situs yang menyediakan informasi mengenai Upacara Yadnya di Bali beserta properti-properti yang digunakan."
      />
      <meta property="og:image" content="https://i.ibb.co/R2T37Zy/hero.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sanatras.vercel.app" />
      <meta property="twitter:title" content="Sanatras — Wikipedia Upacara Yadnya" />
      <meta
        property="twitter:description"
        content="Sanatras merupakan sebuah situs yang menyediakan informasi mengenai Upacara Yadnya di Bali beserta properti-properti yang digunakan."
      />
      <meta property="twitter:image" content="https://i.ibb.co/R2T37Zy/hero.png"></meta>
    </Head>
  );
};

export default HeadSeo;
