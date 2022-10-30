import React from 'react'
import {Col} from "react-bootstrap"
import Image from 'next/image'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectPageCard=({category, bg})=>{
    return(
        <Col sm={6}  xl={6} xxl={4}className="my-5">
            <Link href={category.url}>
                <Card className={`${bg}`} style={{width:"19rem"}}>
                    <Image variant='top' src={category.img} height={200} width={400}/>
                    <Card.Body>
                        <p className='text-white fw5'>{category.name}</p>
                        <Card.Text className='fw2'>
                            {category.description}
                        </Card.Text>
                        <Button className="grow"variant='primary' >Explore</Button>
                    </Card.Body>
                    
                </Card>
            </Link>
        </Col>
        
    )
}

export default ProjectPageCard;