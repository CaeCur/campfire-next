import type { NextPage } from "next";
import Head from "next/head";

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
        className="flex h-screen w-full bg-cover bg-center bg-no-repeat text-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv5vm4sqh/image/upload/v1640878650/CampFire/campfire-cover_efr5mj.jpg')",
        }}
      >
        <div className="max-w-60 align-center flex h-full w-full flex-col justify-center p-3">
          <main className="px-3">
            <h1 className="mb-3 text-5xl">Campfire</h1>
            <p className="text-l">
              Welcome to CampFire!
              <br />
              Find your dream getaway today.
              <br />
              Explore the nature of Earth and collaborate with others to find
              unique spots.
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
