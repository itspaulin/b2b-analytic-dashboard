import { Elysia, t } from 'elysia'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number(),
    }),
  })
  .listen(3000)
