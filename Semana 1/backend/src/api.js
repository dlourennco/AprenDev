const axios = require('axios')

module.exports = {
  async index(req, res) {
    const { user, password } = req.body

    const apiRes = await axios.get('https://api.myjson.com/bins/kj4aq')
    
    const users = apiRes.data
    console.log(users)

    users.forEach(() => {
      
      if (user !== null && password !== null) {
        console.log(`Usuário Autenticado`)
      }
    })
    return res.json(users)
  },
}