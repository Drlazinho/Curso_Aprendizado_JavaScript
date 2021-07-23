# Testes

## Testes automáticos
* testes unitários;
* testes integrados;
* testes funcionais.

## Testes manuais e automatizados
* Testes usabilidade;
* Testes de aceitação do usuário;
* Protótipos;
* Testes funcionais;
* Exemplos;
* Alpha e Beta;
* Mais...

## Ferramentas de teste
* Teste de carga e perfomance;
* Testes de segurança;
* Mais...

# TDD (Test Driven Development)
É um dos pilares do Extreme Programing, consiste em testar a refatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o mesmo passar e refatora o código.

Escrita do teste -> Escrita do código -> Refatoração

### Vantagens
* Feedback rápido;
* Maior segurança em alterações e novas funcionalidades;
* Código mais limpo;
* Produtividade.

# BDD (Behavior Driven Development)
Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

## Pilares
* Testes;
* Documentação;
* Exemplos.

### Vantagens
* Compartilhamento de conhecimento;
* Documentação dinâmica;
* Visão do todo.

## PERGUNTAS

### Qual a maior vantagem de utilizar o chai como ferramenta de asserção?
* Ao escrever asserções utilizando chai, uma das maiores vantagens é a sua escrita muito mais expressiva do comportamento esperado.

### Qual é um dos principais objetivos do BDD (desenvolvimento orientado a comportamento)?
* Integrar regras de negócio com linguagens de programação.

### Os testes unitários são responsáveis por testar o quê?
* A menor unidade do seu código como funções, métodos e afins.

### A responsabilidade dos testes de integração é:
* Garantir o funcionamento de unidades menores trabalhando em conjunto com outras.

### Ao utilizar o módulo assert do Node.js, quando utilizamos seu método equal para validar dois valores, caso os dois não sejam iguais, qual será o seu comportamento?
* Será disparado um erro contendo informações sobre a asserção incorreta.

### Qual a função do método spy do sinon?
* Criar uma função ou interceptar a execução de uma outra função a fim de obter dados sobre como a mesma foi invocada.

### Os testes funcionais visam:
* Garantir o correto funcionamento de uma funcionalidade de ponta a ponta.

### Quais são as etapas que compõem o TDD?
* Escrita do teste descrevendo o comportamento esperado, escrita do código com o comportamento esperado e refatoração.

### Caso não seja passada nenhuma configuração de diretórios ao mocha, qual será o diretório na raiz do projeto onde serão buscados os testes?
* test

### Como aguardamos um código assíncrono finalizar em um teste no mocha?
* Utilizando a função done que vem como parâmetro ao it posteriormente à execução do código assíncrono.

