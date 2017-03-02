const React = require('react')
const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage')
const openWeatherMap = require('openWeatherMap')

let Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this
    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (errorMessage) => {
      that.setState({
        isLoading: false
      })
      alert(errorMessage)
    })

  },
  render: function () {
    let {isLoading, temp, location} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
