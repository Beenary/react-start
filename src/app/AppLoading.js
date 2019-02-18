import React, { Component } from 'react'
import { Spin, Icon } from 'antd';

const LoadingIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />;

export default class AppLoading extends Component {
  render() {
    const { opacity } = this.props
    return (
      <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flex: '0 0 auto',  
          height: '100%',  
          opacity:  opacity !== undefined && '0.5' }}>
        <Spin indicator={LoadingIcon} />
      </div>
    )
  }
}
