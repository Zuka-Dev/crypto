import React, { useEffect, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [searchCrypto, setSearchCrypto] = useState("");
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  // console.log(cryptos);
  useEffect(() => {
    const filteredCryptos = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCrypto.toLowerCase())
    );
    setCryptos(filteredCryptos);
  }, [cryptosList, searchCrypto]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto"
            onChange={(e) => setSearchCrypto(e.target.value)}
            value={searchCrypto}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={8} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`#${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    alt={currency.name}
                    src={currency.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>
                  Daily Change:{" "}
                  <span
                    style={{ color: currency.change < 0 ? "red" : "green" }}
                  >
                    {millify(currency.change)}%
                  </span>
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default CryptoCurrencies;
