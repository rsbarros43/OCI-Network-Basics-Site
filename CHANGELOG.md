# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [0.8.0] - Não lançado

### Corrigido
- **Crítico:** 72 das 73 imagens do site estavam quebradas em produção (`src` apontando para `assets/assets/img/...` ou para `/docs/assets/assets/img/...`, um domínio/caminho inexistente). Todas as referências foram corrigidas para `assets/img/...`.

### Adicionado
- Meta tags de SEO (description, keywords, canonical), Open Graph e Twitter Card.
- Favicon.
- `robots.txt` e `sitemap.xml`.
- Página `404.html` customizada.
- Deep-linking por URL: cada capítulo agora tem uma URL própria (`#capitulo`), com suporte a voltar/avançar do navegador e links compartilháveis.
- Skip link e estilos de foco visível para navegação por teclado (acessibilidade).
- `loading="lazy"` nas imagens dos capítulos.
- Workflow de CI (`.github/workflows/link-check.yml`) para checar links e imagens quebradas em todo push/PR.
- `README.md` com estrutura do projeto e guia de contribuição.

## [0.7.5] e anteriores

Ver histórico de commits do repositório.
