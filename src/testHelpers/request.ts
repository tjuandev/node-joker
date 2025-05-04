import supertest from 'supertest'
import app from '#src/app.js'

const request = supertest(app)

export default request
