import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import indexStyles from "../styles/index.module.scss"

import mitCampus from "../images/mit-campus.jpg"

export default function Home() {
  return (
  <Layout>
    <div className={indexStyles.container}>
      <img src={mitCampus} alt="MIT Campus" width="100%" />
      <div className={indexStyles.centered}>
        <h1
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="300"
        data-sal-easing="ease-out-back"
        >
          Abtin Ameri
        </h1>
      </div>
    </div>
    <h2>
      <p>
        <a href="https://www.mit.edu">MIT</a> PhD Student
      </p>
      <p>
        2016 Schulich Leader Scholar
      </p>
      <p>
        Ernerst brown Gold Medalist for highest ability throughout the undergraduate program.
      </p>
      <p>
        Co-founder and instructor of the McGill Physics Olympiad Program (MPOP)
      </p>
      <p>
        Former Vice President Academic of the Engineering Undergraduate Society
      </p>
    </h2> 
  </Layout>
  )
}
