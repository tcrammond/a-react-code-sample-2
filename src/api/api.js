import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

/**
 * Retrives all servers
 */
export function getServers () {
  return axios.get(`${API_URL}/servers`)
    .then((response) => response.data);
}

/**
 * Updates the server with the given ID with any provided changes
 * @param {number} id Server ID
 * @param {Object} changes Key/value pairs of fields to update. Other fields will remain unchanged.
 */
export function updateServer (id, changes) {
  return axios
    .patch(`${API_URL}/servers/${id}`, changes)
    .then((response) => response.data);
}