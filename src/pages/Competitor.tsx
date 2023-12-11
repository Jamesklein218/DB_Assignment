import { Link, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { Competitor } from "../types";
import { useEffect, useState } from "react";
import { axios } from "../custom-axios";
import { API_URL } from "../config";

import playerImg from "../assets/images/player.png";

export default function Competitor() {
  const [player, setPlayer] = useState<Competitor | null>(null);

  const { competitorId, season } = useParams<{ competitorId: string, season: string }>();

  useEffect(() => {
    axios.get(`${API_URL}competitor/${competitorId}`).then((res) => {
      console.log(res.data);
      setPlayer(res.data);
    });
  }, []);

  const currContract = player?.contracts.find((c) => {
    return c.End_date === null;
  });

  return (
    <Page>
      <div className={"start w-full h-72 object-cover relative bg-white"}>
        <div className="absolute z-10 left-0 bottom-0 flex gap-10 px-6">
          <div className="text-black flex flex-col-reverse py-5">
            <p className="md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {player?.Position === 'goal_keeper' ? 'GOAL KEEPER' : player?.Position}
            </p>
            <p className="md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold">
              {player?.First_name + " " + player?.Last_name}
            </p>
          </div>
        </div>
        <img
          src={playerImg}
          className="absolute right-0 bottom-0 w-[220px] h-[280px] object-contain"
        />
      </div>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>First name</td>
              <td>{player?.First_name}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Last name</td>
              <td>{player?.Last_name}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Position</td>
              <td>{player?.Position === 'goal_keeper' ? 'GOAL KEEPER' : player?.Position}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Date of birth</td>
              <td>
                {new Date(player?.Date_of_birth || "").toLocaleDateString(
                  "vn-VN"
                )}
              </td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Nationality</td>
              <td>{player?.Nationality}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>In starting position</td>
              <td>{player?.Num_start} times</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Substitute</td>
              <td>{player?.Num_sub} times</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Status</td>
              <td>{player?.Status}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Club</td>
              <td>
                <Link
                  to={`/club/${season}/${
                    currContract?.Club_id
                  }`}
                >
                  {currContract?.Club}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h1 className="text-3xl font-bold mt-20">Contracts</h1>
        <table className="table mt-20">
          <tbody>
            {player?.contracts.map((contract, index) => (
              <tr
                key={contract.Start_date + contract.Club_id}
                className="hover:bg-slate-800 hover:text-white hover:cursor-pointer hover:pr-3 border-gray-400 transform duration-300"
              >
                <th>{index + 1}</th>
                <td>
                  <Link
                    to={`/club/${season}/${contract.Club_id}`}
                  >
                    {contract.Club}
                  </Link>
                </td>
                <td>{new Date(contract.Start_date).toLocaleDateString('vn-Vn')}</td>
                <td>{contract.End_date ? new Date(contract.End_date).toLocaleDateString('vn-Vn'): 'Current'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
}
