import Page from "../layout/Page";
import ArrowRight from "../assets/images/arrow-right.svg?react";
import { Link } from "react-router-dom";

export default function Awards() {
  return (
    <Page>
      <div className="container mx-auto">
        <div className="flex gap-2 gap-y-0 justify-start w-full mt-20">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Type
            </option>
            <option>Season</option>
            <option>Month</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Season
            </option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-2">October 2023</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <li className="card w-96 bg-base-100 border-stone-300 border-[1px]">
              <div className="p-6">
                <h2 className="card-title font-extrabold">
                  Player of the Month
                </h2>
              </div>
              <div className="h-80 px-6 relative">
                <div className="flex flex-col mb-1">
                  <Link className="w-max" to="/club/123">
                    <img
                      className="w-12 h-12 my-6"
                      alt="logo"
                      src="https://resources.premierleague.com/premierleague/badges/50/t14@x2.png"
                    />
                  </Link>
                  <div className="flex flex-col mb-1">
                    <span className="font-light text-lg">Appearance:</span>
                    <b className="text-2xl">14</b>
                  </div>
                  <div className="flex flex-col mb-1">
                    <span className="font-light text-lg">Goals:</span>
                    <b className="text-2xl">38</b>
                  </div>
                  <div className="flex flex-col mb-1">
                    <span className="font-light text-lg">Win:</span>
                    <b className="text-2xl">38</b>
                  </div>
                </div>

                <img
                  src="https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png"
                  className="absolute right-0 bottom-0"
                />
              </div>

              <div className="card-body">
                <h1 className="text-2xl font-extrabold">
                  Mohamed Salah Hamed Mahrous Ghaly
                </h1>
                <p className="text-base-content text-opacity-70">Forward</p>
                <Link
                  to="/competitor/123"
                  className="link link-hover inline text-right"
                >
                  <p>
                    View Detail <ArrowRight className="w-5 h-5 inline" />
                  </p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}
