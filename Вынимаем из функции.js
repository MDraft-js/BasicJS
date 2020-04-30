function getFullName(firstName, lastName) {
    return function(){
        return `${firstName} ${lastName}`
    }
}

const getname = getFullName('Mikun', 'Hatsune');
console.log(getname(lastName));