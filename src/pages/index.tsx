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
            Welcome to <span className="text-[hsl(280,100%,70%)]">Chinat</span>{" "}
            Website
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="skills"
            >
              <h3 className="text-2xl font-bold">Check out my skills →</h3>
              <div className="text-lg">
                Learn more about my skills and what I can do.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="projects"
            >
              <h3 className="text-2xl font-bold">Check out my projects →</h3>
              <div className="text-lg">
                Learn more about the projects that I have been involved in.
              </div>
            </Link>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://chinatyu.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F578362a3-36d7-4ac5-a797-abdd3860bf1f%2Fimages%2Fc138ec5e-7e32-4c84-b0e3-7034d696f3ca.png&w=640&q=80"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Contact me!</h1>
              <p className="py-6">
                Fell free to contact me. I would love to hear from you.
              </p>
              <Link href="mailto:chinatchinat123@gmail.com">
                <button className="btn-primary btn">Contact me</button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1ubcQVnB7IpLBjr2kd5tCw4papPyxkdTK/view?usp=sharing"
                target={"_blank"}
              >
                <button className="btn-secondary btn ml-5">
                  Check out my resume
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="footer flex justify-center bg-neutral bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-center text-neutral-content">
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
              <Link href={"https://twitter.com/chinat_yu"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
                </Link>
              </a>
              <a>
                <Link href={"https://www.youtube.com/channel/UCeYKG6UsqZSTX00D0ByzeJw"} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
