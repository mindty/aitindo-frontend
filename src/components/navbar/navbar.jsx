import { Navbar, Nav, Container } from "react-bootstrap";
import { TiContacts } from "react-icons/ti";
import { GiRoundBottomFlask, GiNotebook } from "react-icons/gi";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect className="navbar d-flex" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/product">
                {" "}
                <GiRoundBottomFlask className="me-2" /> Lihat Produk
              </Nav.Link>
              <Nav.Link href="/about">
                <GiNotebook className="me-2" />
                Tentang OBH COMBI
              </Nav.Link>
              <Nav.Link href="/contact">
                {" "}
                <TiContacts className="me-2" /> Kontak
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
