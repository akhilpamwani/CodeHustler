import React,{useState} from 'react'
import LightMode from './Light'
import DarktMode from './Dark'
const Mode = () => {
    const [ChangeMode, setChangeMode] = useState(true)
  return (
    <>
{ChangeMode ?
    <LightMode changeSvg={() => setChangeMode(!ChangeMode)}/>
    :
        <DarktMode changeSvg={() => setChangeMode(!ChangeMode)} />
      }
      
      </>
      )
}

export default Mode