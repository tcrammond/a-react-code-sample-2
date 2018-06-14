import React, { Component } from 'react'

import style from './app.scss'
import * as api from './api/api'

import ServerList from './components/ServerList/ServerList'

const initialState = {
  servers: []
}

/**
 * Main app container. 
 * Passes state and actions down the server list tree.
 */
class App extends Component {

  // we'll use app state as a store for this demo
  state = initialState

  componentDidMount () {
    // Load user servers on start
    this.fetchServers()
  }

  // Fetches servers from API and updates internal state
  fetchServers () {
    api.getServers()
      .then((servers) => {
        this.setState({servers})
      })
      .catch(console.error)
  }

  // Toggles the power of the given server
  // in reality this would be a store action or in async middleware etc.
  togglePower = (server) => {
    if (!server || !server.id) {
      console.error('Invalid server')
      return
    }

    api
      .updateServer(server.id, { power_on: !server.power_on })
      // Re-fetch servers to update store.
      // Since the PATCH endpoint returns the updated server data, in a real app we could update the store with that.
      .then(this.fetchServers())
      .catch(console.error)
  }

  render() {
    return (
      <div className="company-app">
        <div className="company-container container">
          <ServerList servers={this.state.servers} onPowerToggle={this.togglePower} />
        </div>
      </div>
    )
  }
}

export default App
