"use client"
import {useState, useEffect} from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import { formatBalance, formatChainAsNum } from '../../utils/formatMetamask'
interface Props {
  className? : string
}

export default function ButtonMetamask({className} : Props ) {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [], balance: "", chainId: "" }           
  const [wallet, setWallet] = useState(initialState)  
  useEffect(() => {
    const refreshAccounts = (accounts: any) => {                
    if (accounts.length > 0) {                                
      updateWallet(accounts)                                 
    } else {                                                  
      // if length 0, user is disconnected                    
      setWallet(initialState)                                 
    }                                                         
  }     

  const refreshChain = (chainId: any) => {               
  setWallet((wallet) => ({ ...wallet, chainId }))     
}   

    const getProvider = async () => {
      const provider = await detectEthereumProvider({silent:true})
      setHasProvider(Boolean(provider))
      if (provider) {                                           
      const accounts = await window.ethereum.request(         
        { method: 'eth_accounts' }                          
      )                                                    
      refreshAccounts(accounts)                              
      window.ethereum.on('accountsChanged', refreshAccounts)  
      window.ethereum.on("chainChanged", refreshChain)
    }   
    }
    getProvider()
    return () => {                                              
    window.ethereum?.removeListener('accountsChanged', refreshAccounts)
    window.ethereum?.removeListener("chainChanged", refreshChain)
  }    
  
  }, [])
  const updateWallet = async (accounts:any) => {
    const balance = formatBalance(await window.ethereum!.request({ 
      method: "eth_getBalance",                                      
      params: [accounts[0], "latest"],                               
    }))                                                            
    const chainId = await window.ethereum!.request({                  
      method: "eth_chainId",                                        
    })                                                                
    setWallet({ accounts, balance, chainId })                       
  }                                                     

const handleConnect = async () => {                
  let accounts = await window.ethereum.request({   
    method: "eth_requestAccounts",                 
  })                                               
  updateWallet(accounts)     
  await fetch("/api/auth/crypto/generateNonce", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wallet.accounts[0]),
  });
}   
  return (
    <div>
      {/* Si account es undefined, signifique no tiene ninguna wallet y mostramos para que se conecte a metamask */}
      {/* el p dice wallet pero si quiero mostrar sus datos de accounts, balance y chainId refrescanso la pagina, me lo muestra */}
      {hasProvider && wallet.accounts[0] === undefined || wallet.accounts.length < 0 ? <button className={className} onClick={handleConnect} >Connect Metamask</button> : <p>wallet</p>}
    </div>
  )
}
