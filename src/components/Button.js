import PropTypes from 'prop-types'

const Button = ({ onClick, color, text }) => {
    return (
    <button 
        style={{ backgroundColor: color }}
        onClick={onClick}
        className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
