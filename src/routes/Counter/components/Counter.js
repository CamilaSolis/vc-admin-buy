import React from 'react'
import PropTypes from 'prop-types'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h3>Counter</h3>
    <table>
      <tr>
        <th>
          Link:
        </th>
        <th>
          Link:
        </th>
        <th>
          Link:
        </th>
        <th>
          Link:
        </th>
      </tr>
    </table>
  </div>
)

Counter.propTypes = {
  counter     : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Counter
