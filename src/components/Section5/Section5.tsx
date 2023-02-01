import { useState } from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ApexOptions } from "apexcharts";

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
  const config: ApexOptions = {
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
    colors: ["#9933ff", "#66DA26"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
    series: currentYear,
    stroke: {
      show: true,
      curve: "smooth",
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: {
        show: true,
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
  };
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
    const newOptions = {
      ...options,
      series: event.target.value === "2022" ? currentYear : previousYear,
    };
    setOptions(newOptions);
  };
  const [options, setOptions] = useState<ApexOptions>(config);
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
          <Typography
            variant={"h2"}
            sx={{ fontWeight: 500, typography: "h6" }}
          >
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
      <Box sx={{ width: "100%", height: "400px" }}>
        <Chart
          options={options}
          series={options.series}
          width="100%"
          height="100%"
        />
      </Box>
    </Paper>
  );
}
