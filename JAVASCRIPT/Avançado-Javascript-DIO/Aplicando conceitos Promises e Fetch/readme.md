### A palavra reservada await pode ser usada quando?
- Apenas dentro de uma função criada utilizando a palavra async e para aguardar a resolução de uma promise.

### Qual o retorno da invocação da função fetch?
- Uma Promise.

### Qual o objetivo do método Promise.race?
- Criar uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.

### Qual o método de uma Promise utilizado para tratar seus erros?
- O método .catch que irá receber uma função para o tratamento.

### Qual a forma de processar múltiplas Promise de maneira paralela e tratar o retorno de todas posteriormente?
- Utilizando o método Promise.all.

### Qual é uma das formas de construir uma Promise no JavaScript?
- Invocando o seu construtor e passando uma função ao mesmo. Ex: new Promise((resolve, reject) => {}).

### Utilizar callbacks ao desenvolver JavaScript assíncrono pode trazer quais tipos de problemas quando não utilizado com cautela?
- Problemas com a legibilidade e manutenção do código, pois podemos cair no chamado "callback hell".

### Uma requisição feita utilizando fetch só irá disparar um erro caso:
- Aconteça um erro de rede e não seja possível realizar a requisição.

### Qual a diferença entre o método on e once de uma instância EventEmitter?
- Um subscreve uma função a todas as ocorrências de um evento, o outro apenas para a primeira ocorrência.

### Quais os três estados possíveis de uma Promise?
- Pending, fulfilled e rejected.
