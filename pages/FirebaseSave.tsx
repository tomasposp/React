import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React, { useState } from 'react'
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'


const restLink = new HttpLink({ uri: "https://api.blocktap.io/graphql" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

const query = gql`

query CandlestickData($resolution: TimeResolution!, $start: Int!, $end: Int!) {
      timeseries(resolution: $resolution, startUnix: $start, endUnix: $end, sort: OLD_FIRST) {
        unix: startUnix
        m: markets(filter: { exchangeSymbol: { _eq: "Binance"  } 
 quoteSymbol: { _eq: "EUR"  } 
  } 
 ) {
          volume: baseVolume
        }
      }
    }
`;

const [data, setData] = useState([]);
client.query({ query }).then(response => {
    setData(response.data.markets)
  });