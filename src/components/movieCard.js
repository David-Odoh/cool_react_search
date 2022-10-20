import './movieCard.css';

const MovieCard = (data) => {
    return (
        <div>
            <img alt='' src={data.props.Images[0]}/>
            <div className='movie-title'>{data.props.Title}</div>
        </div>
    )
}

export default MovieCard;