import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React, { useState } from 'react'
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'

export default function Page() {
  //const { data, loading, error } = useViewerKryptomenaQuery()

  const restLink = new HttpLink({ uri: 'https://api.blocktap.io/graphql' })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
  })

  const query = gql`
    query price {
      markets(
        filter: { quoteSymbol: { _in: ["EUR"] }, marketStatus: { _eq: Active } }
      ) {
        marketSymbol
        ticker {
          lastPrice
          percentChange
          lowPrice
          highPrice
        }
      }
    }
  `

  const [data, setData] = useState([])
  client.query({ query }).then((response) => {
    setData(response.data.markets)
  })

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
            <table className={styles.tab}>
              <tr className={styles.nadpis}>
                <td>Název obchodu</td> <td>Momentální cena</td>{' '}
                <td>Procentuální změna 24h</td> <td> Nejmenší cena 7d</td>{' '}
                <td>Největší cena 7d</td>
              </tr>

              {data.map((item) => {
                if (item.ticker != null) {
                  return (
                    <tr className={styles.tabulka}>
                      <td className={styles.tabulka}>{item.marketSymbol}</td>
                      <td className={styles.tabulka}>{Math.round(item.ticker.lastPrice *1000)/1000} EUR</td>{' '}
                      <td className={styles.tabulka}>{Math.round(item.ticker.percentChange*1000)/1000}%</td>{' '}
                      <td className={styles.tabulka}>{Math.round(item.ticker.lowPrice*1000)/1000} EUR </td>{' '}
                      <td className={styles.tabulka}>{Math.round(item.ticker.highPrice*1000)/1000} EUR </td>
                    </tr>
                  )
                }
              })}
            </table>
          </h2>
        </p>
      </main>
    </div>
  )
}
