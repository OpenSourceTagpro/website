import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { match, when } from 'match-when'

import Login from './components/login/'
import Modal from '../modal/'
import Register from './components/register/'

import styles from './signup.sass'

class Signup extends PureComponent {
	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired
	}

	state = {
		activeTab: 'login'
	}

	displayLogin = () => {
		this.setState({ activeTab: 'login' })
	}

	displayRegister = () => {
		this.setState({ activeTab: 'register' })
	}

	render () {
		const content = match(this.state.activeTab, {
			[when('login')]: (
				<Login
					gotoRegister={this.displayRegister}
				/>
			),
			[when('register')]: (
				<Register
					gotoLogin={this.displayLogin}
				/>
			),
			[when()]: <h1>Oops</h1>
		})

		return (
			<Modal open={!this.props.isLoggedIn}>
				<div className={styles['wrapper']}>
					{content}
				</div>
			</Modal>
		)
	}
}

export default Signup
