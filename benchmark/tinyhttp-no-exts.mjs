import { App } from '@tinyhttp/app'

function one(req, res, next) {
  req.one = true
  next()
}

function two(req, res, next) {
  req.two = true
  next()
}

new App({
  applyExtensions: () => {}
})
  .use(one, two)
  .get('/favicon.ico', (_) => {})
  .get('/', (_, res) => res.end('Hello'))
  .get('/user/:id', (req, res) => {
    res.end(`User: ${req.params.id}`)
  })
  .listen(8000)
