const fs = require('fs')
const data = require('../data.json')
const {date} = require('../utils')

exports.index = (req, res)=>{
    return res.render('members/index', {members: data.members})
}

exports.show = (req, res)=>{
    const {id} = req.params

    const foundMember = data.members.find((member)=>{
        return  id == member.id
    })

    if(!foundMember) return res.send('Member not found!')

    let blood = ''
    if(foundMember.blood.slice('-1') == '1'){
        blood =  foundMember.blood.replace('1', '+')
    }else{
        blood = foundMember.blood.replace('0', '-')
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay,
        blood
    }

    return res.render('members/show', {member})
}

exports.create = (req, res)=>{
    return res.render('members/create')
}

exports.post = (req, res)=>{
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") return res.send('Please, fill all fields')
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastMember = data.members[data.members.length -1]

    if(lastMember){
        id = lastMember.id + 1
    }

    data.members.push({
        id,
        ...req.body, 
        birth
    })

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write file error')

        return res.redirect('members')
    })
}

exports.edit = (req, res)=>{
    const {id} = req.params

    const foundMember = data.members.find((member)=>{
        return  id == member.id
    })

    if(!foundMember) return res.send('Member not found!')

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso
    }

    return res.render('members/edit', {member})
}

exports.put = (req, res)=>{
    const {id} = req.body
    let index = 0
    
  const foundMember = data.members.find((member, foundIndex) => {
    if (member.id == id) {
      index = foundIndex
      return true
    }
  })

    if(!foundMember) return res.send('Member not found!')

    const member = {
        ...foundMember,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }
    data.members[index] = member

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write error!')

        return res.redirect(`/members/${id}`)
    })

}

exports.delete = (req, res)=>{
    const {id} = req.body

    const filteredMembers = data.members.filter((member)=>{
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile('./src/data.json', JSON.stringify(data, null, 2), (err)=>{
        if(err) return res.send('Write file error!')

        return res.redirect(`/members`)
    })
}