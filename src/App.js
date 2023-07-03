import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Footer from "./components/footer";

// import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general"></News>}
          ></Route>
          <Route
            exact
            path="/arts"
            element={<News key="arts" category="arts"></News>}
          ></Route>
          <Route
            exact
            path="/automobiles"
            element={<News key="automobiles" category="your money"></News>}
          ></Route>
          <Route
            exact
            path="/books"
            element={<News key="books" category="books"></News>}
          ></Route>
          <Route
            exact
            path="/business"
            element={<News key="business" category="business"></News>}
          ></Route>
          <Route
            exact
            path="/fashion"
            element={<News key="fashion" category="fashion"></News>}
          ></Route>
          <Route
            exact
            path="/food"
            element={<News key="food" category="food"></News>}
          ></Route>
          <Route
            exact
            path="/health"
            element={<News key="health" category="health"></News>}
          ></Route>
          <Route
            exact
            path="/insider"
            element={<News key="home" category="insider"></News>}
          ></Route>
          <Route
            exact
            path="/magazine"
            element={<News key="magazine" category="magazine"></News>}
          ></Route>
          <Route
            exact
            path="/movies"
            element={<News key="movies" category="movies"></News>}
          ></Route>
          <Route
            exact
            path="/politics"
            element={<News key="politics" category="politics"></News>}
          ></Route>
          <Route
            exact
            path="/realestate"
            element={<News key="real estate" category="real estate"></News>}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="gameplay"></News>}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News key="technology" category="technology"></News>}
          ></Route>
          <Route
            exact
            path="/theater"
            element={<News key="theater" category="theater"></News>}
          ></Route>
          <Route
            exact
            path="/travel"
            element={<News key="travel" category="travel"></News>}
          ></Route>
          <Route
            exact
            path="/world"
            element={<News key="world" category="world"></News>}
          ></Route>

          <Route exact path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    );
  }
}
