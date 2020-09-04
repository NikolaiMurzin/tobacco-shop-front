import React from 'react'
import './mainWrap.sass'
import './background.sass'
import './layout.sass'


const MainLayout = ({ children }) => { 
  return (
      <div className="mainWrap">
      <div className="background"></div>
          <main className="layout">{children}</main>
      </div>
  )
}

export default MainLayout
