import React from 'react'
import MDBFooter from 'react-bootstrap/ModalFooter'
import MDBContainer from 'react-bootstrap/Container'
import Photo from './image/soi.png'

class Footer extends React.Component {
    render() {
        return (
            <div>
                    <img 
                        width={100}
                        height={100}
                        src={Photo}
                        className="img-footer"
                        alt="Generic placeholder"
                    />
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/MrHide06"> MrHide06 </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        )
    }
}

export default Footer