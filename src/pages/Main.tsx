import { useNavigate } from "react-router-dom";
import ArrowRight from "../assets/images/arrow-right.svg?react";
import Page from "../layout/Page";
import { useEffect, useState } from "react";
import { axios } from "../custom-axios";
import { API_URL } from "../config";
import { Match } from "../types";

export default function Main() {
  const navigate = useNavigate();

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}matches/2019`).then((res) => {
      setMatches(res.data);
    });
  }, []);

  return (
    <Page>
      <div className="container mx-auto hero">
        <table className="table mt-20">
          <tbody>
            {/* row 1 */}
            {matches.map((match, index) => (
              <tr
                key={match.Match_id}
                onClick={() => navigate(`/match/${"123"}`)}
                className="hover:bg-slate-800 hover:text-white hover:cursor-pointer hover:pr-3 border-gray-400 transform duration-300"
              >
                <th>{index + 1}</th>
                <td>{match.Home_club_name} vs {match.Away_club_name}</td>
                <td>{match.Stadium}</td>
                <td className="">
                  <ArrowRight className="w-5 h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
}
