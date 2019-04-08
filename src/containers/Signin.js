import React from 'react'
import Header from '../components/Header.js';
import styled from 'styled-components';

const Form = styled.form`
  padding-top: 4em;
  padding-bottom: 6em;
`

const Alert = styled.div`
  margin-top: 4em;
`

export default () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-4">
          <Alert className="alert alert-secondary" role="alert">
            You need to sign in to access this resource.
          </Alert>
          <Form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary"> Sign in </button>
          </Form>
        </div>
      </div>
    </div>
  </div>
)
