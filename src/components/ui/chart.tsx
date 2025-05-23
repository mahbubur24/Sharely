"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Dynamically import with no SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line" as const,
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      yaxis: [
        {
          title: {
            text: "Website Blog",
          },
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        series: [
          {
            name: "Website Blog",
            type: "column",
            data: Array.from({ length: 12 }, () =>
              Math.floor(Math.random() * 500)
            ),
          },
          {
            name: "Social Media",
            type: "line",
            data: Array.from({ length: 12 }, () =>
              Math.floor(Math.random() * 50)
            ),
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
