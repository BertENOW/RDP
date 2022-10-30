import NavBar from "../components/navbar/navbar"
import SideBar from "../components/sidebar/sidebar"
import Footer from "../components/footer/footer"
import {ReactCategory} from "../projectCategory/reactCat"
import ProjectPageCard from "../components/cards/projectCard"

const ReactProject=()=> {
    const categoryList = ReactCategory.map((cat, i)=>{
        return <ProjectPageCard key={i} category={cat}/>
    })
    const heading = <p className="mt-4 tc fs-4 fw5 text-primary">React Projects Categories</p>
    return(
        <div>
            <NavBar/>
            <SideBar 
            projectCategory={categoryList} 
            heading={heading}/>
            <Footer/>
        </div>
    )
}

export default ReactProject