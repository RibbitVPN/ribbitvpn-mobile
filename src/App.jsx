import { useState } from '@lynx-js/react'

import './App.css'
import bg from './assets/bg.jpg'

export function App() {
  let [vpnstatus, setVpnStatus] = useState(false)
  let [vpntext, setVpnText] = useState('Off')
  let [vpnbuttonstatus, setVpnButtonStatus] = useState('vpnbutton-off')

  const touch = () => { 
    if (vpnstatus) {
      setVpnStatus(false);
      setVpnText('Off');
      setVpnButtonStatus('vpnbutton-off');
    } else {
      setVpnStatus(true);
      setVpnText('On');
      setVpnButtonStatus('vpnbutton-on');
    }
  }
  return (
    <view>
        <text className='Title'>RibbitVPN</text>
        <view id="vpnbutton" className={vpnbuttonstatus} bindtap={touch}><text className="vpnstatustext">{vpntext}</text></view>
    </view>
  )
}