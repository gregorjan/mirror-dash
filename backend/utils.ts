const mongoose = require('mongoose')

const mongoUrl = 'mongodb://172.16.0.252/dashboard'

export const connect = (query) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      mongoUrl,
      (err) => {
        if (err) reject(err)
        query((err, response) => {
          mongoose.disconnect(() => {
            if (err) reject(err)
            resolve(response)
          })
        })
      },
      { useNewUrlParser: true },
    )
  })
}
