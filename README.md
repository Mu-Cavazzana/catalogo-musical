# Catálogo Musical - JS + Node + PgAdmin

###  ALUNO: MURILO CAVAZZANA RIBEIRO

Este é um sistema de gestão de catálogo musical construído utilizando o padrão MVC (Model-View-Controller). A aplicação permite gerenciar informações sobre discos, artistas e gêneros musicais, oferecendo funcionalidades para criar, editar, listar e excluir itens, além de suporte para persistência de dados em um banco de dados relacional.

-----

## 📝 Funcionalidades

**Artistas:**
  Listar artistas cadastrados.
  Adicionar novos artistas.
  Editar informações de artistas existentes.
  Remover artistas.

**Discos:**
  Listar discos cadastrados.
  Adicionar novos discos.
  Editar informações de discos.
  Remover discos.

**Gêneros Musicais:**
  Listar gêneros disponíveis.
  Adicionar novos gêneros.
  Editar gêneros existentes.
  Remover gêneros.

**Seeders:**
  Dados pré-populados para testes iniciais (artistas, discos e gêneros).

-----

## 🛠️ Tecnologias Utilizadas
  **Backend:**
    Node.js
    - Express.js
    - Sequelize (ORM)

  **Banco de Dados:**
    PgAdmin 4

  **Frontend (Views):**
    EJS (Embedded JavaScript Templates)
    - HTML/CSS

-----

## Certifique-se de ter os seguintes programas instalados em sua máquina:
1. **Git**
2. **Node.js**
3. **PostgreSQL**

-----

1. **Instale as dependências:**
  ```bash
   npm install
  ```
   
2. **Configure o Banco de Dados:**

- **Edite o arquivo config/config.json com as credenciais do seu banco de dados.**

- **Crie um banco de dados no PostgreSQL**:
  ```sql
   CREATE DATABASE catalogomusical;
  ```

3. **Execute as migrações para o banco de dados:**
  ```bash
   npx sequelize db:migrate
  ```

4. **Popule o banco com dados iniciais (opcional):**
  ```bash
   npx sequelize db:seed:all
  ```

5. **Inicie o servidor:**
  ```bash
   npm start
  ```

6. **Acesse o site no seu navegador:**
  ```arduino
  http://localhost:3000
  ```

  -----

## 🧪 Testes

Os testes podem ser executados com a seguinte configuração (se configurado no projeto):

**Instale os pacotes de teste (exemplo com Jest):**
  ```bash
    npm install --save-dev jest supertest
  ```
  

**Execute os testes:**
  ```bash
    npm test
  ```

-----

## 🌱 Seeders

Os seeders disponíveis incluem dados pré-definidos para inicialização rápida do banco de dados:

**Gêneros:**
- Rock, Pop, Jazz, Classical, Hip Hop.

**Discos:**
- "Dark Side of the Moon", "Thriller", "Kind of Blue", "Abbey Road", "The Wall".

**Artistas:**
- Pink Floyd, Michael Jackson, Miles Davis, The Beatles.

Use o comando abaixo para aplicar os seeders:
  ```bash
    npx sequelize db:seed:all
  ```