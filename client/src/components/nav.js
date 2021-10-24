import React, { Component } from 'react'
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
class MobileMenu extends Component {
  state = { isOpen: false }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    return (
      <div className="mobile-wrapper">
        <div className="mobile-menu">
          <Container className="pos-ref">
            <i
              className="fas fa-times mobile-menu__close-bt"
              onClick={this.props.hideNav}
            />
          </Container>
        </div>
        <Nav vertical className={'mobile-nav'}>
          <NavItem className="nav-item-m">
            <NavLink>home</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>about</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>features</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>screenshots</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>team</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>pricing</NavLink>
          </NavItem>
          <NavItem>
            <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
              <DropdownToggle className="drop-item" caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>dropdown-1</DropdownItem>
                <DropdownItem>dropdown-2</DropdownItem>
                <DropdownItem>dropdown-3</DropdownItem>
                <DropdownItem>dropdown-4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>blog</NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink>contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default class extends Component {
  dropNav = React.createRef()

  hamButton = React.createRef()

  over = () => {
    this.dropNav.current.style.display = 'block'
    this.opacityTiemOut = setTimeout(() => {
      this.dropNav.current.style.opacity = '1'
    })
  }
  out = () => {
    this.dropNav.current.style.transition = 'all .5s 1s'
    this.dropNav.current.style.opacity = '0'
  }
  onHide = () => {
    if (this.dropNav.current.style.opacity === '1') return
    this.dropNav.current.style.display = 'none'
    this.dropNav.current.style.transition = 'all .5s'
  }

  hideNav = e => {
    document.body.style.overflow = 'visible'
    this.mobileMenu.style.display = 'none'
    this.hamButton.style.display = ''
    this.mobileNav.style.transform = `translateX(-100%)`
  }

  showNav = e => {
    e.preventDefault()
    document.body.style.overflow = 'hidden'
    this.hamButton.style.display = 'none'
    this.menuWrapper.style.display = 'block'
    this.mobileMenu.style.display = 'block'
    setTimeout(() => {
      this.mobileNav.style.transform = 'translateX(0px)'
    }, 200)
  }
  fixedNav() {
    const nav = document.querySelector('.navi-menu')
    const navHeigth = parseInt(window.getComputedStyle(nav).height, 10)
    const scrollEl = document.scrollingElement
    if (scrollEl.scrollTop > navHeigth) {
      nav.style.position = 'fixed'
      nav.classList.add('scroll-nav')
    } else {
      nav.style.position = 'static'
      nav.classList.remove('scroll-nav')
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.fixedNav)
    this.menuWrapper = document.querySelector('.mobile-wrapper')
    this.mobileMenu = document.querySelector('.mobile-menu')
    this.mobileNav = document.querySelector('.mobile-nav')
    this.hamButton = document.querySelector('.ham')
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixedNav)
  }
  render() {
    return (
      <div className="navi-menu">
        <Container>
          <MobileMenu hideNav={this.hideNav} />

          <Nav className="nav-n">
            <NavItem className="nav-item-n logo">
              <NavLink href="#">eStarup</NavLink>
            </NavItem>
            <NavItem className="nav-item-n ham" onClick={this.showNav}>
              <NavLink href="">
                <i className="fas fa-bars" />
              </NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">home</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">about</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">features</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">screenshots</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">team</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">pricing</NavLink>
            </NavItem>
            <div
              className="drop"
              onMouseOver={this.over}
              onMouseOut={this.out}
              onTransitionEnd={this.onHide}
            >
              <NavItem>
                <NavLink href="#" className="nav-item-n caret">
                  dropdown
              </NavLink>
              </NavItem>
              <div className="drop__item" ref={this.dropNav}>
                <Nav vertical>
                  <NavItem className="nav-item-n">
                    <NavLink href="#">dropdown-1</NavLink>
                  </NavItem>
                  <NavItem className="nav-item-n">
                    <NavLink href="#">dropdown-2</NavLink>
                  </NavItem>
                  <NavItem className="nav-item-n">
                    <NavLink href="#">dropdown-3</NavLink>
                  </NavItem>
                  <NavItem className="nav-item-n">
                    <NavLink href="#">dropdown-4</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>

            <NavItem className="nav-item-n">
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem className="nav-item-n">
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </div>
      
        
      
    )
  }
}
