import React from 'react'
import * as mucalc_data from './mucalc_data.js'

const Header = () => {
  return (
    <header>
        <h1>MuCalc.js</h1>
        {mucalc_data.element[1]}
    </header>
  )
}

export default Header