import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Features</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">© 2023 <b>QuickEats</b>, Inc</p>
    <div className='d-flex mx-auto'>
    <ul className="nav col-md-4 mx-auto list-unstyled d-flex justify-content-between">
      <li className="ms-3 fs-3"><Link className="text-muted" to="https://www.instagram.com/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link></li>
      <li className="ms-3 fs-3"><Link className="text-muted" to="https://www.facebook.com/" target={'_blank'}><i className="fa-brands fa-square-facebook"></i></Link></li>
      <li className="ms-3 fs-3"><Link className="text-muted" to="https://web.whatsapp.com/" target={'_blank'}><i className="fa-brands fa-whatsapp"></i></Link></li>
    </ul>
    </div>
  </footer>
</div>
    </div>
  )
}
