const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://www.accuweather.com/en/us/richardson/75081/weather-forecast/340985'
const getHTML = async (url) => await axios.get(url).then((res) => res.data)
const parseDataFromHTML = (html) => {
  const $ = cheerio.load(html)
  const address = $('.header-inner .header-city-link .header-loc').text()
  const temperature = $('.wea_info .temp-container').text()
  const weather = $('.wea_info .wea_weather b').text()
  return {
    address,
    temperature,
    weather
  }
}

const getWeather = async () => {
  const html = await getHTML(URL)
  const data = parseDataFromHTML(html)
  const { address, temperature, weather } = data
  const result = `Weather infomation of ${address}: \n
Weather: ${weather}, Temperature: ${temperature} ℃`
  return result
}

module.exports = getWeather
