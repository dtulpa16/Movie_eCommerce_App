import "./SellTracker.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export default function SellTracker(props) {
  const [musical, setMusical] = useState(0);
  const [comedy, setComedy] = useState(0);
  const [documentary, setDocumentary] = useState(0);
  const [action, setAction] = useState(0);
  const [suspence, setSuspense] = useState(0);
  const [romance, setRomance] = useState(0);


  async function getSells() {
    let response = await axios.get(
      `https://localhost:44394/api/sold/${props.user.id}`
    );
    console.log(response.data);
    response.data.map((e) => {
      if (e.genresId === 1) {
        setMusical(e.quantity);
      } else if (e.genresId === 2) {
        setComedy(e.quantity);
      } else if (e.genresId === 3) {
        setDocumentary(e.quantity);
      } else if (e.genresId === 4) {
        setAction(e.quantity);
      } else if (e.genresId === 5) {
        setSuspense(e.quantity);
      } else if (e.genresId === 6) {
        setRomance(e.quantity);
      }
    });
  }

  useEffect(() => {
    getSells();
  }, []);

  const state = {
    labels: [
      "Musical",
      "Comedy",
      "Documentary",
      "Action",
      "Suspence",
      "Romance",
    ],
    datasets: [
      {
        label: "Movies",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: [
          musical,
          comedy,
          documentary,
          action,
          suspence,
          romance,
        ],
      },
    ],
  };
  return (
    <div className="graph">
      
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Items sold per category",
            fontSize: 30,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
