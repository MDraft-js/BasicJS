const user = {
    name: 'Mikun',
    lastName: 'Hatsune',
    Years: 16,
    info: {
        work: ['Voice Actor', 'Programmer', 'Blogger', 'Designer', 'Signer', 'Fronted'],
        skills: ['html', 'css', 'js', 'Reaper', 'Photoshop', 'Sony Vegas Pro'],
    },
};

const { name, lastName, Years: age } = user;
console.log();

const {
    info: { work },
} = user;
console.log(work);

