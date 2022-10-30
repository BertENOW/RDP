import NavBar from "../components/navbar/navbar";
import SideBar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import { ElectronicsCategory } from "../projectCategory/electronicsCat";
import ProjectPageCard from "../components/cards/projectCard";
import img from '../public/assets/google add.png'


const Electronics =()=>{
    const categoryList = ElectronicsCategory.map((cat, i)=>{
        return <ProjectPageCard key={i} category={cat} bg={"bg-dark"}/>
    })
    const heading = <p className="mt-4 tc fs-4 fw5 text-primary">Electronic Projects Categories</p>
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

export default Electronics;