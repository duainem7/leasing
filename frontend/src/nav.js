import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'
import Image from 'react-bootstrap/Image';



// const [darkMode, setDarkMode] = useState(false)


function Navigation(){
  
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary nav" style={{backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '25px'}}>
        <Container>
          <Navbar.Brand href="#home">
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='#'> <Image className='logo' src={logo} />
              </Nav.Link>
              <Nav.Link href='#'>About</Nav.Link>
             
            </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )

}

export default Navigation