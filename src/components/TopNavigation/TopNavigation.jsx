import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import blackLogo from '../../asset/images/whitecws.png';
import whiteLogo from '../../asset/images/blackcws.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/mediaQuery.css'
import { NavLink } from 'react-router-dom';


export class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [blackLogo],
            navBarBack: "navBackground",
            navBarItem: 'navItem',
            navVariant: 'dark',
            pageTitle: props.title
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navBarTitle: 'navTitleScroll', navBarLogo: [whiteLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant: 'light' })
        } else if (window.scrollY < 100) {
            this.setState({ navBarTitle: 'navTitle', navBarLogo: [blackLogo], navBarBack: 'navBackground', navBarItem: 'navItem', navVariant: 'dark' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>

<title>{this.state.pageTitle}</title>

                <Navbar className={this.state.navBarBack} collapseOnSelect expand="lg" fixed="top" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle} ><NavLink to="/"><img src={this.state.navBarLogo} alt="logo" /></NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/service">SERVICE</NavLink></Nav.Link>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
<Nav.Link><NavLink exact activeStyle={{color: '#ebfc02'}} className={this.state.navBarItem} to="/contact">CONTACT ME</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
