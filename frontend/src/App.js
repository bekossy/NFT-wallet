import React from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <>
      <div className="app">
        <Searchbar />
        <Layout />
        <Backdrop />
        <Modal />
      </div>
    </>
  );
}

export default App;
