/*
 * https://www.npmjs.com/package/axios
 */

const axios = require('axios').default

const getUrl = async (url) => {
  const { data } = await axios.get(url)
  return data
}

getUrl('https://jsonplaceholder.typicode.com/users').then( d => console.log(d))
