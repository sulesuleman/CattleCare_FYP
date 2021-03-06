import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import moment from "moment";

const YieldGraph = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data) return;

    let options = {
      chart: {
        toolbar: { show: false },
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "kg";
        },
      },

      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Consumption",
          data: data.map(({ consumption }) => consumption),
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
        categories: data.map(({ day }) => moment(day, "DD").format('dddd')),
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

export default YieldGraph;
