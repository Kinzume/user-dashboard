import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import App from "./App";

type data = {
  appID: number;
  app: string;
  os: string;
  price: string;
  rating: number;
  reviews: string;
};
const data = [
  {
    appID: 0,
    app: "Chrome",
    os: "Mac",
    price: "$89.99",
    rating: 3.7,
    reviews: "20.1k",
  },
  {
    appID: 1,
    app: "Drive",
    os: "Windows",
    price: "Free",
    rating: 4.7,
    reviews: "15.7k",
  },
  {
    appID: 2,
    app: "Dropbox",
    os: "Windows",
    price: "$137.37",
    rating: 3.5,
    reviews: "17k",
  },
  {
    appID: 3,
    app: "Evernote",
    os: "Windows",
    price: "$29.99",
    rating: 3.3,
    reviews: "19.6k",
  },
  {
    appID: 4,
    app: "GitHub",
    os: "Mac",
    price: "Free",
    rating: 4.7,
    reviews: "20.5k",
  },
  {
    appID: 5,
    app: "Octane",
    os: "Windows",
    price: "Free",
    rating: 5,
    reviews: "15k",
  },
];

export default function TopApps() {
  return (
    <Paper
      elevation={3}
      sx={{ overflow: "auto", borderRadius: 3 }}
    >
      <Typography
        variant={"h2"}
        sx={{ fontWeight: 500, typography: "h6", p: 2 }}
      >
        Top Rated Applications
      </Typography>
      {data?.map((app) => (
        <App
          key={app?.appID}
          app={app?.app}
          os={app?.os}
          price={app?.price}
          rating={app?.rating}
          reviews={app?.reviews}
        />
      ))}
    </Paper>
  );
}
