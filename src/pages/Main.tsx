import { useNavigate } from 'react-router-dom';
import ArrowRight from '../assets/images/arrow-right.svg?react';
import Page from "../layout/Page";

export default function Main() {
  const navigate = useNavigate();
  return (
    <Page>
      <div className="container mx-auto hero">
        <table className="table mt-20">
          <tbody>
            {/* row 1 */}
            <tr onClick={() => navigate(`/match/${'123'}`)} className="hover:bg-slate-800 hover:text-white hover:cursor-pointer hover:pr-3 border-gray-400 transform duration-300">
              <th>1</th>
              <td>Man City vs Man United</td>
              <td>Etihad Stadium, Manchester</td>
              <td className="">
                <ArrowRight className="w-5 h-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
}
