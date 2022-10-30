import NavBar from "../components/navbar/navbar"
import SideBar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer";
import {PythonCategory} from "../projectCategory/pythonCat"
import ProjectPageCard from "../components/cards/projectCard";


function Python() {
  const categoryList = PythonCategory.map((cat, i)=>{
    return <ProjectPageCard category={cat}/>
  })
  const heading = <p className="mt-4 tc fs-4 fw5 text-primary">Python Projects Categories</p>
  return (
    <div>
      <NavBar/>
      <SideBar 
      projectCategory={categoryList} 
      heading={heading}/>
      <Footer/>
     </div>
  );
}

export default Python;
 