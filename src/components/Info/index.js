import './styles.scss';

const Info = ({ title, description, technologies, closeInfo }) => {
    return (
        <div className='info-container'>
            <div
                className="info-title"
            >{title}</div>
            <hr />
            <div
                className="info-techs"
            ><b>Technologies:</b>
                <br />
                {technologies}</div>
            <hr />
            <div
                className="info-desc"
            ><b>Description:</b>
                <br />
                {description}</div>
            <button
                className="close-btn"
                onClick={closeInfo}
            >Close</button>
        </div>
    )
}

export default Info;