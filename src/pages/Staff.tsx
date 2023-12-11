import ArrowRight from "../assets/images/arrow-right.svg?react";
import Page from "../layout/Page";
import { useEffect, useState } from "react";
import { axios } from "../custom-axios";
import { API_URL } from "../config";
import { Staff } from "../types";

export default function Staff() {
  const [staff, setStaff] = useState<Staff[] | null>(null); // TODO: replace any with Staff[

  useEffect(() => {
    axios.get(`${API_URL}staff`).then((res) => {
      console.log(res.data)
      setStaff(res.data);
    });
  }, []);

  return (
    <Page>
      <div className="container mx-auto">

        <table className="table mt-20">
          <tbody>
            {/* row 1 */}
            {
              staff?.map((staff, index) => (
                <tr
                  key={staff.Staff_id}
                  className="hover:bg-slate-800 hover:text-white hover:cursor-pointer hover:pr-3 border-gray-400 transform duration-300"
                >
                  <th>{index + 1}</th>
                  <td>
                    {staff.Last_name} {staff.First_name}
                  </td>
                  <td>{staff.Staff_type}</td>
                  
                </tr>
              ))
            }
              
          </tbody>
        </table>
      </div>
    </Page>
  );
}
