import Component from "./Test";
import { useEffect } from "react";
import { createServer } from "miragejs";
import fakeData from "../fakeData";
import { useDispatch, useSelector } from "react-redux";
import { setMembers } from "../store/membersSlice";

createServer({
  routes() {
    this.get("/api/members", () => fakeData);
  },
});

function Grid(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/members")
      .then((response) => response.json())
      .then((json) => dispatch(setMembers(json)));
  }, [fakeData]);

  const members = useSelector((state) => state.membersSlice.members);
  if (members.length === 0) return;

  return (
    <main className="dark:bg-gridBgDarkMode bg-gridBgLightMode dark:text-textDarkMode text-textLightMode flex justify-center items-center flex-col h-[calc(100vh-130px)]">
      <div className="block">{<Component members={members} />}</div>
    </main>
  );
}

export default Grid;
