import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>InstaDLD</title>
      <meta
        name="description"
        content="Your Instagram Post downloader. Free, no ads, no trackers. Support multipost download"
      />
      <meta
        name="keywords"
        content="InstaDLD, instagram, download, post, media, picture, free, instagram downloader free, online, instagram download, instagram download free online, instagram picture download, instagram video download, instagram multipost, instagram multipost download"
      />
      <meta name="author" content="sozonome" />

      <meta property="og:url" content="https://instadld.sznm.dev" />
      <meta property="og:site_name" content="InstaDLD" />
      {/* <meta property="og:image" content=""/> */}

      <link rel="icon" href="/instadld.svg" />
    </Head>
  );
};

export default Meta;
