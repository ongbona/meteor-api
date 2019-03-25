import { StudentM } from './method'

JsonRoutes.add('get', '/find_customer/:selector/:options', function (
  req,
  res,
  next
) {
  res.charset = 'utf-8'
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {}
  const options = req.params.options ? JSON.parse(req.params.options) : {}
  let data = {}
  data.result = StudentM.findStudent()
  data.code = '200'
  JsonRoutes.sendResult(res, {
    data: data,
  })
})
