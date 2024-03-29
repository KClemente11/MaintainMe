import { Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import PrivateRoutes from "./PrivateRoutes"

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>MaintainMe</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Routes>
        <Route exact path="/" element={<Account/>} />
        <Route exact path="/free" element={<FreeComponent/>} />
        <Route element={<PrivateRoutes/>}> 
          <Route path="/auth" element={<AuthComponent/>}/>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;