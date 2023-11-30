import Page from "../layout/Page";

export default function Club() {
  return (
    <Page>
      <picture className="start w-full h-80 object-cover relative">
        <div className="absolute z-10 left-0 bottom-0 flex gap-10">
          <div className="w-80 h-72 bg-white bg-opacity-70 rounded-tr-3xl flex justify-center items-center">
            <img
              src="https://resources.premierleague.com/premierleague/badges/t14.png"
              alt="logo"
            />
          </div>

          <div className="text-white flex flex-col-reverse py-5">
            <p className="text-xl font-normal">Anfield Stadium</p>
            <p className="md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold">
              Liverpool FC
            </p>
          </div>
        </div>

        <div className="absolute w-full h-full bg-black bg-opacity-40 -z-10"></div>
        <img
          className="w-full h-full object-cover z-0"
          src="https://resources.premierleague.com/photos/2023/08/18/613c6d50-3413-4d3c-9eca-d77e0c6daec4/Liverpool_1920x1280.jpg?width=375&height=294"
          alt="logo"
        />
      </picture>

      <div className="container mx-auto">
        <table className="table mt-20">
          <tbody>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Name</td>
              <td>Liverpool FC</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Stadium</td>
              <td>Anfield</td>
            </tr>
            <tr className="hover:bg-slate-800 hover:text-white hover:pr-3 transform duration-300">
              <td>Website</td>
              <td>
                <a
                  href="https://liverpoolfc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.liverpoolfc.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
