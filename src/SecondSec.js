import React from "react"
import './App.css';
import image_two from "./images/im2.jpg"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';








function SecondSec(){
    return(
        <>
        <Container className="firstcont"  fluid="md" style={{margin: "0", padding: "0"}}>
        <Row fluid style={{display: "flex", justifyContent: "space-between", margin: "0", padding: "0"}}><Col md style={{margin: "0", padding: "0"}}><Card className="cardseccards" style={{border: "none", backgroundColor: "skyblue", borderRadius: "0", margin:"0", padding: "0"}}>
            <Card.Body>
                <Card.Title>
                <h1>

                Welcome to Luxury Living at
                 Riverside Residences
                 </h1>
                </Card.Title>
                <Card.Text>
                <p>
                Experience the ultimate in modern living at Riverside Residences. Our luxurious 
                apartments are designed with your comfort and convenience in mind, 
                featuring spacious layouts, high-end finishes, and breathtaking river
                 views. Relax in our beautifully landscaped courtyard, take a dip in the
                  resort-style pool, or work out in our fully equipped fitness center. 
                  Our community also boasts a stylish resident lounge, perfect for 
                  socializing or unwinding after a long day. Enjoy the peace of mind that 
                  comes with 24/7 security and responsive maintenance services. Situated in a 
                  prime location, Riverside Residences offers easy access to shopping, dining,
                   and recreational activities. Come discover the unparalleled lifestyle that 
                awaits you at Riverside Residences – schedule your visit today!
                </p>
                </Card.Text>
            </Card.Body>

            </Card></Col>
            <Col md style={{margin: "0", padding: "0"}}>
            <div className="firstsecpic" style={{ margin: "0", padding: "0", overflow: "hidden"}}>
            <Image src={image_two} />
            </div>
            </Col>
            </Row>
            
        </Container>
        </>
    )
}




export default SecondSec