import Part from './Part'

const Content = ({ parts }) => {
	return (
		<>
			<ul>
				{
					parts.map(part => <Part part={part} key={part.id} />)
				}
			</ul>
		</>
	)
}

export default Content