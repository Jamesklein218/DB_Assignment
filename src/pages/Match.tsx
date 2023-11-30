import Page from "../layout/Page";

import clublogo1 from "../assets/images/clublogo1.png";
import clublogo2 from "../assets/images/clublogo2.png";

export default function Match() {
  return (
    <Page>
      <div className="bg-slate-900 h-96 hero">
        <div className="card container h-72 bg-white flex-col">
          <div className="flex-row justify-center items-center">
            <div className="card-body flex-row flex-1 px-20">
              <div className="flex flex-row items-center grow-[1]">
                <img
                  src={clublogo1}
                  alt="logo1"
                  className="w-20 left-10 aspect-square absolute"
                />
                <div className="flex flex-1 h-16 bg-red-600 flex-col justify-center items-center" />
                <div className="absolute left-[132px] text-xl font-bold text-white">
                  Sheffield United
                </div>
              </div>
              <div className="p-6 border bg-slate-900 font-extrabold text-white rounded-lg flex flex-col w-[140px] justify-between">
                <span className="w-full flex justify-between">
                  <span className="text-4xl">4</span>
                  <span className="text-4xl">-</span>
                  <span className="text-4xl">1</span>
                </span>
              </div>
              <div className="flex flex-row-reverse items-center grow-[1]">
                <img
                  src={clublogo2}
                  alt="logo1"
                  className="w-20 right-10 aspect-square absolute"
                />
                <div className="flex flex-1 h-16 bg-red-800 flex-col justify-center items-center" />
                <div className="absolute right-[132px] text-xl font-bold text-white">
                  Bournemouth
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-96 max-w-xs bg-red p-4 border border-slate-500 border-[1] rounded-lg">
            <div className="flex-1 flex">
              <span className="flex-1">Stadium</span>
              <span className="flex-1">Etihad Stadium</span>
            </div>
            <div className="flex-1 flex">
              <span className="flex-1">Stadium</span>
              <span className="flex-1">Etihad Stadium</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Stat</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
