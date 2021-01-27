import React, { useState, useEffect } from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { FormInput } from './index';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';

const AddressForm = ({ checkoutToken, next }) => {
	const [shippingCountry, setShippingCountry] = useState('');
	const [shippingSubDivsions, setShippingSubDivivisions] = useState([]);
	const [shippingSubDivsion, setShippingSubDivivision] = useState('');
	const [shippingOption, setShippingOption] = useState('');
	const methods = useForm();
	const fetchShippingCountries = async (checkoutTokenId) => {
		try {
			const { countries } = await commerce.services.localeListShippingCountries(
				checkoutTokenId,
			);
			setShippingCountry(Object.keys(countries)[0]);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchShippingOptions = async () => {
		try {
			const option = checkoutToken.shipping_methods[0].id;
			setShippingOption(option);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchShippingSubDivisions = async (countryCode) => {
		const { subdivisions } = await commerce.services.localeListSubdivisions(
			countryCode,
		);

		setShippingSubDivivisions(subdivisions);
		setShippingSubDivivision(Object.keys(subdivisions)[0]);
	};

	//shipping sub div is an obj needs to be an array

	const subdivisions = Object.entries(shippingSubDivsions).map(
		([countryCode, countryName]) => ({
			id: countryCode,
			label: countryName,
		}),
	);

	useEffect(() => {
		try {
			fetchShippingCountries(checkoutToken.id);
		} catch (e) {
			console.log(e);
		}
	}, []);

	useEffect(() => {
		if (shippingCountry) {
			fetchShippingSubDivisions(shippingCountry);
		}
	}, [shippingCountry]);

	useEffect(() => {
		fetchShippingOptions();
	}, [shippingCountry]);

	return (
		<div>
			<Typography variant='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) =>
						next({
							...data,
							shippingCountry,
							shippingSubDivsion,
							shippingOption,
						}),
					)}>
					<Grid container spacing={3}>
						<FormInput name='firstName' label='First Name' />
						<FormInput name='lastName' label='Last Name' />
						<FormInput name='address1' label='Address' />
						<FormInput name='email' label='Email' />
						<FormInput name='city' label='City/Town' />
						<FormInput name='zip' label='ZIP / Postal Code' />
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping County/Town</InputLabel>
							<Select
								value={shippingSubDivsion}
								fullWidth
								onChange={(e) => setShippingSubDivivision(e.target.value)}>
								{subdivisions.map((area) => (
									<MenuItem key={area.id} value={area.id}>
										{area.label}
									</MenuItem>
								))}
							</Select>
						</Grid>
					</Grid>
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button component={Link} to='/cart' variant='outlined'>
							Back to Cart
						</Button>
						<Button variant='contained' type='submit' color='primary'>
							Next
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default AddressForm;
