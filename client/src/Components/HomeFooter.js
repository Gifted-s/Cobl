import React from 'react'
import {Col, Row} from 'reactstrap'
const HomeFooter = () => {
    return (
        <div className="footer">
            <Row>
                <Col sm={12} md={4}>
                    <h5 className="footer_name">Contacts</h5>
                    <div className="footer_item">
                        <span>Telephone 07031850081</span>
                    </div>
                    <div className="footer_item">
                        <span>Gmail Cobl@gmail.com</span>
                    </div>
                    <div className="footer_item">
                        <span>Twitter Cobl00</span>
                    </div>
                    <div className="footer_item">
                        <span>Facebook Cobl Enterprise </span>
                    </div>
                    
                </Col>
                <Col sm={12} md={4}>
                <h5 className="footer_name">Services</h5>
                    <div className="footer_item">
                        <span>Join Cobl </span>
                    </div>
                    <div className="footer_item">
                        <span>free E-purchase platform</span>
                    </div>
                    <div className="footer_item">
                        <span>Leadership mentoring</span>
                    </div>
                    <div className="footer_item">
                        <span>Create business network for you</span>
                    </div>
                
                </Col>
                <Col sm={12} md={4}>
                <h5 className="footer_name">About</h5>
                    <div className="footer_item">
                        <span>Developers</span>
                    </div>
                    <div className="footer_item">
                        <span>Meet our workers</span>
                    </div>
                    <div className="footer_item">
                        <span>Head Office</span>
                    </div>
                    <div className="footer_item">
                        <span>About Cobl  Enterprise</span>
                    </div>
                </Col>
            </Row>
            <p className="copy"><span>&copy;</span>copyright Gifted Cooperations 2020</p>
            
        </div>
    )
}

export default HomeFooter
