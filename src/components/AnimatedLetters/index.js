import './styles.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
	return (
		<span>
			{
				strArray.map((char, index) => (
					<span key={char + index} className={`${letterClass} _${index + idx}`} >
						{char}
					</span>
				))
			}
		</span>
	)
}

export default AnimatedLetters;