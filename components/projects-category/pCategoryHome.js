import React from 'react'
import {Container, Row} from "react-bootstrap"
import ProjectCard from '../cards/card'
import {ElectronicsCategory} from "../../projectCategory/electronicsCat"
import { ReactCategory } from '../../projectCategory/reactCat'
import { WordpressCategory } from '../../projectCategory/wordpressCat'
import { PythonCategory } from '../../projectCategory/pythonCat'

const ProjectCategoryHome=()=>{
    let newArray = ElectronicsCategory.slice(0,2);

    const electronicList = newArray.map((cat, i)=>{
        return <ProjectCard key={i} category={cat}/>
    });

    newArray = ReactCategory.slice(1,3);

    const reactList = newArray.map((cat, i)=>{
        return <ProjectCard key={i} category={cat}/>
    });

    newArray = WordpressCategory.slice(1,3);

    const wpList = newArray.map((cat, i)=>{
        return <ProjectCard key={i} category={cat}/>
    });

    const pythonList = PythonCategory.map((cat,i)=>{
        return <ProjectCard key={i} category={cat}/>
    })

    return(
        <section>
            <Container fluid className=" pt-1  bg-dark " >
                <Row className=" pt-1 mx-md-1 mx-xl-3 mx-xxl-5 d-flex" >
                    
                    <h3 className='text-center py-5 text-primary' id='trending'>Projects Categories</h3>
                    {electronicList}
                    {reactList}
                    {pythonList}
                    {wpList}
                    <div className="d">
                        
                    </div>
                        
                    
                    
                </Row>

            </Container>
        </section>
    )
}

export default ProjectCategoryHome;