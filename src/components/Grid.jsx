import Component from "./Test";
import { useEffect } from "react";
import { createServer } from "miragejs";
import { useSelector } from "react-redux";

let fakeData;
createServer({
  routes() {
    this.get("/api/members", () => fakeData);
  },
});

function Grid(props) {
  fakeData = useSelector((state) => state.membersSlice.members);
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
