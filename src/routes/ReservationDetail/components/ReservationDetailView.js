import React from 'react'
import './ReservationDetailView.scss'

export const ReservationDetailView = () => (
	<div>
		<h4>User information</h4>
		<div className="purchases">
			<div className="info">
				<p>First Name:</p>
				<p>Last Name:</p>
				<p>Email:</p>
			</div>
			<div className="info">
				<p>Adress Line:</p>
				<p>City:</p>
				<p>Locality:</p>
				<p>Local Area 1:</p>
			</div>
		</div>
		<h4>Products</h4>
		<div className="product">
			<table>
					<td className="image">
						<img
          				style={{width: 80, height: 80}}
         				src='https://ae01.alicdn.com/kf/HTB1Q09CNVXXXXXyXpXXq6xXFXXXA/Bgln-8-Unids-set-Talladores-de-Cera-Cer%C3%A1mica-De-Arcilla-Shapers-DIY-Arcilla-Polim%C3%A9rica-Herramientas-Craft.jpg_640x640.jpg' />
					</td>
					<td className="name">Bgln 8 Unids/set Talladores de Cera Cerámica De Arcilla Shapers DIY Arcilla Polimérica Herramientas Craft Hobby Herramientas de Escultura del Artista</td>
					<td className="number">3</td>
					<td className="among">USD $3.19</td>
					<td className="among">CLP $2.000</td>
					<td className="commerce">Aliexpress</td>
					<td className="button"><button>Buy</button></td>
			</table>
		</div>
	</div>
	)

export default ReservationDetailView