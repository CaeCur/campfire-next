import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const campgroundsData = trpc.campground.getAll.useQuery();

  // const campgrounds = campgroundsData.data;
  // // console.log(campgrounds?.map((campground) => campground.title));

  return (
    <>
      <Head>
        <title>Campfire - Next</title>
      </Head>

      <Navbar />
    </>
  );
};

export default Home;
