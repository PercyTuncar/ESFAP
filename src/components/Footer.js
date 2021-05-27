import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Sígueme{' '}
      <a href="https://instagram.com/percy_tuncar/">@tuncardev</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Percy Tuncar</a>.
        </span>
      </div>
    </footer>
  </div>
)
