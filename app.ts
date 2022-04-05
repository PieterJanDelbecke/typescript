enum Role{ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Maximilian',
    age: 30,
    role: Role.ADMIN
}

for (const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`)
}