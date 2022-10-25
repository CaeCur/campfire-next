import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  // const campgroundsData = trpc.campground.getAll.useQuery();

  // const campgrounds = campgroundsData.data;
  // // console.log(campgrounds?.map((campground) => campground.title));

  return (
    <>
      <Head>
        <title>Campfire - Next</title>
      </Head>

      <div
        className="flex h-screen w-screen bg-cover bg-center bg-no-repeat text-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv5vm4sqh/image/upload/v1640878650/CampFire/campfire-cover_efr5mj.jpg')",
        }}
      >
        <div className="align-center flex h-full w-full flex-col justify-center p-3">
          <main className="mx-auto rounded-xl bg-gradient-to-b from-slate-900 p-2">
            <h1 className="mb-3 text-5xl">Campfire</h1>
            <p className="text-xl">
              Welcome to Campfire
              <br />
              Find your dream getaway today.
              <br />
              Explore the nature of Earth and collaborate with others to find
              unique spots.
            </p>
            <Link href="/campgrounds">
              <button
                type="button"
                className="text-m mt-3 mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Get Started!
              </button>
            </Link>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
