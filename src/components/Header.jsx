import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div  className='w-100'>
 <Navbar  expand="lg" className="bg-warning text-white w-100">
 <Container>
      <Navbar expand="lg" className="bg-warning">
        <Container>
          <Navbar.Brand href="#">CRUD app</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </Navbar>

    </div>
  )
}

export default Header