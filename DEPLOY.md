# Guia de Implantação: Agência PVS

Este guia explica como subir o site para o **GitHub** e hospedar na **Vercel**.

## 1. Preparando o Repositório no GitHub

1.  Crie uma conta no [GitHub](https://github.com/) se ainda não tiver.
2.  Crie um novo repositório chamado `agencia-pvs`.
3.  No seu terminal local (ou usando o GitHub Desktop):
    ```bash
    git init
    git add .
    git commit -m "Initial commit: PVS Landing Page"
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/agencia-pvs.git
    git push -u origin main
    ```

## 2. Hospedagem na Vercel (Recomendado)

A Vercel é a plataforma ideal para projetos Vite.

1.  Acesse [vercel.com](https://vercel.com/) e faça login com sua conta do GitHub.
2.  Clique em **"Add New"** > **"Project"**.
3.  Importe o repositório `agencia-pvs`.
4.  A Vercel detectará automaticamente que é um projeto **Vite**.
5.  Clique em **"Deploy"**.
6.  Em poucos segundos, seu site estará online com um link profissional (ex: `agencia-pvs.vercel.app`).

## 3. Otimizações Incluídas

O projeto já está configurado para performance máxima:
-   **Vite Build:** Gera arquivos estáticos otimizados na pasta `dist/`.
-   **Tailwind CSS:** Purga estilos não utilizados para manter o CSS leve.
-   **Assets:** Imagens carregadas via CDN para rapidez.

## 4. Alterações Manuais (Vibe Mode)

Se você quiser fazer alterações rápidas:
-   **React:** Edite `src/App.tsx`.
-   **Estático:** Edite `visual.html` (ideal para testes rápidos sem build).
-   **Backend:** O arquivo `server.ts` está pronto caso você queira adicionar funções de servidor no futuro.

---
🚀 **PVS Vibe Mode: Pronto para escala!**
