import Link from '../../components/Link'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Form, Formik, Field } from 'formik';
import { Avatar, Col, Divider, Dropdown } from "antd";
import LanguageDropdown from '../../components/LanguageDropdown'


export default function NavBar() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const toggleMenu = () => { setShowMenu(!showMenu) }
    const router = useRouter()
    const { pathname, asPath, query } = router

    useEffect(() => {
        
    }, [])
      
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white" id="navbar-main">
            <div className="container-fluid py-1">
                <Link className="navbar-brand p-0 me-auto" href="/">
                    <img className="img-fluid logo-img" src="./assets/images/logo.png" alt={''} style={{maxWidth: 182}}/>
                </Link>
                <div className="d-flex ">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" 
                        aria-controls="navbarCollapse" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse order-last order-md-first ${showMenu === true ? 'show' : ''}`} id="navbarCollapse">
                        <ul className="navbar-nav mb-2 mb-md-0">
                        <div
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'center',
                    }}
                  >
                    <LanguageDropdown />
                  </div>
                            <li className="nav-item">
                                <a className="nav-link" href={pathname == '/' || pathname == '' ? `#scrollspyFeature` : `/#scrollspyFeature`} onClick={toggleMenu}>คุณสมบัติ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={pathname == '/' || pathname == '' ? `#scrollspyProduct` : `/#scrollspyProduct`} onClick={toggleMenu}>สินค้า</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={pathname == '/' || pathname == '' ? `#scrollspyClient` : `/#scrollspyClient`} onClick={toggleMenu}>ลูกค้า</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={pathname == '/' || pathname == '' ? `#scrollspyContact` : `/#scrollspyContact`} onClick={toggleMenu}>ติดต่อเรา</a>
                            </li>
                        </ul>
                    </div>
                    <div className="order-first order-md-last">
                        <Link href="https://play.google.com/store/apps/details?id=com.ft.pos.mobile" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-shadow">ใช้งานฟรี!</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}