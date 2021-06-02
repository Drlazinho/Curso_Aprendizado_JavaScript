### Orientação a objeto

* Herança
  * baseada em protótipos
  * prototype
  * _proto__
  * constructor

O "proto" apronta o "prototype" que é construido a partir do "constructor"

* new Foo(...);
1 - um novo objeto é criado, herdando FOO.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu ´return´. Senão, será retornado o objeto criado no passo 1.