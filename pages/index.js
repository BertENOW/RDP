// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar/navbar"
import Hero from "../components/hero/hero"
import ProjectCategoryHome from "../components/projects-category/pCategoryHome"
import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <div className="">
        <NavBar/>
        <Hero/>
        <ProjectCategoryHome/>
        <Footer/>

    </div>
  )
}
