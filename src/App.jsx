import { useState } from '@lynx-js/react'

import './App.css'
import bg from './assets/bg.jpg'

export function App() {
  let [vpnstatus, setVpnStatus] = useState(false)
  let [vpntext, setVpnText] = useState('Off')

  const touch = () => { 
    if (vpnstatus) {
      setVpnStatus(false);
      setVpnText('Off');
    } else {
      setVpnStatus(true);
      setVpnText('On');
    }
  }
  return (
    <view>
        <text className='Title'>RibbitVPN</text>
        <view id="vpnbutton" className='vpnbutton' bindtap={touch}><text className="vpnstatustext">{vpntext}</text></view>
    </view>
  )
}