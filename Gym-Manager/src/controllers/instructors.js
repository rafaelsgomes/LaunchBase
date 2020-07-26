const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const {age, date} = require('../utils')

//index
exports.index = (req, res)=>{
    return res.render('instructors/index', {instructors: data.instructors})
}

// show
exports.show = (req, res)=>{
    const {id} = req.params

    const foundInstructor = data.instructors.find((instructor)=>{
        return  id == instructor.id
    })

    if(!foundInstructor) return res.send('Instructor not found!')

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
    }

    return res.render('instructors/show', {instructor})
}

// create page
exports.create = (req, res)=>{
    return res.render('instructors/create')
}

//create
exports.post = (req, res)=>{
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") return res.send('Please, fill all fields')
    }

    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write file error')

        return res.redirect('instructors')
    })
}

//edit page
exports.edit = (req, res)=>{
    const {id} = req.params

    const foundInstructor = data.instructors.find((instructor)=>{
        return  id == instructor.id
    })

    if(!foundInstructor) return res.send('Instructor not found!')

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }

    return res.render('instructors/edit', {instructor})
}

//edit
exports.put = (req, res)=>{
    const {id} = req.body
    let index = 0
    
  const foundInstructor = data.instructors.find((instructor, foundIndex) => {
    if (instructor.id == id) {
      index = foundIndex
      return true
    }
  })

    if(!foundInstructor) return res.send('Instructor not found!')

    const instructor = {
        ...foundInstructor,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }
    data.instructors[index] = instructor

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write error!')

        return res.redirect(`/instructors/${id}`)
    })

}

// delete
exports.delete = (req, res)=>{
    const {id} = req.body

    const filteredInstructors = data.instructors.filter((instructor)=>{
        return instructor.id != id
    })

    data.instructors = filteredInstructors

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write file error!')

        return res.redirect(`/instructors`)
    })
}