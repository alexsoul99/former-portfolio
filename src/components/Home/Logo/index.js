import './styles.scss';
import LogoA from '../../../assets/images/logo_rotated.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={LogoA} alt="Logo A" className="solid-logo" />
        </div>
    )
}

export default Logo;