let user = {
    name: 'Lázaro'
};

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] =  'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//Criando uma propriedade
user.lastName = 'Pimentel Bonfim';

//Deletando uma propriedade
delete user.name;