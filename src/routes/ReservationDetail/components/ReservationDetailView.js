import React from 'react'
import './ReservationDetailView.scss'
import FontIcon from 'react-toolbox/lib/font_icon'

export const ReservationDetailView = () => (
	<div>
		<h4>User information</h4>
		<div className="purchases box">
			<div className="info">
				<p><FontIcon className="icon" value={'face'} /> First Name:</p>
				<p><FontIcon className="icon" value={'perm_identity'} /> Last Name:</p>
				<p><FontIcon className="icon" value={'email'} /> Email:</p>
				<p><FontIcon className="icon" value={'home'} /> Adress Line:</p>
			</div>
			<div className="info">
				<p><FontIcon className="icon" value={'location_city'} /> City:</p>
				<p><FontIcon className="icon" value={'location_on'} /> Locality:</p>
				<p><FontIcon className="icon" value={'public'} /> Local Area 1:</p>
			</div>
		</div>
		<h4>Products</h4>
		<div className="product box">
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