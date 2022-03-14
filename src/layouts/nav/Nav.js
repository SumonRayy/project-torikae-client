import React, {
    useState
} from 'react'

import './Nav.css'

const menuItemsArray = [
    'Exchange',
    'Purchase',
    'Sell'
]

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [menuItems, setMenuItems] = useState("Exchange");

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleMenuItemClick = (e) => {
        setMenuItems(e.target.innerText);
        setIsOpen(false);
    }

    return (
        <nav>

            <div className="App-brand">
                <img src='/logo.svg' alt='logo' />
                <h1>Torikae</h1>
            </div>

            <div className="nav-menu">
                <ul>
                    <li>
                        {
                            isOpen ? (
                                <div className='nav-dropdown'>
                                    <button className='nav-btn' onClick={toggle}>
                                        {menuItems}
                                        <i className="fa-solid fa-angle-up"></i>
                                    </button>
                                    <ul>
                                        {
                                            menuItemsArray.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {
                                                            item === menuItems ? (
                                                                <div className='nav-item active' onClick={handleMenuItemClick}>
                                                                    {item}
                                                                </div>
                                                            ) : (
                                                                <div className='nav-item' onClick={handleMenuItemClick}>
                                                                    {item}
                                                                </div>
                                                            )
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            ) : (
                                <button className='nav-btn mr' onClick={toggle}>
                                    {menuItems}
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                            )
                        }

                    </li>
                    <li>
                        <button className='nav-btn'>
                            Connect to Wallet
                        </button>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Nav