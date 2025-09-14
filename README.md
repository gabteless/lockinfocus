# LockinFocus - Extensão para Chrome

LockinFocus é uma extensão simples para o Google Chrome, criada com o Manifest V3, que ajuda você a salvar abas importantes para focar no que é relevante agora, sem perder links úteis para depois.

![Screenshot da Extensão](docs/screenshot.png) ## 🚀 Instalação

Você pode instalar a extensão de duas maneiras:

### 1. Instalação Local (Modo Desenvolvedor)

1.  Clone ou baixe este repositório: `git clone https://github.com/gabteless/lockinfocus`
2.  Abra o Google Chrome e acesse `chrome://extensions`.
3.  Ative o **"Modo de desenvolvedor"** no canto superior direito.
4.  Clique em **"Carregar sem compactação"**.
5.  Selecione a pasta `lockinfocus-extension` que você baixou.
6.  A extensão aparecerá na sua barra de ferramentas!

### 2. Pela Release (Versão Empacotada)

1.  Vá para a seção de [Releases](https://github.com/gabteless/lockinfocus) deste repositório.
2.  Baixe o arquivo `lockinfocus-v1.0.0.zip`.
3.  Descompacte o arquivo.
4.  Siga os passos de "Instalação Local" acima, selecionando a pasta descompactada.

## 🛠️ Como Usar

1.  **Salvar uma Aba:** Com a aba que você deseja salvar aberta, clique no ícone da LockinFocus na barra de ferramentas e depois no botão **"Salvar Aba Atual"**.
2.  **Visualizar Abas Salvas:** Todas as suas abas salvas são listadas no pop-up.
3.  **Anotações:** Você pode adicionar uma anotação de texto a qualquer aba salva diretamente na lista. As anotações são salvas automaticamente.
4.  **Remover uma Aba:** Clique no botão **"Remover"** em qualquer item da lista para excluí-lo.
5.  **Contador:** O ícone da extensão mostrará um contador com o número de abas salvas.

## 🗂️ Estrutura do Projeto

O projeto segue as melhores práticas para desenvolvimento de extensões com Manifest V3, mantendo o código organizado e modular.