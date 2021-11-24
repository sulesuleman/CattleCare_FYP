import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const YieldGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    let options = {
      chart: {
        toolbar: { show: false },
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Series A",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
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
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
  }, []);

  return <div ref={chartRef}></div>;
};

export default YieldGraph;
