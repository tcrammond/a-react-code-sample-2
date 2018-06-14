import React from 'react'

import PowerToggle from '../common/PowerToggle/PowerToggle'
import Icon from '../common/Icon/Icon'

/**
 * Displays a single server
 */
export default function Server ({ server, onPowerToggle }) {
  // Sort discs by order property
  const discs = (server.discs || []).sort((a, b) => a.order - b.order)

  return (
    <div className={`Server card ${!server.power_on ? 'Server--off' : 'Server--on'}`}>

      <div className='Server__header'>
        {server.name || 'N/A'} 

        <div className="Server__header--right">
          <PowerToggle on={server.power_on} onClick={() => onPowerToggle(server)} />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <ServerAttributes {...server} />
        </div>

        <div className="column">
          <ServerDisks discs={discs} />
        </div>
      </div>

    </div>
  )
}

function ServerAttributes ({ cores = 0, memory = 0 }) {
  return (
    <div className="Server__attributes">
      <div>
        <Icon icon='fas fa-microchip' />
        CPUs: {cores}
      </div>

      <div>
        <Icon icon='fas fa-memory' />
         RAM: {memory}
      </div>
    
    </div>
  )
}

// Renders server's disks, with icons/titles identifying disk type.
function ServerDisks ({ discs }) {

  const title = discs.length ? `Disks (${discs.length}):` : 'No disks on this server.'
  return (
    <div className="Server__disks">
      <h4>{title}</h4>

      <div className="Server__disksList">
        {discs.map((disc) => <Disk {...disc} key={`disc_${disc.id}`} />)}
      </div>
    
    </div>
  )
}

function Disk ({ grade, size }) {
  const icon = grade === 'ssd' ? 'fas fa-hdd' : 'far fa-hdd'

  return (
    <div className='Disk'>
      <Icon icon={icon} />
      {size}
    </div>
  )
}