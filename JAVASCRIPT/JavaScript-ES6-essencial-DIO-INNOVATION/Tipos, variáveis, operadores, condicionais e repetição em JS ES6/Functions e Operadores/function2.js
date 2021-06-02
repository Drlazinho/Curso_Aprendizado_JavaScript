(() => {
    this.name = 'arrow function'; //this.name vai referenciar todo o escopo
    const getNameArrowFn = () => this.name

    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user =  { //criando um usuário
        name: 'Nome no objeto de execução',
        getNameArrowFn, // ou poderia ser =>     getNameArrowFn: getNameArrowFn,
        getName         // ou ----  => getName: getName     dar no mesmo
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();