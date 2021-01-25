import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
	root: {
		primary: {
			main: '#000000',
		},
	},
	button: {
		background: 'hsl(148 90% 41%)',
		color: '#ffffff',
		'&:hover': {
			backgroundColor: 'hsl(148 90% 21%)',
		},
	},

	textField: {
		backgroundColor: 'inherit',
		border: 'none',
		borderRadius: '5px',
		marginBottom: '0.5rem',
	},

	input: {
		color: '#000000',
	},
	notchedOutline: {
		borderWidth: '1px',
		borderColor: '#000000',
	},
	focus: {
		color: 'red',
	},
});

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00D261',
			color: '#000000',
		},
		secondary: {
			// This is green.A700 as hex.
			main: '#000000',
		},
		overrides: {
			MuiButton: {
				raisedPrimary: {
					color: '#000000',
				},
			},
		},
	},
});

const Form = () => {
	const classes = useStyles();
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});
	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xjvpljkg',
			data: inputs,
		})
			.then((response) => {
				handleServerResponse(
					true,
					'Thank you, your message has been submitted.',
				);
			})
			.catch((error) => {
				handleServerResponse(false, error.response.data.error);
			});
	};
	return (
		<div className='form-container'>
			<h1>Connect With Us</h1>
			<h2>Form page</h2>
			<div className='contact-form'>
				<ThemeProvider theme={theme}>
					<form
						className={classes.root}
						noValidate
						autoComplete='off'
						onSubmit={handleOnSubmit}>
						<TextField
							label='Name'
							id='name'
							name='name'
							onChange={handleOnChange}
							required
							htmlFor='name'
							type='text'
							autoComplete='current-password'
							variant='outlined'
							value={inputs.name}
							className={classes.textField}
							color='secondary'
							autoFocus='true'
							size='large'
							InputLabelProps={{
								style: { color: '#000000' },
							}}
							InputProps={{
								classes: {
									root: classes.root,
									disabled: classes.disabled,
									notchedOutline: classes.notchedOutline,
									input: classes.input,
									focused: classes.focus,
								},
							}}
						/>
						<TextField
							id='email'
							htmlFor='email'
							label='Email'
							name='email'
							required
							onChange={handleOnChange}
							type='email'
							value={inputs.email}
							InputLabelProps={{
								style: { color: '#000000' },
							}}
							autoComplete='current-email'
							variant='outlined'
							className={classes.textField}
							color='secondary'
							size='large'
							InputProps={{
								classes: {
									root: classes.root,
									disabled: classes.disabled,
									notchedOutline: classes.notchedOutline,
									input: classes.input,
								},
							}}
						/>
						<TextField
							id='message'
							label='Message'
							htmlFor='message'
							onChange={handleOnChange}
							required
							value={inputs.message}
							InputLabelProps={{
								style: { color: '#000000', borderColor: '#000000' },
							}}
							type='text'
							multiline='true'
							rows='10'
							variant='outlined'
							className={classes.textField}
							color='secondary'
							size='large'
							InputProps={{
								classes: {
									root: classes.root,
									disabled: classes.disabled,
									notchedOutline: classes.notchedOutline,
									input: classes.input,
								},
							}}
						/>
						<h2 style={{ color: 'white' }}>
							{!status.submitting
								? !status.submitted
									? ''
									: 'Form Submitted!'
								: 'Form is currently Submitting!'}
						</h2>
						<Button
							className={classes.button}
							type='submit'
							disabled={status.submitting}
							variant='outlined'>
							{!status.submitting
								? !status.submitted
									? 'Submit'
									: 'Submitted'
								: 'Submitting...'}
						</Button>
					</form>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default Form;
