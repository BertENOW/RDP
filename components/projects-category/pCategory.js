import ProjectCard from "../cards/card";
import React, {Container, Row} from 'react';


const ProjectCategory=({category})=>{

    const categoryList = category.map((cat, i)=>{
        return <ProjectCard category={cat}/>
    })
    console.log(categoryList)
    return (
        <div>
            {categoryList}
        </div>    
    )
}

export default ProjectCategory;