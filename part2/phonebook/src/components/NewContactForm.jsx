const NewContactForm = ({ onSubmit, handleContact, handleNumber }) => {
	return (
		<>
			<form onSubmit={onSubmit}>
        <div>
          name: <input onChange={handleContact} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
		</>
	)
}

export default NewContactForm