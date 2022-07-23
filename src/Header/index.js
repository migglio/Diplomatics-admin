import './Header.css';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header () {
    return (
        <section className='HeaderContainer'>
            <div className='connect-wallet-button'>
                <ConnectButton  showBalance={{ smallScreen: false }}/>
            </div>
        </section>
    );
}

export { Header };