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
JsonRoutes.add('post', '/insert_customer', function (req, res, next) {
  res.charset = 'utf-8'
  const doc = req.body
  StudentM.insertStudent(doc, (error, result) => {
    let data = {}
    if (error) {
      data.code = '403'
      data.msg = error.message
      data.result = ''
    } else {
      data.code = '201'
      data.result = result
    }
    JsonRoutes.sendResult(res, {
      data: data,
    })
  })
})
// របៀបconvert method to api