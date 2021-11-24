import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Report from "./Report";
import Grouping from "./grouping";

function Navigasi() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Belajar-React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Report</Nav.Link>
                <Nav.Link href="/csv">Grouping</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Report />} />
          <Route exact path="/csv" element={<Grouping />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Report />
    </div>
  );
}
function CSV() {
  return (
    <div>
      <Grouping />
    </div>
  );
}
export default Navigasi;
