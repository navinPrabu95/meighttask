import React,{useState} from 'react'
import './NavBar.css'
import { ImMenu } from 'react-icons/im'
import { useNavigate, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown,Offcanvas,Button } from 'react-bootstrap';



const NavBar = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const Navigate = useNavigate()


    const setLogOut = () => {
        localStorage.clear()
        Navigate('/signin')
    }

    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark" style={{ height: '100px',background:'black' }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Company Info" id="collasible-nav-dropdown">
                            <NavDropdown.Item >
                                <div className='dropdown_list'>
                                    <ul>
                                        <li><span>Company :</span><p> M8 IT Solutions Pvt Ltd</p></li>
                                        <li><span>Address :</span><p> 3rd Floor, Vue Grande, 339, Chinnaswamy Road,<br></br> Siddhapudur, Balasundaram Layout, B.K.R Nagar, Coimbatore, Tamil Nadu 641044</p></li>
                                        <li><span>Phone :</span><p> 1231231233</p></li>
                                        <li><span>Email :</span><p>abc@gmail.com</p></li>
                                    </ul>
                                </div>
                            </NavDropdown.Item>
                            <div className='sidenav'>
                                <Button variant="primary" onClick={handleShow}>
                                    Launch
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} className='sidenav_main'>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className='sidenav_list'>
                                            <a href="/counter">Counter</a>
                                            <a href="/sample">Sample</a>
                                            <a href="/signin">SignIn</a>
                                            <a href="/">SignUp</a>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </NavDropdown>
                    </Nav>
                    <Nav className="nav-auto">
                        <Nav.Link href="/counter">Counter</Nav.Link>
                        <Nav.Link href="/sample">Sample</Nav.Link>
                        <Nav.Link href="/signin">SignIn</Nav.Link>
                        <Nav.Link href="/">SignUp</Nav.Link>
                        <Nav.Link onClick={setLogOut}>SignOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar