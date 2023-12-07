import Page from "../layout/Page";

import clublogo1 from "../assets/images/clublogo.png";
import clublogo2 from "../assets/images/clublogo.png";
import { useEffect, useState } from "react";
import {
  Card,
  Competitor,
  Goal,
  Substitution,
  Match as TMatch,
} from "../types";
import { axios } from "../custom-axios";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config";

function formatMatchTime(time: number, isFirstHalf: boolean): string {
  const totalTime = isFirstHalf ? 45 : 90;
  const additionalTime = time > 45 ? time - 45 : 0;

  return `${totalTime} ${additionalTime ? `+${additionalTime}` : ""}`;
}

export default function Match() {
  const [match, setMatch] = useState<
    | (TMatch & {
        activities: {
          goals: Goal[];
          subs: Substitution[];
          cards: Card[];
        };
        competitor: Competitor[];
      })
    | null
  >(null);

  const { seasonId, matchId } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}matches/${seasonId}/${matchId}`).then((res) => {
      console.log(res.data);
      setMatch(res.data);
    });
  }, []);

  return (
    <Page>
      <div className="bg-slate-900 h-96 hero">
        <div className="card container h-72 bg-white flex-col">
          <div className="flex-row justify-center items-center">
            <div className="card-body flex-row flex-1 px-20">
              <Link to={`/club/${seasonId}/${match?.Home_club_id}`} className="flex flex-row items-center grow-[1]">
                <img
                  src={clublogo1}
                  alt="logo1"
                  className="w-20 scale-125 left-10 aspect-square absolute"
                />
                <div className="flex flex-1 h-16 bg-blue-500 flex-col justify-center items-center" />
                <div className="absolute left-[132px] text-xl font-bold text-white">
                  {match?.Home_club_name}
                </div>
              </Link>
              <div className="p-6 border bg-slate-900 font-extrabold text-white rounded-lg flex flex-col w-[140px] justify-between">
                <span className="w-full flex justify-between">
                  <span className="text-4xl">
                    {match?.activities.goals.reduce((prev, curr) => {
                      if (curr.Is_home) return prev + 1;
                      return prev;
                    }, 0)}
                  </span>
                  <span className="text-4xl">-</span>
                  <span className="text-4xl">
                    {match?.activities.goals.reduce((prev, curr) => {
                      if (!curr.Is_home) return prev + 1;
                      return prev;
                    }, 0)}
                  </span>
                </span>
              </div>
              <Link to={`/club/${seasonId}/${match?.Away_club_id}`} className="flex flex-row-reverse items-center grow-[1]">
                <img
                  src={clublogo2}
                  alt="logo1"
                  className="w-20 scale-125 right-10 aspect-square absolute"
                />
                <div className="flex flex-1 h-16 bg-red-600 flex-col justify-center items-center" />
                <div className="absolute right-[132px] text-xl font-bold text-white">
                  {match?.Away_club_name}
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-2xl bg-red p-4">
            {match?.activities.goals.map((goal) => (
              <div className="flex flex-row justify-between">
                <span className="flex-1">
                  {goal.Is_home
                    ? `${goal.Scorer_first_name} ${formatMatchTime(
                        goal.Activity_time,
                        goal.Is_first_half === 1
                      )} ${goal.Goal_type === "own_goal" ? "(OG)" : ""}`
                    : ""}
                </span>
                <span className="flex-1 text-end">
                  {!goal.Is_home
                    ? `${goal.Scorer_first_name} ${formatMatchTime(
                        goal.Activity_time,
                        goal.Is_first_half === 1
                      )} ${goal.Goal_type === "own_goal" ? "(OG)" : ""}`
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Stadium</td>
              <td>{match?.Stadium}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Date</td>
              <td>{new Date(match?.DateTime || "").toLocaleString("vn-VN")}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Yellow Cards</td>
              <td>
                {match?.activities.cards.reduce((prev, curr) => {
                  if (curr.Card_type === "yellow") return prev + 1;
                  return prev;
                }, 0)}
              </td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Red Cards</td>
              <td>
                {match?.activities.cards.reduce((prev, curr) => {
                  if (curr.Card_type === "red") return prev + 1;
                  return prev;
                }, 0)}
              </td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Substituion</td>
              <td>{match?.activities.subs.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
