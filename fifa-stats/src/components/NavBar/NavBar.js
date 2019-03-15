import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Fifabar = styled(Navbar)`

color: blue;

`

 class NavBar extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false,
            log: false,
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <header>
              {/* {this.props.loggedIn ? !this.state.log : null } */}
              <Fifabar  color="light" light expand="md">
                <NavbarBrand href="/user">FIFA STATS</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
               
                <Collapse isOpen={this.state.isOpen} navbar>
                {this.props.token ? <div>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#">Default Teams</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Player List</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Messages
                        </DropdownItem>
                        <DropdownItem>
                          Settings
                        </DropdownItem>
                        <DropdownItem divider />
                        <button>
                          Log Out
                        </button>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  </div> : null }
                </Collapse>
              </Fifabar>
              
            </header> 
          );
        }
      }

const mapStateToProps = state => ({
        loggedIn: state.loginReducer.loggedIn,
        token: state.loginReducer.token
      })

export default connect(
  mapStateToProps,
  {}
)(NavBar);