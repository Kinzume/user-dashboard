import { useState } from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Section4() {
  const initConfig = {
    options: {
      chart: {
        id: "basic-donut",
        // toolbar: {
        //   show: false,
        // },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
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
      legend: {
        show: true,
        position: "bottom",
      },
      labels: ["Mac", "Window", "IOS", "Android"],
    },

    series: [188888, 310213, 281100, 289540],
  };
  const [config, setConfig] = useState<any | null>(initConfig);
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
          options={config?.options}
          series={config?.series}
          type="donut"
          width="300px"
          height="300px"
        />
      </Box>
    </Paper>
  );
}
