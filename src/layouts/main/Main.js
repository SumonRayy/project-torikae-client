import React, { useState } from 'react'
import CircleButton from '../../components/buttons/button.circle';
import InputBox from '../../components/inputs/input.box';

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
    const [selectedTokenLeft, setSelectedTokenLeft] = useState('Select a Token');
    const [selectedTokenRight, setSelectedTokenRight] = useState('Select a Token');

    const [inputValueLeft, setInputValueLeft] = useState();
    const [inputValueRight, setInputValueRight] = useState();

    const [exchangeRate, setExchangeRate] = useState(1);

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
                                                            item === selectedTokenLeft || item === selectedTokenRight ? (
                                                                <div className='token-item active' >
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
                    <InputBox
                        type='number'
                        placeholder='Enter Amount'
                        readOnly={false}
                        value={inputValueLeft}
                        onChange={(e) => {
                            setInputValueLeft(e.target.value)
                            selectedTokenRight === 'Select a Token' ? setInputValueRight(e.target.value) : setInputValueRight(e.target.value * exchangeRate)
                        }}
                    />
                </div>
                <div className="main-center">
                    <CircleButton content={"Exchange"} />
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
                                    <ul id='flow-right'>
                                        {
                                            tokenList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {
                                                            item === selectedTokenLeft || item === selectedTokenRight ? (
                                                                <div className='token-item active' >
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
                    <InputBox
                        type='number'
                        placeholder='Recieve Amount'
                        readOnly={true}
                        value={inputValueRight}
                        onChange={() => {
                            setInputValueRight('')
                        }}
                    />
                </div>
            </div>
        </main>
    )
}

export default Main