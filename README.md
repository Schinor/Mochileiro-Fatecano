## 🎒 Guia do Mochileiro Fatecano

### 🎯 Visão Geral do Projeto

O **Guia do Mochileiro Fatecano** é uma aplicação de *Front-end* desenvolvida em **Angular** que simula uma plataforma de apoio e organização para estudantes da FATEC. O projeto tem como objetivo proporcionar uma interface limpa e intuitiva para a navegação entre módulos (Termos/Semestres), implementando uma experiência de usuário focada na facilidade de acesso à informação.

O design visual (UI/UX) do projeto foi inteiramente **concebido e orientado pelo Professor Finotti (CIAg)**, que ministra aulas de Front-end na FATEC.

-----

### ✨ Tecnologias & Stack

| Categoria | Tecnologia | Versão Principal |
| :--- | :--- | :--- |
| **Framework** | Angular | 20.2.0 |
| **Linguagem** | TypeScript | \~5.9.2 |
| **Estilização** | CSS (com fontes Poppins) | - |
| **Tooling** | Angular CLI | 20.2.1 |

-----

### ⚙️ Arquitetura e Componentes

A aplicação utiliza o sistema de roteamento do Angular para navegação entre as principais telas e é construída com uma abordagem modular, utilizando componentes reutilizáveis.

#### Rotas Principais

As rotas da aplicação são definidas em `app.routes.ts`:

| Rota | Path (Caminho) | Componente | Descrição |
| :--- | :--- | :--- | :--- |
| **Login** | `/` (Rota padrão) | `Login` | Tela inicial de autenticação. |
| **Cadastro** | `/register` | `Register` | Formulário para criação de novas contas. |
| **Início (Home)** | `/inicio` | `Home` | Dashboard onde são listados os "Termos" (semestres). |

#### Componentes de UI

| Componente | Função | Inputs (`@Input()`) |
| :--- | :--- | :--- |
| **`Navbar`** | Barra de navegação principal. | - |
| **`MyButton`** | Botão de ação genérico. | `buttonText: string`, `routePath: string`. |
| **`MyCards`** | Cartão de exibição para termos/semestres. | `CardText: string`, `CardColor: string`. |

### 🖼️ Visualização

Aqui estão as imagens conceituais do projeto:

#### Login

A interface de Login, com o ícone da mochila e a opção para cadastrar-se:

#### Cadastro

A tela de Cadastro, solicitando nome, e-mail e senha:

#### Home

A página principal "Termos", exibindo os cartões coloridos para cada semestre:

-----

### 🚀 Como Rodar o Projeto Localmente

Siga os passos para configurar e executar o projeto em sua máquina de desenvolvimento.

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/Schinor/Mochileiro-Fatecano.git]
    cd [caminho do documento]
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    ng serve
    ```

    O servidor iniciará em `http://localhost:4200/`.

4.  **Execute os testes (opcional):**

    ```bash
    ng test
    ```

    Comando para executar os testes unitários via [Karma](https://karma-runner.github.io).

-----

### 💬 Contato (Marcio Gabriel Schinor Mazega)

Para se conectar ou saber mais sobre o projeto, entre em contato:

```markdown
<div align="center" style="border: 2px solid #21BC6B; border-radius: 10px; padding: 20px; max-width: 350px; margin: 20px auto;">
  <h4>Desenvolvido por:</h4>
  <h3>**Marcio Gabriel Schinor Mazega**</h3>
  <br>
  <a href="[www.linkedin.com/in/marcio-mazega]" target="_blank" style="text-decoration: none;">
    <span style="display: inline-block; padding: 8px 15px; background-color: #21BC6B; color: white; border-radius: 5px; font-weight: bold; cursor: pointer;">
      🔗 Conecte-se no LinkedIn
    </span>
  </a>
  <br><br>
  <small>Design por: Professor Finotti (CIAg)</small>
</div>
```
