import logoImg from '../../assets/logo.svg'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import './styles.scss'
export default function Footer(){
    return (
        <footer className="footer">
            <img src={logoImg} className='logo'/>

            <ul className='social-media'>
                <li><a href="#"> <AiFillFacebook size={28}/></a></li>
                <li><a href="#"> <AiFillInstagram size={28}/></a></li>
                <li><a href="#"> <AiFillYoutube size={28}/></a></li>
            </ul>
        </footer>
    );
}