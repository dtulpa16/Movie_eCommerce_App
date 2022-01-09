import './SellTracker.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)

export default function SellTracker(props) {
    const [items, setItems]=useState('')
    const [sells, setSells]=useState({musical:0, comedy : 0,documentary:0,action:0,suspence:0, romance:0})

    async function getSells(){
        let response = await axios.get(`https://localhost:44394/api/sold/${props.user.id}`);
        console.log(response.data)
      }

    useEffect(()=>{
        getSells()
    },[])


  const state = {
    labels: ["Musical", "Comedy", "Documentary", "Action", "Suspence","Romance"],
    datasets: [
      {
        label: "Items",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div className="graph">
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Items sold per category',
            fontSize:30
          },
          legend:{
            display:true,
            position:'right',
            
          }
        }}
      />
    </div>
  );
}
