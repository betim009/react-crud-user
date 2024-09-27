## Desafio de CRUD REACT

Via SSH

git clone git@github.com:betim009/react-crud-user.git

Via HTTPS

git clone https://github.com/betim009/react-crud-user.git

Instalar dependencias

npm i

Crie sua própria Branch

git checkout -b "nomeDaSuaBranch"

### Requisitos

1. Implementar o onChange do input.
   Deve ser coletado através desse evento o valor digitado dentro do input e armazenar dentro do estado,
   inputValue.
2. Implementar o botão send.
   Ao clicar no botão send, será disparado a função handleCreate, deve ser coletado o valor do input e cadastrar no estado InputValue.
   Lembrando que, esse novo usuário cadastrado precisa ser um novo Objeto.
   Para ser criado um novo id, utilize a lógica de index+=1.
   Exemplo: const objeto = {}; objeto.id = index+=1
3. Ao clicar no botão edit, deve implementar a função handleEdit.
   Envie como parametro o index que está dentro do map.
4. Ao Clicar no botão remove, deve implementar a função handleRemove.
   E o usuario deve ser removido.

///
