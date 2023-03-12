import { useState } from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ApexOptions } from "apexcharts";

export default function Downloads() {
  const config: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    labels: ["Mac", "Window", "IOS", "Android"],
    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          labels: {
            show: true,
            value: {
              fontWeight: 600,
              formatter: (w: string) => {
                const value = parseInt(w);
                return new Intl.NumberFormat("en-GB").format(value);
              },
            },
            total: {
              show: true,
              fontSize: "12px",
              fontWeight: 600,
              formatter: (w: { config: ApexCharts; globals: any }) => {
                const total = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => {
                    return a + b;
                  },
                  0
                );
                return new Intl.NumberFormat("en-GB").format(total);
              },
            },
          },
        },
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
    series: [188888, 310213, 281100, 289540],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
  };
  const [options, setOptions] = useState<ApexOptions>(config);
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography
        component={"h2"}
        sx={{
          width: "fit-content",
          marginRight: "auto",
          marginBottom: "auto",
          fontWeight: 500,
          typography: "h6",
        }}
      >
        Current Downloads
      </Typography>
      <Box sx={{ marginBottom: "auto" }}>
        <Chart
          options={options}
          series={options.series}
          type="donut"
          width="300px"
          height="300px"
        />
      </Box>
    </Paper>
  );
}
