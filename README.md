# Portfólio | Pietro Dias da Silva

Site pessoal feito com HTML, CSS e JavaScript puros (sem frameworks), com foco em apresentar minha trajetória profissional e acadêmica, meus projetos e meus canais de contato.

> Estudante do 4º período de Análise e Desenvolvimento de Sistemas (USCS), em busca de estágio em TI (Back-end, Front-end ou SQL).

## Seções

- **Sobre mim:** resumo da minha realidade atual, formação e tecnologias.
- **Links principais:** LinkedIn, GitHub e currículo em PDF.
- **Alguns dos meus projetos:** [Cálculo de Horas Extras](https://github.com/pietrwd/Calculo-de-Horas-Extras), [SkyHorizon Airlines](https://github.com/pietrwd/SkyHorizon_Airlines) e [Jogo da Velha](https://github.com/pietrwd/JogodaVelha).
- **Contato:** WhatsApp, Instagram e e-mail.

## Recursos

- Caixas de acesso interativas, com brilho que segue o mouse, efeito ao clicar e aviso na tela.
- Layout responsivo, para computador e celular.
- Navegação por teclado com foco visível e suporte à opção "reduzir movimento" do sistema.

## Tecnologias

- HTML5
- CSS3 (variáveis, Grid e Flexbox)
- JavaScript (ES6)
- [Font Awesome](https://fontawesome.com/) para os ícones e [Google Fonts](https://fonts.google.com/) (Sora) para a tipografia, ambos carregados por CDN

## Estrutura do projeto

```
portfolio/
├── index.html
├── style.css
├── script.js
├── Curriculo-Pietro-Dias-da-Silva.pdf
└── img/
    ├── capa.jpg
    └── foto-perfil.jpg
```

## Como rodar localmente

1. Baixe ou clone o projeto:
   ```bash
   git clone https://github.com/pietrwd/NOME-DO-REPOSITORIO.git
   ```
2. Abra a pasta no VS Code.
3. Abra o `index.html` no navegador, ou use a extensão **Live Server** (clique com o botão direito no arquivo e escolha "Open with Live Server").

Não é preciso instalar nada nem rodar comandos de build.

## Como publicar no Netlify

**Opção 1: arrastar a pasta**
1. Acesse [app.netlify.com](https://app.netlify.com) e entre na sua conta.
2. Vá em **Add new site → Deploy manually**.
3. Arraste a pasta `portfolio` inteira para a área indicada.

**Opção 2: pelo GitHub (atualiza sozinho a cada commit)**
1. Suba o projeto para um repositório no GitHub.
2. No Netlify, escolha **Add new site → Import an existing project** e selecione o repositório.
3. Deixe os campos de build em branco e use a raiz do projeto como diretório de publicação.

## Como personalizar

- **Textos e links:** edite o `index.html`.
- **Cores:** altere as variáveis no início do `style.css` (`:root`).
- **Foto, capa e currículo:** substitua os arquivos mantendo os mesmos nomes.

## Contato

- LinkedIn: [linkedin.com/in/pietrodias](https://www.linkedin.com/in/pietrodias/)
- GitHub: [github.com/pietrwd](https://github.com/pietrwd)
- E-mail: diaspietro@icloud.com
