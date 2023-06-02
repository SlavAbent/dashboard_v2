import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const toastSuccess = toast('Success', {
	position: 'top-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark',
})

const toastError = toast('Error', {
	position: 'top-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark',
})
const Toasts = () => {
	return (
		<ToastContainer
			position='top-center'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
		/>
	)
}

export default Toasts
