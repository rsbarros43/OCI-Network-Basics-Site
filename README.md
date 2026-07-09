# OCI Network Basics

Guia técnico e visual, em português, sobre os fundamentos de rede no **Oracle Cloud Infrastructure (OCI)**: VCN, sub-redes, roteamento, DRG, peering, DNS híbrido, firewall, policy routing, BGP e automação com Terraform.

🔗 **Site publicado:** https://rsbarros43.github.io/OCI-Network-Basics-Site/

> Material de estudo não oficial. Não substitui a documentação oficial da Oracle.

## Estrutura do projeto

```
.
├── index.html                # Site (single page, navegação por seções via JS)
├── 404.html                  # Página de erro customizada
├── css/style.css             # Estilos
├── js/app.js                 # Navegação entre capítulos, busca, cópia de código
├── assets/img/                # Diagramas e capturas de tela usados nos capítulos
├── robots.txt / sitemap.xml  # SEO básico
└── .github/workflows/         # CI: checagem de links e imagens quebradas
```

## Desenvolvimento local

Como é um site estático, basta servir a pasta localmente:

```bash
python3 -m http.server 8080
# depois abra http://localhost:8080
```

## Contribuindo

1. Crie uma branch a partir de `main`.
2. Ao adicionar uma imagem, salve em `assets/img/` e referencie com caminho **relativo**: `assets/img/arquivo.png` (nunca `/docs/...` ou `assets/assets/...`).
3. Abra um Pull Request — o workflow `link-check` valida automaticamente se há links ou imagens quebradas antes do merge.

## Changelog

Ver [CHANGELOG.md](./CHANGELOG.md).

## Licença

Defina aqui a licença do conteúdo (ex.: código sob MIT, texto/diagramas sob CC BY-NC 4.0) — ainda não definida neste projeto.
