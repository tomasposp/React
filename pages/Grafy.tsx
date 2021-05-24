import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React, { useState } from 'react'
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'
import { Bar } from 'react-chartjs-2'

export default function Page() {
  //const { data, loading, error } = useViewerKryptomenaQuery()

  const restLink = new HttpLink({ uri: 'https://api.blocktap.io/graphql' })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
    

  })

  const query = gql`
    query CandlestickData(
      $resolution: TimeResolution = _1d
      $start: Int = 1606172400
      $end: Int = 1621807200
    ) {
      timeseries(
        resolution: $resolution
        startUnix: $start
        endUnix: $end
        sort: OLD_FIRST
      ) {
        unix: startUnix

        m: markets(
          filter: {
            exchangeSymbol: { _eq: "Binance" }
            baseSymbol: { _eq: "BTC" }
            quoteSymbol: { _eq: "EUR" }
          }
        ) {
          highPrice
        }
      }
    }
  `

  const [data, setData] = useState([])
  let hodnota: any[] = [];
  let date = [];

  client.query({ query }).then((response) => {
    setData(response.data.timeseries)
  })
  console.log(data)

  
    const data1 = {
    
        labels:hodnota,
        
    
        datasets: [
          {
            label: "Binance-BTC",
            data:hodnota,
           
            backgroundColor: 'rgb(70, 200, 70)',
            type: 'line',
          },
        ],
      };
      var output = <Bar data={data1} height={500} width={700}/>;
      
  return (
    <div className={styles.container}>
      <Head>
        <title>Kryptoměny</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <p>
          <h2 className={styles.title2}>
           

              {data.map((item) => {
                  hodnota.push(item.m[0].highPrice);
                  date.push(item.startUnix)
                  
                
              })}
            
            {
                output
            }
  
          </h2>
        </p>
      </main>
    </div>
  )
}
