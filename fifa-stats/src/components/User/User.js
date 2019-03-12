import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  } from 'reactstrap';

 class User extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
        return (
            <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">FIFA STATS</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
            <Card>
                <CardBody>
                <CardTitle>User title</CardTitle>
                <CardSubtitle>User Favorite Team</CardSubtitle>
                </CardBody>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Create Team</CardLink>
                <CardLink href="#">My Teams</CardLink>
                </CardBody>
            </Card>
            </div>
        );
    }
};

export default User;