import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import moment from "moment";

const NewUserGraph = ({ data }) => {
  const chartRef = useRef();
  console.log("data" , data);

  useEffect(() => {
    if (!data) return;

    let options = {
      chart: {
        toolbar: { show: false },
        height: 350,
        type: "line",
        stacked: false,
      },
      // dataLabels: {
      //   enabled: true,
      //   formatter: function (val) {
      //     return val + ;
      //   },
      // },

      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "New Users Signed up",
          data: data.map(({ total }) => total),
        },
      ],
      stroke: {
        width: [4, 4],
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      xaxis: {
        categories: data.map(({ month }) => moment(month, "MM").format("MMMM")),
      },
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    };

    var chart = new ApexCharts(chartRef.current, options);

    chart.render();
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default NewUserGraph;
