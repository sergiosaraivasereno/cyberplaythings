# 🚀 Deploy Automático Firebase Hosting + GitHub + CodeSandbox

**Desenvolvido por:** Sérgio Saraiva Sereno  ><
**Projeto:** CyberPlayThings  
**Domínio:** [https://cyberplaythings.com](https://cyberplaythings.com)  

---

## ✅ O QUE FOI CONFIGURADO

### Ferramentas utilizadas:
- [CodeSandbox](https://codesandbox.io/) – Editor leve, online e prático
- [GitHub](https://github.com/) – Versionamento e automação com Actions
- [Firebase Hosting](https://firebase.google.com/) – Hospedagem rápida e gratuita

### Fluxo Automatizado:
- 💾 Salva no CodeSandbox  
- 🔁 Push automático para GitHub  
- 🚀 GitHub dispara deploy automático para o Firebase  
- 🌐 Site atualizado em tempo real no domínio próprio

---

## 🔐 Segredo usado no GitHub

| Nome do Secret     | Valor                         |
|--------------------|-------------------------------|
| `FIREBASE_TOKEN`   | Gerado com `firebase login:ci` |

---

## ⚙️ Workflow de deploy (`firebase-deploy.yml`)

```yaml
name: Deploy para Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Clonar o repositório
        uses: actions/checkout@v3

      - name: Instalar Firebase CLI
        run: npm install -g firebase-tools

      - name: Deploy para Firebase
        run: firebase deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
