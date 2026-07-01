# Site — Espaço Terapêutico Kids MAE

Site institucional estático (HTML/CSS/JS puro, sem build) para a ONG **MAE — Mãe Atípica e Especial** / Espaço Terapêutico Kids MAE.

## Estrutura

```
index.html        página única com todas as seções
css/style.css      estilos
js/script.js       menu mobile, ano do rodapé, animações de entrada
assets/img/        logos, foto e imagens dos parceiros já otimizadas
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `ong-mae-site`) e suba estes arquivos:
   ```bash
   git init
   git add .
   git commit -m "Site inicial Espaço Terapêutico Kids MAE"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/ong-mae-site.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará em `https://SEU_USUARIO.github.io/ong-mae-site/`.

## Antes de publicar, confira/ajuste

- **WhatsApp**: o número usado em todos os botões é `5585997889263` ((85) 9.9788-9263). Se estiver errado, troque em `index.html` (busque por `5585997889263`).
- **Instagram**: já aponta para `instagram.com/espacoterapeuticokidsmae`.
- **Chave PIX**: usei o CNPJ como chave (`49.099.408/0001-08`), como aparecia no material de referência. Confirme se é essa mesma chave.
- **Mapa**: o mapa incorporado busca pelo endereço "Rua André Chaves, 500, Jardim América, Fortaleza - CE". Se quiser o pino exato, gere o link do Google Maps do local e troque o `src` do `iframe` na seção `#contato`.
- **Domínio próprio (opcional)**: se a ONG tiver um domínio (ex: `ongmae.org.br`), crie um arquivo `CNAME` na raiz do repositório contendo apenas o domínio, e configure o DNS conforme a [documentação do GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Testar localmente

Basta abrir `index.html` no navegador, ou rodar um servidor simples:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.
# OngMaeSite
