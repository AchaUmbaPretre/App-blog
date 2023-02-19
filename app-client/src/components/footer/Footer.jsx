import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className="footer0">
        <div className="footer">
        <div className="footerTop container">
            <div className="footer1">
                <h3 className='contact-h3'>CONTACT</h3>
                <div className="footerTout">
                    <div className="contact-info">
                        <i className="fas fa-phone footerIcon"></i>
                        <div className="contact-sec">
                            <h4 >Appellez nous</h4>
                            <span className="contact-subtitle">+243824562776</span>
                        </div>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-envelope footerIcon"></i>
                        <div className="contact-sec">
                            <h3 >Email</h3>
                            <span className="contact-subtitle">achandambi@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-location-dot footerIcon"></i>
                        <div className="contact-sec">
                            <h4 >Location</h4>
                            <span className="contact-subtitle">RDC, Kinshasa C. Matete Q. Debonhomme 40B</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <h3 className='contact-h3'>BATISSEUR</h3>
                <div className="footerTout">
                    <Link to="" className="footerTxt">Presentation du projet</Link>
                    <Link to="" className="footerTxt">Objectif mensuel</Link>
                    <Link to="" className="footerTxt">Guide du batisseur</Link>
                    <Link to="" className="footerTxt">La boutique du batisseur</Link>
                </div>
            </div>
            <div className="footer3">
                <h3 className='contact-h3'>QUI SOMMES-NOUS ?</h3>
                <div className="footerTout">
                    <Link to="" className="footerTxt">Notre histoire</Link>
                    <Link to="" className="footerTxt">Notre vision</Link>
                    <Link to="" className="footerTxt">Notre mission</Link>
                    <Link to="" className="footerTxt">Nos departements</Link>
                    <Link to="" className="footerTxt">Nos programmes</Link>
                </div>
            </div>
            <div className="footer4">
                <h3 className='contact-h3'>NEWLETTER</h3>
                <div className="footerTout">
                    <p className="footerTxt">Abonnez-vous à notre newletter afin de recevoir les informations relatives à notre église</p>
                    <form action="" className="form">
                        <input type="text" placeholder="ecrire...." className="form-control" />
                        <input type="submit" value="suscribe" className="submit" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer