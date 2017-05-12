import React from 'react'
import './NewReservationView.scss'

export const NewReservationView = () => (
	<div>
		<table className="tablenew">
			<tr>
				<th style={{ width: '30%' }}>
					Product:
				</th>
				<th>
					Quantity:
				</th>
				<th>
					Amount (USD):
				</th>
				<th>
					Amount (CLP):
				</th>
				<th>
					Button:
				</th>
			</tr>
			<tr>
				<td>
					Cosa de la cosa
				</td>
				<td>
					5
				</td>
				<td>
					USD 18.00
				</td>
				<td>
					CLP 10.000
				</td>
				<td>
					<button className="btnnew">Details</button>
				</td>
			</tr>
			<tr>
				<td>
					Cosa de la cosa
				</td>
				<td>
					5
				</td>
				<td>
					USD 18.00
				</td>
				<td>
					CLP 10.000
				</td>
				<td>
					<button className="btnnew">Details</button>
				</td>
			</tr>
		</table>
	</div>
	)

export default NewReservationView