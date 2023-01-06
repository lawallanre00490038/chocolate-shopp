import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-coffee'>
            <h6>Types of Coffee</h6>
            <p><a  href="dummy">Instant Coffee</a></p>
            <p><a  href="dummy">Cold Brew</a></p>
            <p><a  href="dummy">Café au Lait</a></p>
            <p><a  href="dummy">Macchiato</a></p>
            <p><a  href="dummy">Americano</a></p>
            <p><a  href="dummy">Cortado</a></p>


            <div className='social-media'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
        </div>
        </div>

        <div className='footer-service'>
            <h6>Quick Links</h6>
            <p><a  href="dummy">Shipping</a></p>
            <p><a  href="dummy">Terms of Service</a></p>
            <p><a  href="dummy">Contact Us</a></p>
            <p><a  href="dummy">Privacy Policy</a></p>
        </div>

        <div className='footer-about'>
            <h6>Quick Links</h6>
            <p><a  href="dummy">About</a></p>
            <p><a  href="dummy">Help</a></p>
            <p><a  href="dummy">Shipping</a></p>
            <p><a  href="dummy">Affiliate</a></p>
        </div>

        
    </div>
  )
}

export default Footer