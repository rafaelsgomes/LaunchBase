//DESAFIO 03 DO BOOTCAMP LAUNCHBASE 
//TECNOLOGIAS (FUNÇÕES, MÉTODOS, ESTRUTURA DE REPETIÇÃO E ESCOPO)

const users = [
    {
        name: 'Carlos',
        technologies: ['HTML', 'CSS']
    },
    {
        name: 'Jasmine',
        technologies: ['Javascript', 'CSS']
    },
    {
        name: 'Tuane',
        technologies: ['HTML', 'Node.js']
    }
]

for (user of users) {
    console.log(`${user.name} trabalha com ${user.technologies}`)
}

function userCss(user) {
    for (technologies of user.technologies) {
        if (technologies == 'CSS') {
            return user
        }
    }

}

for (i = 0; i < users.length; i++) {
    const userCSS = userCss(users[i])

    if (userCSS) {
        console.log(`O usuario ${users[i].name} trabalha com CSS`)
    }
}