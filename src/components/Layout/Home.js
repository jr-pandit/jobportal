import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div>
       <Header />
      <h1>
      <text><center>You can check recent jobs on this website.</center></text> 
      </h1>
      <div class="jumbotron">
        <Container fluid>
        <Button color="link"><Link to="/jobs"><strong>RECENT JOBS</strong></Link></Button>
        </Container>
       </div>
      </div>
    );
  }
}

export default Home;
