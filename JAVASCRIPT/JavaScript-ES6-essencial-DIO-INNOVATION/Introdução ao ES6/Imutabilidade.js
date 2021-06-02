const user = {
    name: 'Lázaro',
    lastName: 'Pimentel Bonfim'
};

function getUserWithFullName(user) {
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);