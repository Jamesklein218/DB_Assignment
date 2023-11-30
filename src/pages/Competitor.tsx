import { Link } from "react-router-dom";
import Page from "../layout/Page";

export default function Club() {
  return (
    <Page>
      <div className="start w-full h-72 object-cover relative bg-red-700">
        <div className="absolute z-10 left-0 bottom-0 flex gap-10 px-6">
          <div className="text-white flex flex-col-reverse py-5">
            <p className="md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold">
              11
            </p>
            <p className="md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold">
              Mohamed Salah
            </p>
          </div>
        </div>
        <img
          src="https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png"
          className="absolute right-0 bottom-0"
        />
      </div>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Name</td>
              <td>Mohamed Salah</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Club</td>
              <td>
                <Link to="/club/liverpool">Liverpool FC</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
