import Image from "next/image";
import React from "react";

const campgrounds = () => {
  return (
    <div className="">
      {/* MAP */}
      <div className="flex h-[200px] w-full items-center justify-center bg-slate-500">
        MAP
      </div>

      {/* campsites container */}
      <div className="flex justify-center bg-stone-500">
        {/* campsite card */}
        <a
          href="#"
          className="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 md:max-w-xl md:flex-row"
        >
          {/* campsite image */}
          <div className="relative h-52 w-full">
            <Image
              className="rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              layout="fill"
              src="https://res.cloudinary.com/dv5vm4sqh/image/upload/v1643292631/CampFire/pjr1dtpekqb8kq3yxqhb.jpg"
              alt="campground image"
            />
          </div>

          {/* campsite text */}
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Cape Town Campsite
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              This campsite is breezy and ocean fresh. On the shores of the Cape
              sea.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default campgrounds;
