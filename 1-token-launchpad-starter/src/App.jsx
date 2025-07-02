import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'

// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    
    <TokenLaunchpad></TokenLaunchpad>
          

  )
}

export default App
