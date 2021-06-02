# Introdução a Design Patterns

**Definição**

Design Patterns ou padrões de projetos são soluções generalista para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado

**Formato de um pattern**

* Nome
* Exemplo
* Contexto
* Problema
* Solução

**Using Pattern Languages for Object-Oriented Programs**

* 1987
* Kent Beck e Ward Cunningham
* 5 padrões de projetos

**Design Patterns: Elements of Reusable Object-Oriented Software**

* 1994
* Gang of four (GoF)
* Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides

**Tipos**

* Criação
  * Os padrões de criação são aqueles que abstraem e/ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.
    * Abstract Factory
    * Builder
    * Factory Method -- Mais usado -- todas as funções que retornam um objeto, sem a necessidade de chamá-las com o **new**, são consideradas funções Factory(fabrica)
    * Prototype
    * Singleton -- mais usado -- cria uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la
* Estrutural
  * Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.
    * Adapter
    * Cridge
    * Composite
    * Decorator -- mais usado -- recebe uma outra função como parâmetro e estende o seu comportamento sem modifica-la explicitamente.
      * [Proposta](https://github.com/tc39/proposal-decorators)
      * [TypeScript](https://www.typescrptlang.org/docs/handbook/decorators.html)
    * Facade
    * Business Delegate
    * Flyweight
    * Proxy
* Comportamental
  * Se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.
    * Chain of Responsibility
    * Command
    * Interpreter
    * Iterator
    * Mediator
    * Observer --  mais usado -- É um pattern muito popular em aplicações JS.  instância (subscriber) mantém uma coleção de objetos (observer) e notifica todos eles quando ocorrem mudanças no estado.
    * State
    * Strategy
    * Template Method
    * Visitor

Module - é um pattern que possibilita organizarmo melhor o nosso código, sem a necessidade de expor variaveis globais.


