import React from "react";
import {
  CryptoCurrencies,
  Details,
  Exchanges,
  HomePage,
  Navbar,
  News,
} from "./components";
import "./App.css";
import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/crypto/:coinId" element={<Details />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            My Crypto
            <br />© All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
