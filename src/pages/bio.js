/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import natalie from "../../content/assets/natalie.png"
import alexis from "../../content/assets/alexis.png"

import playerOne from "../../content/assets/playerOne.gif"

const RoundWrapper = styled.div`
  border: 4px solid #fff;
  border-radius: 20px;
  padding: 50px;

  @media (max-width: 420px) {
    padding: 10px;
    font-size: 0.8em;
  }
  font-size: 0.8em;

  .pinkMe {
    display: block;
    margin: auto;
  }
`

// const Dividor = styled.div`
//   .shapedividers_com-5730 {
//     overflow: hidden;
//     position: relative;
//   }
//   .shapedividers_com-5730::before {
//     content: "";
//     font-family: "shape divider from ShapeDividers.com";
//     position: absolute;
//     z-index: 3;
//     pointer-events: none;
//     background-repeat: no-repeat;
//     bottom: -0.1vw;
//     left: -0.1vw;
//     right: -0.1vw;
//     top: -0.1vw;
//     background-size: 100% 85px;
//     background-position: 50% 0%;
//     background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 78"><g fill="%23ffffff"><path d="M207 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM209 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM215 33a2 2 0 00-1-1c-2 1-2 5-2 7a3 3 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM177 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM119 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM135 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM539 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM537 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM545 33a2 2 0 00-1-1c-2 1-2 5-2 7a2 2 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM449 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM507 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM465 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM879 28a2 2 0 00-1 3c0 1 2 2 4 1a2 2 0 000-2 2 2 0 00-3-2zM886 33a2 2 0 00-2-1c-2 1-2 5-2 7a2 2 0 002 1 2 2 0 001 0 3 3 0 001-1 5 5 0 001-5 3 3 0 00-1-1zM877 37a1 1 0 00-1 1h3c0-1-1-2-2-1zM847 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM789 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM805 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1z"/><path d="M1914 0H0v25h1c5 1 12 15 12 35 0 5 0 8 3 9h5c4-3 0-9 1-13 1-3 4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 12-4 7 3 18 2 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 5 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 8-5 7-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a26 26 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c8 9 16 12 16 18 0 3-1 6 1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 9 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9l-2-13c1-6 4-8 7-8 7 0 6 6 10 4 4-1 2-6 4-10 2-1 4 0 5 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 5 1 11-5 8-10s-3-10-1-16a3 3 0 002 2 9 9 0 003 1c5 1 13 15 13 35 0 5 0 8 3 9h5c4-3 0-10 1-13s4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 11-4 7 2 19 1 24 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 0-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 7-5 7-9a13 13 0 00-2-5c-3-4 1-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 4-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18l1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 6 1 11-5 8-10-6-10 1-19 7-27l3 7c0 2-1 5 1 6a9 9 0 004 1c5 1 13 15 12 35 0 5 0 8 3 9h5c4-3 0-10 1-13s5-7 7-4c2 0 2 2 4 3s3-1 4-3c0-4-3-19 2-25 3-5 9-6 12-4 7 2 18 1 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 7 12 5-1 7-5 6-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 12-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 16-13 8 1 12 8 12 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18 0 3 0 6 2 8h5c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a44 44 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5 3-3 7-2c4 0 3 7 3 8a5 5 0 01-1 2c-5 5-2 11 4 11 6 1 11-5 8-10-5-8-1-16 4-23 5 7 9 15 4 23-3 5 3 11 8 10 7 0 9-6 5-11a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a44 44 0 00-1-7c0-2-1-7 2-8 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 9a9 9 0 006 0 6 6 0 003-9l-2-6c1-17 5-24 13-25 9-2 16 5 15 13v10a4 4 0 003 3 4 4 0 004-3c1-2-1-7 2-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-3-11-3-33 0-4 0-8 4-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-2 5c0 4 1 8 7 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-3 18-5 21-5 6-2 13 4 15a8 8 0 002 0c5 0 10-4 10-9 0-3-2-5-3-7-3-5-3-26-1-30 5-7 16-6 23-9 4-2 9-1 12 4 5 6 2 21 3 25 0 2 1 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 1 13h5c3-1 3-4 3-9 0-20 7-34 12-35a9 9 0 004-1c2-1 1-4 2-6l3-7c5 8 12 18 6 27-3 5 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 2-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35a9 9 0 003-1 3 3 0 002-1c2 5 3 10-1 15-3 6 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-3 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6 2 1 4 2 6 0s1-5 1-8c0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 26 26 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35V0z"/><path d="M1794 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1792 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1787 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 3 3 0 001-2c1-1 0-5-1-6zM1865 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1881 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1824 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1551 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1535 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1464 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1457 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-1-6zM1494 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1462 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1124 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1116 32a2 2 0 00-1 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-2-6zM1122 31a2 2 0 00-1-3 2 2 0 00-3 2 2 2 0 001 2c1 1 3 0 3-1zM1195 23l-3 1a1 1 0 002 1c0 1 2 0 1-1a1 1 0 000-1zM1153 27a4 4 0 00-2 4 3 3 0 001 2 4 4 0 007-2c1-3-3-5-6-4zM1211 53a3 3 0 00-2 3 2 2 0 001 2 3 3 0 005-2c0-2-2-4-4-3z"/></g></svg>');
//   }

//   @media (min-width: 2100px) {
//     .shapedividers_com-5730::before {
//       background-size: 100% calc(2vw + 85px);
//     }
//   }
// `

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        // const siteTitle = data.site.siteMetadata.title
        return (
          <Layout title={"Soggy ink games"}>
            <SEO
              title="Bio"
              keywords={[
                `blog`,
                `soggy-ink-games`,
                `javascript`,
                `react`,
                "soggy ink games",
              ]}
            />
            <article className="post-content page-template no-image">
              <div className="post-content-body">
                <h2 id="bio">introducing the soggy ink team</h2>
                <br></br>

                <p>
                  Hi, Im Ian, founder of Soggy Ink Games, building{" "}
                  <a href="/">EQUANIMOUS</a> and Im here to change the game!
                  <br></br>
                  Seeing you're here chances are, we have a few things in
                  common... (big dreams, bigger ideas, a high achiever
                  continuously battling impostor syndrome)
                </p>
                <p>
                  I am a self taught software engineer, who for the last few
                  years has been building a platform used by over 630,000 higher
                  ed students to help them succeed in their learning via new
                  interactive ways. However I'm not here to talk about that.
                </p>
                {/*
                <RoundWrapper>
                  <img
                    src={pinkMe}
                    className="zoomzoom pinkMe"
                    alt="soggy ink logo with wet ink in the background"
                    style={{ margin: "0 auto" }}
                  ></img>
                </RoundWrapper>
                  */}

                <RoundWrapper>
                  <img
                    src="https://res.cloudinary.com/soggy-ink-games/image/upload/v1710399360/ian-bio-card_srm7fr.png"
                    className="zoomzoom pinkMe"
                    alt="soggy ink logo with wet ink in the background"
                    style={{ margin: "0 auto" }}
                  ></img>
                </RoundWrapper>

                <p>
                  <br></br>I want to see everyone thrive, I want you to believe
                  in yourself, have fun and keep reaching higher than you ever
                  thought possible, to build your future, the one we all
                  deserve... while enjoying the present moment.
                </p>
                <p>
                  ...and I have a <a href="./vision">plan</a>
                </p>

                <br></br>
                <h2 id="bio">one team one dream</h2>
                <p>
                  Having worked across educational tech, startups and
                  government, including Smart Sparrow, Pearson, Attlassian and
                  more, we're on a mission to help driven higher ed students
                  memorise anything they want while having fun.{" "}
                </p>

                <RoundWrapper>
                  <img
                    src={natalie}
                    className="zoomzoom pinkMe"
                    alt="soggy ink logo with wet ink in the background"
                    style={{ margin: "0 auto" }}
                  ></img>
                </RoundWrapper>

                <p></p>
                <RoundWrapper>
                  <img
                    src={alexis}
                    className="zoomzoom pinkMe"
                    alt="soggy ink logo with wet ink in the background"
                    style={{ margin: "0 auto" }}
                  ></img>
                </RoundWrapper>
                <br></br>
                <p>Welcome to Soggy Ink games!</p>
                <br></br>
                <p>You are the wave.</p>
                <img
                  src={playerOne}
                  className="zoomzoom"
                  alt="soggy ink logo with wet ink in the background"
                ></img>
                <p>
                  <br></br>
                  <br></br>
                  Written by <strong>{author}</strong> who lives and works in
                  Sydney building useful things.
                  {` `}
                  <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow her on Twitter
                  </a>
                </p>
              </div>
            </article>
          </Layout>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/soggy-ink.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
