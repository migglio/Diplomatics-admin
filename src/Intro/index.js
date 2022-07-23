import React, { useEffect, useState } from "react";
import "./Intro.css";
import contractInterface from '../contract-abi.json';
import { useAccount, useContractWrite } from "wagmi";
import notify from "bnc-notify";

function Intro () {
    const [address, setAddress] = useState('')
    const [ipfsUri, setIpfsUri] = useState('')
    const { isDisconnected  } = useAccount()
    console.log({isDisconnected})
    const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    } = useContractWrite({
        addressOrName: '0x746b7d4c3ba8ff0b930f894e7416caf802cf20ee',
        contractInterface: contractInterface,
        functionName: 'createDiplomat',
        args: [ ipfsUri, address] 
    });

    useEffect(() => {
    console.log({mintData})
    /* const { emitter } = [] //Nice to have
    if(mintData)
        emitter = notify.hash(mintData.hash) */
    }, [mintData]);

    return (
        <section className="Intro">
            <h3 className="IntroTitle">Admin Board </h3>
            <div>
                <div style={{color: 'white'}}>
                    Address: 
                </div>
                <input onChange={(e)=>setAddress(e.target.value)} width='300px' style={{marginBottom: '8px', width:'300px', textColor: 'white'}}/>
                <br/>
                <div style={{color: 'white'}}>
                    IPFS Uri
                </div>
                <input onChange={(e)=>setIpfsUri(e.target.value)} width='300px' style={{marginBottom: '8px',width:'300px'}}/>
            </div>
            <button disabled={!address || !ipfsUri || isDisconnected} style={{width: '300px', marginTop: '12px'}} onClick={()=>mint()} >Grant Access</button> 
        </section>
    );
}

export { Intro };