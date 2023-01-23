import { useState } from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const currentYear = [
  {
    name: "London",
    type: "line",
    data: [27568, 18348, 35776, 23245, 38936],
  },
  {
    name: "Tokyo",
    type: "line",
    data: [12435, 28680, 33453, 26740, 33490],
  },
];
const previousYear = [
  {
    name: "London",
    type: "line",
    data: [24568, 27880, 32676, 33655, 36536],
  },
  {
    name: "Tokyo",
    type: "line",
    data: [26435, 23448, 34453, 34340, 35690],
  },
];
export default function Section5() {
  const initConfig = {
    options: {
      colors: ["#9933ff", "#66DA26"],
      stroke: {
        show: true,
        curve: "smooth",
      },
      chart: {
        id: "basic-line",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: { show: false },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: { show: true },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
      },
      tooltip: {
        x: {
          show: false,
        },
        marker: {
          show: true,
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    series: currentYear,
  };
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
    const newConfig = {
      ...config,
      series: event.target.value === "2022" ? currentYear : previousYear,
    };
    setConfig(newConfig);
  };
  const [config, setConfig] = useState<any | null>(initConfig);
  const [year, setYear] = useState("2022");
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 500, typography: "h6" }}>
            Area Installed
          </Typography>
          <Typography variant="body2">{"(+43%) than last year"}</Typography>
        </Box>
        <FormControl>
          <InputLabel id="year">Year</InputLabel>
          <Select
            value={year}
            label="Year"
            onChange={handleChange}
          >
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Chart
        options={config?.options}
        series={config?.series}
        width="300px"
        height="300px"
      />
    </Paper>
  );
}
