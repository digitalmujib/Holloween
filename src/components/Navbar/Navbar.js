import React, { useEffect, useState } from 'react'
import "./navbar.css";

const Navbar = () => {

  function handleSearchClick() {
    const form = document.querySelector(".search-form");
    form.classList.toggle('active');

    window.onscroll = () => {
      form.classList.remove('active');
      
    }
  }

  function hanldeMenuClick() {
    const menu = document.querySelector(".nav-links");
    
    menu.classList.toggle('active');

    window.onscroll = () => {
      menu.classList.remove('active');
    }
  }


  window.onscroll = () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 0) {
      nav.classList.add("active")
    }
    else {
      nav.classList.remove("active")
    }

    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar .nav-links a');

    section.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');

          document.querySelector(".navbar .nav-links a[href*=" +id+ "]").classList.add('active')
        })
      }
    })
    
  }

  return (
    <nav className='navbar'>
      <a href='#' className='logo'> <i className='fas fa-ghost'></i>Holloween </a>

      <div className='nav-links'>
        <a href='#home' className="active">Home</a>
        <a href='#Products'>Products</a>
        <a href='#About'>About</a>
        <a href='#Arrivals'>Arrivals</a>
        <a href='#Contact'>Contact</a>
        <a href='#Blogs'>Blogs</a>
      </div>

      <div className='icons'>
        <div className="fas fa-bars menu-btn"
          onClick={hanldeMenuClick}
        ></div>
        <div className="fas fa-search"
          onClick={handleSearchClick}
        ></div>
        <a href='#' className="fas fa-shopping-cart"></a>
        <a href='#' className="fas fa-user"></a>
      </div>

      <form action='' className='search-form'>
        <input type="search" placeholder='Search Here...' id='input-box' />
        <label htmlFor="input-box" className="fas fa-search"></label>
      </form>
    </nav>
  )
}

export default Navbar;