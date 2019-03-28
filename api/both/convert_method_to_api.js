import { StudentM } from './method'
JsonRoutes.add('get', '/find_student', function (
    req,
    res,
    next
) {
    res.charset = 'utf-8'
   
    let data = {}
    data.result = StudentM.findStudent()
    data.code = '200'
    JsonRoutes.sendResult(res, {
        data: data,
    })
})
JsonRoutes.add('get', '/insert_student/:selector', function (
    req,
    res,
    next
) {
    res.charset = 'utf-8'
    const selector = req.params.selector ? JSON.parse(req.params.selector) : {}
   
    let data = {}
    // const doc = req.body
    data.result = StudentM.insertStudent(selector)
    data.code = '200'
    JsonRoutes.sendResult(res, {
        data: data,
    })
})
