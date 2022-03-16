import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import vrPlayer1sig from "../../content/assets/vrPlayer1sig.gif"
import styles from "../utils/css/components/index.css"

class Main extends React.Component {
  render() {
    const { data, children } = this.props
    console.log(this.props)
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <SEO title={siteTitle} />
        <div className="parent">
          <img
            src={vrPlayer1sig}
            alt="soggy ink logo with wet ink in the background"
            style={{ margin: "10px" }}
          ></img>
          <div className="element">
            <p>
              What happens when dreamers take action, and have fun doing it?
              What are you really capable of?
            </p>
            {/* 
            <a href="/form" className="button">
            Lets Play
            </a> 
            */}
          </div>
        </div>
        {/*
        <div className="parent">
          <div className="element">
            <img
              src={vrPlayer1sig}
              alt="soggy ink logo with wet ink in the background"
              style={{ margin: "10px" }}
            ></img>
          </div>

          <div className="element">
            <p>
              What happens when dreamers take action, and have fun doing it?
              What are you really capable of?
            </p>
            <a href="/form" className="button">
              Learn More
            </a>
          </div>

          <div className="element">
            <img
              src={vrPlayer1sig}
              alt="soggy ink logo with wet ink in the background"
              style={{ margin: "10px" }}
            ></img>
          </div>

          <div className="element">
            <p>
              What happens when dreamers take action, and have fun doing it?
              What are you really capable of?
            </p>
            <a href="/form" className="button">
              Learn More
            </a>
          </div>
          </div>
          */}
      </Layout>
    )
  }
}

export default Main

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
