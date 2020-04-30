let obj1 = {
    name: 'Mikun',
};

let obj2 = {
    age: 16,
};

let profile = Object.assign(obj1, obj2);
console.log(profile);
console.log(profile === obj1);
console.log(profile.name);