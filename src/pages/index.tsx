import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const campgroundsData = trpc.campground.getAll.useQuery();

  const campgrounds = campgroundsData.data;
  // console.log(campgrounds?.map((campground) => campground.title));

  return (
    <div>
      <h1>Home</h1>
      {campgrounds?.map((campground) => (
        <p key={campground.id}>{campground.title}</p>
      ))}
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const campgrounds = await prisma.campground.findMany();
//   return {
//     props: { campgrounds }, // will be passed to the page component as props
//   };
// }
