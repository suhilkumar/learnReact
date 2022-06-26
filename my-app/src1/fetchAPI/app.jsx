import React, { Component } from 'react'
import GetRequests from './GetRequestHook'
import GetRequest from './GetRequest'
import GetRequestAsync from './asyncGetRequest'

export default class App extends Component {
  render() {
    return (
      <div>
        <GetRequestAsync />
      </div>
    )
  }
}
