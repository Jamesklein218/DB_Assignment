import Page from "../layout/Page";
import ArrowRight from "../assets/images/arrow-right.svg?react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Award } from "../types";
import { axios } from "../custom-axios";
import { API_URL } from "../config";

import player from "../assets/images/player.png";
import clublogo from "../assets/images/clublogo.png";

export default function Awards() {
  const [awards, setAwards] = useState<Award[] | null>(null);
  const [season, setSeason] = useState<number>(2019);
  const [month, setMonth] = useState<number | null>(null);
  const [type, setType] = useState<"season" | "month">("season");

  useEffect(() => {
    axios
      .get(
        `${API_URL}award?type=${type}&season=${season}${
          type === "month" ? `&month=${month}` : ""
        }`
      )
      .then((res) => {
        console.log(res.data);
        setAwards(res.data);
      });
  }, [season, month, type]);

  return (
    <Page>
      <div className="container mx-auto">
        <div className="flex gap-2 gap-y-0 justify-start w-full mt-20">
          <select
            defaultValue={type}
            onChange={(e) => setType(e.target.value as "season" | "month")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Select Type</option>
            <option value="season">Type: Season</option>
            <option value="month">Type: Month</option>
          </select>
          <select
            defaultValue={season?.toString()}
            onChange={(e) => setSeason(parseInt(e.target.value || "1"))}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Select Season</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>

          {type === "month" && (
            <select
              defaultValue={month?.toString()}
              onChange={(e) => setMonth(parseInt(e.target.value || "1"))}
              className="select select-bordered w-full max-w-xs"
            >
              <option value={undefined}>Select Month</option>
              <option value={1}>Jan</option>
              <option value={2}>Feb</option>
              <option value={3}>Mar</option>
              <option value={4}>Apr</option>
              <option value={5}>May</option>
              <option value={6}>Jun</option>
              <option value={7}>Jul</option>
              <option value={8}>Aug</option>
              <option value={9}>Sep</option>
              <option value={10}>Oct</option>
              <option value={11}>Nov</option>
              <option value={12}>Dec</option>
            </select>
          )}
        </div>

        <div className="mt-20">
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {awards?.map((award) => (
              <li key={award.Award_id} className="card w-96 bg-base-100 border-stone-300 border-[1px]">
                <div className="p-6">
                  <h2 className="card-title font-extrabold">
                    {`${
                      award?.Type === "Player"
                        ? "Player of the "
                        : award?.Type === "Coach"
                        ? "Coach of the "
                        : "Goal of the "
                    } ${award?.Is_season ? "Season" : "Month"}`}
                  </h2>
                </div>
                <div className="h-80 px-6 relative">
                  <div className="flex flex-col mb-1">
                    <Link className="w-max" to="/club/123">
                      <img
                        className="w-12 h-12 my-6"
                        alt="logo"
                        src={clublogo}
                      />
                    </Link>
                    <div className="flex flex-col mb-1">
                      <span className="font-light text-lg">Present by:</span>
                      <b className="text-2xl">{award.Partner_name}</b>
                    </div>
                    <div className="flex flex-col mb-1">
                      <span className="font-light text-lg">Year:</span>
                      <b className="text-2xl">{award.Season_year}</b>
                    </div>
                  </div>

                  <img
                    src={player}
                    className="w-[220px] h-[280px] object-contain absolute right-0 bottom-0"
                  />
                </div>

                <div className="card-body">
                  <h1 className="text-2xl font-extrabold">
                    {`${award.Receiver_first_name} ${award.Receiver_last_name}`}
                  </h1>
                  <Link
                    to={`/competitor/${award.Season_year}/${award.Competitor_id}`}
                    className="link link-hover inline text-right"
                  >
                    <p>
                      View Detail <ArrowRight className="w-5 h-5 inline" />
                    </p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  );
}
