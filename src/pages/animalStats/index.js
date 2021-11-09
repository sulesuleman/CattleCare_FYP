import React from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import "./index.css";

const AnimalStats = () => {
  const history = useHistory();
  return (
    <div className="animal_stats_container">
      <Table responsive="sm mt-5 text-center" borderless={true}>
        <thead>
          <tr>
            <th>Cattle Type</th>
            <th>Breed Type</th>
            <th>Price</th>
            <th>Sex</th>
            <th>Weight</th>
            <th>Age</th>
            <th>Anticipation Date</th>
            <th>Child Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr  onClick={() => history.push("/animal-stats/1")}>
            <td>Cow</td>
            <td>Afghani</td>
            <td>3200 pkr</td>
            <td>Male</td>
            <td>1000 kg</td>
            <td>10 years</td>
            <td>02-02-2021</td>
            <td>2</td>
            <td style={{ verticalAlign: "middle" }}>
              <div className="table_actions_container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ marginLeft: 10 }}
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AnimalStats;
