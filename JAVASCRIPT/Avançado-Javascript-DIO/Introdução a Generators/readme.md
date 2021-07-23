### Generators podem "pausar" sua execução através de qual palavra reservada:
- yield.

### Generators podem receber valores em cada pausa para continuar sua execução?
- Sim, podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.

### Propriedades de objetos criadas usando identificadores únicos podem ser descobertas usando:
- Utilizando o symbol utilizado como identificador ou o método Object.getOwnPropertySymbols.

### Symbols podem ser usados para gerar:
- Identificadores únicos.

### Qual a forma de retornar um valor em cada iteração de uma função generator?
- Incluindo o valor após a palavra yield.

### O "for of" é utilizado para:
- Obter os valores gerados através do iterador em um objeto ou tipo iterável.

### Ao invocar o método next de um iterador, o seu retorno deve ser:
- Um objeto contendo um método next e uma propriedade done.

### Tipos e objetos iteráveis possuem:
- 
### Ao consumir um iterador, como sabemos se a iteração finalizou?
- Através da propriedade done no objeto retornado na iteração.

### Podemos utilizar generators para construir objetos iteráveis?
- Sim, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.
