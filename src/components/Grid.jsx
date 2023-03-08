import Component from "./Test";
import { useEffect } from "react";
import { createServer } from "miragejs";
import fakeData from "../fakeData";

createServer({
  routes() {
    this.get("/api/members", () => fakeData);
  },
});

function Grid(props) {
  useEffect(() => {
    fetch("/api/members")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <main className="dark:bg-gridBgDarkMode bg-gridBgLightMode dark:text-textDarkMode text-textLightMode flex justify-center items-center flex-col h-[calc(100vh-130px)]">
      <div className="block">{/*<Component />*/}</div>
    </main>
  );
}

export default Grid;
