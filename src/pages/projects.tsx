import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chinat Website</title>
        <meta name="description" content="Chinat Website tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Check out{" "}
            <Link href={"/"}>
              <span className="text-[hsl(280,100%,70%)]">Chinat</span>
            </Link>{" "}
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://chinatyu.super.site/content-essays/seego"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Check out SEEGO Project →</h3>
              <div className="text-lg">
                Take a look at SEEGO where I have given cardboard a second life.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://chinatyu.super.site/content-essays/analog2beat"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">
                Check Analog to Beat Project →
              </h3>
              <div className="text-lg">
                Check out this cool project that I have done.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://chinatyu.super.site/the-socratic-pairwise-learning-method-beta"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">
                Check out my Socratic study Project →
              </h3>
              <div className="text-lg">
                Take a look at my cool project on study methods.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
