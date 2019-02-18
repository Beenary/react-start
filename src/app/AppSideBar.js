import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'



export default class AppSideBar extends Component {
  
  render() {
      return (
        <div className="app-sidebar">
          <div className="app-sidebar-head">
            <div className="app-sidebar-head-logo">
              <LogoSvg />
            </div>
          </div>
          <div className="app-sidebar-menu">
          {
            /* linksConfig.map(item => {
              return(
                item.links.map(link => {
                  return(
                    <NavLink key={link.id} to={link.path} className="app-sidebar-menu-item">
                      <Icon type={link.icon} />
                    </NavLink>
                  )
                })
              )
            }) */
          }
          </div>
          <div className="app-sidebar-menu" style={{margin: '0 auto 10px'}}>
            <NavLink to="/settings" className="app-sidebar-menu-item">
              <Icon type="setting" theme="filled" />
            </NavLink>
          </div>
        </div>
      )
  }
}
