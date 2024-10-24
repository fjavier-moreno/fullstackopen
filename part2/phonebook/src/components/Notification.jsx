const Notification = ({ message }) => {
	if (message === null) {
		return null
	}

	const error = 'error'
	const success = 'success'
	const className = message.toLowerCase().includes(error) ? error : success

	return (
		<div className={className}>
			{message}
		</div>
	)
}

export default Notification