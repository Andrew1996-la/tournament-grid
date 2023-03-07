import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App ">
      <div className="flex flex-col min-h-[100vh]">
        <div className="grow">
          <Header />
          <Grid />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
