const React = require('react')
const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage')
const ErrorModal = require('ErrorModal')
const openWeatherMap = require('openWeatherMap')

let Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (e) => {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })

  },
  componentDidMount: function () {
    let location = this.props.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  componentWillReceiveProps: function (newProps) {
    let location = newProps.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  render: function () {
    let {isLoading, temp, location, errorMessage} = this.state
    
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather
