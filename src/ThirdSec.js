import React from "react"
import image_three from "./images/im3.jpg"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';







function ThirdSec(){
    return(
        <>
        <Container style={{margin: "0 auto"}}>
        <Row>
            <Col md><Image src={image_three} fluid/></Col>
            <Col md><Card>
            <Card.Body>
                <Card.Title>
                <h1>

                Embrace Elevated Living 
                at Riverside Residences
                 </h1>
                </Card.Title>
                <Card.Text>
                <p>
                At Riverside Residences, luxury extends beyond your apartment door. 
                Picture yourself starting your day with a jog along the scenic riverfront, 
                followed by a refreshing dip in our sparkling pool. Host friends for a weekend 
                barbecue in our outdoor grilling area or enjoy a quiet evening under the stars 
                in our beautifully landscaped garden. Our pet-friendly community ensures that 
                your furry friends are just as comfortable, with a dedicated pet park and
                 grooming station. Inside, each apartment features contemporary design and 
                 premium finishes, creating a sophisticated living space that you’ll love
                  coming home to. With a vibrant neighborhood offering top-tier dining, 
                  shopping, and entertainment just minutes away, Riverside Residences places
                   you at the center of it all. Discover the exceptional lifestyle that 
                   Riverside Residences has to offer – 
                schedule your tour today and start living the life you’ve always dreamed of.
                </p>
                </Card.Text>
            </Card.Body>

            </Card></Col>
            </Row>
            
        </Container>
        </>
    )
}


export default ThirdSec