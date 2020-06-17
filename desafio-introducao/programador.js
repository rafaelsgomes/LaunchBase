//DESAFIO 02 DO BOOTCAMP LAUNCHBASE 
//PROGRAMADOR (OBJETO e ARRAY EM JS)

const developer = {
    name: 'Carlos',
    age: 32,
    technologies: [
        {
            name: 'C++',
            expertise: 'Desktop',
        },
        {
            name: 'Javascript',
            expertise: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${developer.name} tem ${developer.age} anos e usa a tecnologia ${developer.technologies[0].name} com especialidade em ${developer.technologies[0].expertise}`)
