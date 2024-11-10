import React, { useEffect } from "react";
export default function Github() {
  return (
    <div className=" flex flex-col gap-10 w-[90%] mx-auto" id="github">
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>

      <div className=" rounded-xl p-5 bg-[#1c1c1c] bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 flex justify-center  ">
        <img
          src="https://ghchart.rshah.org/FC2B58/sislam824"
          alt="sislam824"
          className="w-full text-red-500"
        />
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-3">
        <div className=" rounded-xl p-5 flex justify-center items-center  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 w-full ">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=sislam824&amp;theme=shadow-brown&amp;card_width=420&amp;card_height=100&amp;background=1c1c1c&amp;stroke=f3a296&amp;ring=f0f0f0&amp;currStreakNum=73cae7&amp;sideLabels=f0f0f0&amp;fire=EB4506&amp;sideNums=f0f0f0&amp;border=1c1c1c"
            alt="GitHub Streak"
            className="h-[200px]"
          />
        </div>
        <div className=" rounded-xl p-5 flex justify-center items-center  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 w-full  ">
          <img
            src="https://github-readme-stats.vercel.app/api?username=sislam824&amp;bg_color=1c1c1c&amp;text_color=f0f0f0&amp;icon_color=73cae7&amp;title_color=73cae7&amp;card_width=300px&amp;show_icons=true&amp;hide_border=true&amp;count_private=true"
            id="github-stats-card"
            alt="github-stats-card"
            className="h-[200px]"
          />
        </div>
        <div className=" rounded-xl p-5 flex justify-center items-center  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 w-full  ">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sislam824&amp;theme=vue-dark&amp;bg_color=1c1c1c&amp;text_color=f0f0f0&amp;icon_color=73cae7&amp;card_width=300px&amp;title_color=73cae7&amp;show_icons=true&amp;hide_border=true&amp;layout=compact"
            id="github-top-langs"
            alt="github-top-langs"
            className="h-[200px] w-[95%]"
          />
        </div>
      </div>
    </div>
  );
}
