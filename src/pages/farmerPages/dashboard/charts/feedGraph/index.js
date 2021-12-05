import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import moment from "moment";

const FeedGraph = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data) return;
    let options = {
      series: [
        {
          name: "Inflation",
          data: data.map(({ consumption }) => consumption),
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "kg";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: data.map(({ month }) => moment(month, "MM").format("MMMM")),
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Feed Consumed",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
      colors: ["#409872"],
    };

    var chart = new ApexCharts(chartRef.current, options);

    chart.render();
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default FeedGraph;
