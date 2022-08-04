import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { CryptoCurrencies, News, Loader } from "../components";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log(globalStats);
  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies
        </Title>
        <Typography.Paragraph level={1} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography.Paragraph>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Typography.Paragraph level={1} className="show-more">
          <Link to="/news">Show More</Link>
        </Typography.Paragraph>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
