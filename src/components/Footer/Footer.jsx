import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
   <footer className="freshcart-footer container-fluid py-4">
  <div className="app-download-section mb-4 text-center text-md-start">
    <h3>Get the FreshCart app</h3>
    <p>We will send you a link, open it on your phone to download the app.</p>
    <div className="email-form d-flex gap-2 justify-content-center justify-content-md-start">
      <input type="email" placeholder="Email..." className="form-control" />
      <button className="btn btn-primary">Share</button>
    </div>
  </div>

  <hr />

  <div className="partners-delivery-section d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
    <div className="payment-partners mb-3 mb-md-0 d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
      <h4 className="me-3">Payment partners</h4>
      <i className="fa-brands fa-cc-mastercard fa-2x"></i>
      <i className="fa-brands fa-cc-visa fa-2x"></i>
      <i className="fa-brands fa-cc-paypal fa-2x"></i>
    </div>

    <div className="delivery-links d-flex align-items-center gap-3 justify-content-center justify-content-md-end">
      <h4 className="me-2">Get deliveries with FreshCart</h4>
      <a href="#"><i className="fa-brands fa-app-store-ios fa-2x"></i></a>
      <a href="#"><i className="fa-brands fa-google-play fa-2x"></i></a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
