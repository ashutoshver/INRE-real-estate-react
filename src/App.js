import React from "react";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offering from "./components/Offering";
import Team from "./components/Team";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Offering />
      <Team />
      <Blogs />
      <Form />
      <Footer />
    </>
  );
}

export default App;
