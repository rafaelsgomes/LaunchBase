const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('src/views', {
    express: server,
    noCache: false,
    autoescape: false
})

server.get('/', (req, res)=>{
    const data = {
        logo_url: 'rocketseatlogo.png',
        company: 'Rocketseat',
        description: 'Avance para o próximo nível',
        techs: ['Javascript', 'ReactJS', 'ReactNative', 'Nodejs'],
        links: [
            {name: 'Github', url: 'https://github.com/Rocketseat'},
            {name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/'},
            {name: 'Facebook', url: 'https://www.facebook.com/rocketseat'}
        ]
    }
    return res.render('index', {data})
})

server.get('/contents', (req, res)=>{
    return res.render('contents', {courses})
})

server.get('/course/:id', (req, res)=>{
    const id = req.params.id

    const course = courses.find((course)=>{
        if(course.id === id){
            return true
        }
    })
    if(!course){
        return res.render('not-found')
    }
    return res.render('course', {course})
})


server.use((req, res)=>{
    res.status(404).render('not-found')
})

server.listen(3000, function(){
    console.log('server is runing')
})