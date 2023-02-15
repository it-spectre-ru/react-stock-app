import axios from 'axios'

const TOKEN = 'cflp5m1r01qjfr8f2u70cflp5m1r01qjfr8f2u7g'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1/',
  params: {
    token: TOKEN
  }
})