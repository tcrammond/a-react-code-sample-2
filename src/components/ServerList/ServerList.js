import React, { PureComponent } from 'react'

import Server from './Server'

/**
 * Renders a list of the given servers
 */
class ServerList extends PureComponent {
  
  render () {
    const { servers = [], onPowerToggle } = this.props

    return (
      <div className='ServerList'>
        <h2 className='subtitle'>My Servers</h2>

        {servers.sort((a, b) => !a.power_on).map((server) => 
          <Server
            server={server}
            onPowerToggle={onPowerToggle}
            key={`server_${server.id}`}
          />
        )}
      </div>
    )
  }

}

export default ServerList