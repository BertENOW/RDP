import React from 'react'
import {Col} from "react-bootstrap"
import Image from 'next/image'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard=({category})=>{
    return(
        <Col sm={6}  xl={4} xxl={3}className="my-5">
            <Link href={category.url}>
                <Card className='bg-secondary' style={{width:"19rem"}}>
                    <Image variant='top' src={category.img} height={200} width={400}/>
                    <Card.Body>
                        <p className='text-white fw5'>{category.name}</p>
                        <Card.Text className='text-muted'>
                            {category.description}
                        </Card.Text>
                        <Button variant='primary' >Explore</Button>
                    </Card.Body>
                    
                </Card>
            </Link>
        </Col>
        
    )
}

export default ProjectCard;