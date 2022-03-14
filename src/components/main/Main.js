import React, { useState } from 'react'

import './Main.css'

const tokenList = [
    'BTC',
    'ETH',
    'BNB',
    'USDT',
    'EOS',
    'XRP',
    'BCH',
    'LTC',
    'ADA',
    'XLM',
    'TRX',
    'NEO',
    'IOTA',
    'XMR',
    'DASH',
    'ETC',
]

function Main() {

    const [isLeftDropOpen, setIsLeftDropOpen] = useState(false);
    const [isRightDropOpen, setIsRightDropOpen] = useState(false);
    const [selectedTokenLeft, setSelectedTokenLeft] = useState('BTC');
    const [selectedTokenRight, setSelectedTokenRight] = useState('ETH');

    const toggleLeftDrop = () => {
        setIsLeftDropOpen(!isLeftDropOpen);
    }

    const toggleRightDrop = () => {
        setIsRightDropOpen(!isRightDropOpen);
    }

    const handleTokenClickLeft = (e) => {
        setSelectedTokenLeft(e.target.innerText);
        setIsLeftDropOpen(false);
    }

    const handleTokenClickRight = (e) => {
        setSelectedTokenRight(e.target.innerText);
        setIsRightDropOpen(false);
    }




    return (
        <main>
            <div className="main-container">
                <div className="main-left">
                    <div className='token'>
                        {
                            isLeftDropOpen ? (
                                <div className='token-dropdown'>
                                    <button className='token-btn mr' onClick={toggleLeftDrop}>
                                        {selectedTokenLeft}
                                        <i className="fa-solid fa-angle-up"></i>
                                    </button>
                                    <ul>
                                        {
                                            tokenList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {
                                                            item === selectedTokenLeft ? (
                                                                <div className='token-item active' onClick={handleTokenClickLeft}>
                                                                    {item}
                                                                </div>
                                                            ) : (
                                                                <div className='token-item' onClick={handleTokenClickLeft}>
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
                                <div className='token-dropdown'>
                                    <button className='token-btn' onClick={toggleLeftDrop}>
                                        {selectedTokenLeft}
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </div>
                            )

                        }
                    </div>
                    <div className='amount'>
                        <input type="number" placeholder="Amount" required />
                    </div>
                </div>
                <div className="main-center">
                    <button className="main-btn">
                        Exchange
                    </button>
                </div>
                <div className="main-right">
                    <div className='token'>
                        {
                            isRightDropOpen ? (
                                <div className='token-dropdown'>
                                    <button className='token-btn' onClick={toggleRightDrop}>
                                        {selectedTokenRight}
                                        <i className="fa-solid fa-angle-up"></i>
                                    </button>
                                    <ul>
                                        {
                                            tokenList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {
                                                            item === selectedTokenRight ? (
                                                                <div className='token-item active' onClick={handleTokenClickRight}>
                                                                    {item}
                                                                </div>
                                                            ) : (
                                                                <div className='token-item' onClick={handleTokenClickRight}>
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
                                <div className='token-dropdown'>
                                    <button className='token-btn' onClick={toggleRightDrop}>
                                        {selectedTokenRight}
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                </div>
                            )

                        }
                    </div>
                    <div className='amount'>
                        <input type="number" placeholder="Amount" readOnly />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main