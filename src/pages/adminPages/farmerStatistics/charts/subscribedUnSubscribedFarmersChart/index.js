import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import moment from "moment";

const SubscribedUnsubscribedFarmersChart = ({ data }) => {
  const chartRef = useRef();
  console.log("data", data);

  useEffect(() => {
    if (!data) return;

    var options = {
      series: [data?.subscriberCount, data?.unsubscribeCount],
      chart: {
        width: 380,
        height: 500,
        type: "pie",
      },
      labels: ["Subscribed Users", "Un-Subscribed Users"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(chartRef.current, options);

    chart.render();
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default SubscribedUnsubscribedFarmersChart;
