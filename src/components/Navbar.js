// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faTachometerAlt,
  faMoneyBillWave,
  faBullseye,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../context/ThemeContext';

const CustomNavbar = ({ onLogout }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="navbar px-4" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          SegFinanceira 💰
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-1" />
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/incomes">
            <FontAwesomeIcon icon={faMoneyBillWave} className="me-1" />
            Rendimentos
          </Nav.Link>
          <Nav.Link as={Link} to="/goals">
            <FontAwesomeIcon icon={faBullseye} className="me-1" />
            Metas
          </Nav.Link>
          <Nav.Link as={Link} to="/simulate">
            <FontAwesomeIcon icon={faFlask} className="me-1" />
            Simular
          </Nav.Link>
        </Nav>

        {/* Botões de tema e logout */}
        <div className="d-flex gap-2">
          <Button
            variant="light"
            size="sm"
            className="px-2"
            onClick={toggleTheme}
          >
            {isDark ? '🌞' : '🌙'}
          </Button>
          <Button
            variant="light"
            size="sm"
            onClick={onLogout}
            className="px-3"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
