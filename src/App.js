import logo from "./logo.svg";
import "./App.css";
import baseUrl from "./config/index";
import axios from "axios";
function App() {
  axios.get(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  return <div className="App"></div>;
}

export default App;
