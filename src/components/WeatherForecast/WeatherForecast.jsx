import './WeatherForecast.css';

const WeatherForecast = (props) => {
    const {weatherF} = props
    return (
        <div className='weather'>
            <h2>{weatherF.day}</h2>
            <img src={weatherF.img} alt={weatherF.imgAlt} />
            <p>conditions:{weatherF.conditions}</p>
            <p>time: {weatherF.time}</p>
        </div>
    )
}

export default WeatherForecast;