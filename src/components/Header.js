import './style.css';
import heroImage from '../assets/images/heroImage.jpg'

function Header() {
    return (
        <header className="header">
            <h1 className="myName">Brian Autieri</h1>
            <img src={heroImage} alt="Hero Image" className="heroImage" />
        </header> 
    );
}

export default Header;