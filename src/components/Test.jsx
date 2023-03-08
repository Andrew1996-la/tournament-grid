import { Bracket } from "react-brackets";

const rounds = [
  {
    title: "Round one",
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team B" }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: "Team C" }, { name: "Team D" }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team B" }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: "Team C" }, { name: "Team D" }],
      },
    ],
  },
  {
    title: "Round two",
    seeds: [
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
    ],
  },
  {
    title: "Round three",
    seeds: [
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
    ],
  },
];

const Component = () => {
  return <Bracket rounds={rounds} />;
};

export default Component;
