import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='expenses'>Expenses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='settings'>Settings</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar
