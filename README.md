# fullstack-customer-base

Esta é uma aplicação em Node.js que usa o framework Express, TypeScript e TypeORM para criar um CRUD completo para uma tabela de clientes e contatos.

Instalação
Para começar, você precisa ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los no site oficial aqui.

Em seguida, abra um terminal ou prompt de comando e execute o seguinte comando para clonar o repositório:


git clone 

https://github.com/byPedroCruzDev/fullstack-customer-base

Em seguida, instale as dependências do projeto com o comando:


**npm install**

Configuração do Banco de Dados
Antes de executar a aplicação, você precisa configurar o banco de dados. Certifique-se de ter o postegreSQL ou outro banco de dados compatível instalado em sua máquina.

Crie um novo banco de dados com o nome "minha-aplicacao" e configure as credenciais de acesso no arquivo .env da seguinte forma:
**
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=minha-aplicacao
**
Execução da Aplicação
Após instalar as dependências e configurar o banco de dados, você pode executar a aplicação com o seguinte comando:

**npm run dev**
Isso iniciará a aplicação em modo de desenvolvimento na porta 3000. Você pode acessar a aplicação no seu navegador em http://localhost:3000.

# Endpoints
## Clients
GET /clients: Retorna a lista de todos os clientes cadastrados.

POST /clients: Cria um novo cliente e retorna os dados do cliente criado.

PUT /clients/:clientId : Atualiza um cliente específico pelo seu **id** e retorna os dados do cliente atualizado.

DELETE /clients/:clientId : Deleta um cliente específico pelo seu **id**.

## Contacts
GET /client/:clientId/contacts: Retorna a lista de todos os contatos vinculados a um client especifico.

POST /clients/:clientId/contacts: Cria um novo contato para um cliente específico e retorna os dados do contato criado.

PUT /clients/:clientId/contacts/:id: Atualiza um contato específico pelo seu ID para um cliente específico e retorna os dados do contato atualizado.

DELETE clients/:clientId/contacts/:contactId: Deleta um contato específico de um client pelo seu **id**

## Criação de cliente

{
 "fullName": "name",
 
 "phone": "9999-999",
 
 "email":"email@email.com"
}

A criação de cliente pode ser feita com ou sem a associação de um contato


# Contribuindo
Se você quiser contribuir com a aplicação, sinta-se à vontade para enviar um pull request com suas modificações. Certifique-se de testar suas alterações e seguir as boas práticas de desenvolvimento de software.

Licença
Esta aplicação está licenciada sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
