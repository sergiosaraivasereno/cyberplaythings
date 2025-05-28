# 🛒 CyberPlayThings

Loja virtual geek moderna, modular e preparada para dropshipping.  
Criada por Sérgio Saraiva Sereno com foco em figures, pelúcias, moda, tecnologia e produtos exclusivos.

---

## 🚀 Funcionalidades do Site

- ✅ **Login e Cadastro com Firebase**
  - Com verificação de idade (para acesso restrito a produtos +18)
  - Sistema de redefinição de senha via e-mail
- ✅ **Carrinho inteligente**
  - Adição de produtos com controle de quantidade (+ e −)
  - Salvo no localStorage (com planos para salvar no Firebase)
- ✅ **Finalização de pedido**
  - Formulário com nome, e-mail, endereço
  - Pedido salvo na coleção `pedidos` do Firebase
- ✅ **Categorias com layout exclusivo**
  - Cada página (`pelucias.html`, `figures.html`, etc) tem cor e estilo próprios
- ✅ **Página de produto**
  - Suporte a múltiplas imagens, descrições, marca, peso, tamanho
- ✅ **Acesso restrito a produtos +18**
  - Página `hottoys.html` só visível para maiores de 18 logados
- ✅ **Mascote (em progresso)**
  - Kitsu, a coelha guia do site, aparecerá em várias páginas com animações

---

## 🎛 Painel Administrativo

- **Acesso exclusivo via login**
  - Apenas o e-mail `sergiosaraivasereno@gmail.com` pode acessar os painéis
- **Painéis criados:**
  - `admin.html`: painel principal
  - `admin-produtos.html`: edição e exclusão de produtos
  - `admin-pedidos.html`: visualização dos pedidos
  - `admin-banners.html`: criação de banners com imagem, link e posição
  - `admin-carrosseis.html`: cria carrosséis dinâmicos baseados em tags dos produtos

---

## 🔁 Carrosséis Inteligentes

- Criados no `admin-carrosseis.html`
- Cada carrossel tem:
  - Nome do carrossel (ex: Hatsune, Yowu, Tech)
  - Tag (como `hatsune`, `rosa`, `dark`)
  - Posição na página (topo, meio, rodapé)
- Exibidos dinamicamente no `index.html` pelo script `js/carrosseis.js`
- Mostra até 6 produtos com a tag informada

---

## 🧠 Organização de Pastas

cyberplaythings/
│
├── index.html
├── admin.html
├── admin-produtos.html
├── admin-pedidos.html
├── admin-banners.html
├── admin-carrosseis.html
├── README.md ← ESTE ARQUIVO
│
├── css/
│ ├── style.css
│ ├── menu.css
│ ├── pelucias.css
│ ├── figures.css
│ └── tech.css
│
├── js/
│ ├── firebase-config.js ← usado por todos os scripts com Firebase
│ ├── carrosseis.js ← monta carrosséis dinamicamente no index
│ ├── cart.js ← (em construção) carrinho no Firebase
│ └── menu.js ← abre e fecha o menu lateral
│
├── components/
│ ├── bloco-categorias.html ← grade de categorias da home
│ ├── footer.html ← rodapé com mascote e contatos
│
└── imagens/
├── logo-cyber.png
├── erro-relax.png
└── (mascotes, banners e ilustrações diversas)



---

## 🔐 Segurança e Acesso

- O Firebase Auth é usado para:
  - Impedir acesso a painéis se não for admin
  - Bloquear a página de produtos +18 para menores
  - Recuperar senha via e-mail
- O único e-mail com acesso total ao painel é:

---

## 📦 Firebase Firestore

### Coleções usadas:
- `usuarios`: dados dos usuários cadastrados (inclui nascimento)
- `produtos`: todos os produtos do site
- `pedidos`: pedidos finalizados com dados do cliente
- `banners`: blocos visuais adicionados pelo admin
- `carrosseis`: carrosséis que filtram produtos por tag

---

## 📲 Tecnologias usadas

- HTML5 puro
- CSS3 com layout modular
- JavaScript (modular e organizado)
- Firebase (Auth + Firestore)
- Projeto pensado para ser editado e acessado também via celular

---

## 🧩 Próximas melhorias (ideias salvas)

- [ ] Carrinho com produtos no Firebase
- [ ] Integração com API do Google para login
- [ ] Painel de estatísticas (número de acessos, cliques, vendas)
- [ ] Botão de compartilhar no WhatsApp
- [ ] Modo escuro/claro (futuramente com eventos sazonais)
- [ ] Sistema de cupons e promoções
- [ ] Página secreta com mascote reagindo às interações
- [ ] Integração com fornecedores de dropshipping
- [ ] Substituir emojis por SVGs ou imagens otimizadas

---

## 👤 Contato e suporte

Dúvidas ou suporte:
- 📧 Email: **sergiosaraivasereno@gmail.com**
- 🌐 Site: [https://www.cyberplaythings.com](https://www.cyberplaythings.com)

---

> Projeto criado com propósito profissional, aprendizado técnico e automação.  
> Tudo aqui é seu — pronto pra escalar.
