import { useParams } from "react-router-dom";
import Page from "../layout/Page";

import clubLogo from "../assets/images/clublogo.png";
import { useEffect, useState } from "react";
import { axios } from "../custom-axios";
import { API_URL } from "../config";
import { Club as TClub } from "../types";

export default function Club() {
  const [club, setClub] = useState<TClub | null>(null);
  const { season, clubId } = useParams<{ clubId: string, season: string }>();

  useEffect(() => {
    axios.get(`${API_URL}club/${clubId}`).then((res) => {
      console.log(res.data);
      setClub(res.data.find((club: TClub) => club.Season_year.toString() === season))
    })
  }, [])

  return (
    <Page>
      <div className="start w-full h-80 object-cover relative">
        <div className="absolute z-10 left-0 bottom-0 flex gap-10">
          <div className="w-80 h-72 bg-white bg-opacity-70 rounded-tr-3xl flex justify-center items-center">
            <img
              src={clubLogo}
              alt="logo"
            />
          </div>

          <div className="text-black flex flex-col-reverse py-5">
            <p className="text-xl font-normal">{club?.Website_URL}</p>
            <p className="md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold">{club?.Name}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Name</td>
              <td>{club?.Name}</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Website</td>
              <td>
                <a
                  href={club?.Website_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >{club?.Website_URL}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
