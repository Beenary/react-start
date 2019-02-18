import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Button, Input } from 'antd'
import { handleSetAuth } from '../auth/AuthActions'
import { handleSetUser } from '../user/UserActions'
import { MainLogo } from '../icons/MainLogo'
import { connect } from 'react-redux';

const FormItem = Form.Item

class LoginForm extends Component {

  state = {
    loading: false,
    iconLoading: false,
    passType: 'password',
    error: false
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    this.props.form.validateFields((err, {email, password}) => {
      if(!err){
        this.setState({loading: true})
        return dispatch(handleSetAuth(email, password))
          .then(cookie => 
            dispatch(handleSetUser(cookie))
          )
          .catch((error) => this.setState({loading: false, iconLoading: false, error: true}))
      }
    })
  }

  handleShowPassword = () => {
    this.setState({passType: this.state.passType === 'password' ? 'text': 'password'})
  }


  render() {

    const { getFieldDecorator } = this.props.form
    const {  loading, iconLoading, error, passType} = this.state

    return (
      <div className="auth-login">
        <div className="auth-login-header">
          <div className="auth-login-header-logo">
           <MainLogo />
          </div>
        </div>
        <Form className="auth-login-form" onSubmit={this.handleSubmit}>

          {error && <p className="auth-login-form-error">El correo y la contraseña no coinciden.</p>}

          <FormItem>
          {getFieldDecorator('email', {
            rules: [ 
              { type: 'email', message: 'Ingrese un E-mail válido'}, 
              {required: true, message: 'Por favor ingrese su E-mail',}
            ]
          })(
            <Input 
              size="large"
              placeholder="Email"
              type="email"
            />
          )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {required: true, message: 'Por favor ingrese su password',}
              ]
            })(
              <Input
                size="large"
                suffix={<Icon type="eye" theme="filled" style={{ color: '#97969C)' }}  onClick={this.handleShowPassword}/>}  
                placeholder="Contraseña"
                type={passType}
              />
            )}
          </FormItem>

          <FormItem>
            <Button 
              size="large"
              type="primary" 
              htmlType="submit" 
              className="auth-login-form-button btn-rounded btn-shadow"
              loading={loading}>
                {loading ? '' : 'Entrar'} 
            </Button>
          </FormItem>
          <FormItem className="auth-login-form-forgot">
            <Link to="/restore">Olvidé mi contraseña</Link>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const AuthLogin = Form.create()(LoginForm)
export default connect()(AuthLogin)