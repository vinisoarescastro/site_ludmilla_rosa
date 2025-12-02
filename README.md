# Ludmila Rosa - Site de Campanha Eleitoral

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/design-responsive-blueviolet)
![License](https://img.shields.io/badge/license-propriet%C3%A1rio-red)

**Link do projeto:** [ludmilarosa.com.br](https://ludmilarosa.com.br)

Site institucional e de campanha desenvolvido para a candidatura de Ludmila Rosa a vereadora por Goiânia nas eleições municipais de 2024, oferecendo plataforma digital completa para divulgação de propostas, biografia, captação de recursos e engajamento com eleitores.

---

## Sobre o Projeto

Landing page responsiva desenvolvida para campanha política real, integrando funcionalidades essenciais para comunicação com eleitores, divulgação de propostas e arrecadação de fundos. O projeto resolve o problema de centralizar toda a comunicação da campanha em um único hub digital profissional, eliminando a necessidade de múltiplas plataformas descentralizadas e facilitando o acesso dos eleitores às informações da candidata.

### Problema Resolvido
- **Centralização da comunicação política**: Plataforma única para biografia, propostas, contato e doações
- **Engajamento de eleitores**: Sistema de contato direto via WhatsApp, email e telefone
- **Transparência**: Apresentação clara e detalhada de propostas por área temática
- **Credibilidade**: Interface profissional que transmite seriedade e competência
- **Arrecadação**: Integração com plataforma de doações eleitorais
- **Acessibilidade**: Design responsivo garantindo acesso em qualquer dispositivo

---

## Funcionalidades Principais

| Funcionalidade | Descrição |
|----------------|-----------|
| **Hero Section** | Apresentação impactante com foto da candidata, slogan e CTA para propostas |
| **Biografia Completa** | Seção "Quem é Ludmila Rosa?" com trajetória pessoal e formação acadêmica |
| **Formação Acadêmica** | Destaque para qualificações: Ciência Política (UnB) e Direito (UFG) |
| **Sistema de Propostas** | Grid de cards com 8 eixos temáticos e página dedicada com detalhamento |
| **Call-to-Action de Doação** | Seção com parallax effect direcionando para plataforma de arrecadação |
| **Página de Propostas Detalhadas** | Documento completo com 7 pilares e ações específicas por área |
| **Modal de Agradecimento** | Pop-up automático exibindo resultado eleitoral (2.463 votos) |
| **Múltiplos Canais de Contato** | WhatsApp, email e telefone integrados com ícones e links diretos |
| **Menu Responsivo** | Navegação mobile com menu hamburger animado |
| **SEO Otimizado** | Meta tags Open Graph para compartilhamento em redes sociais |
| **Google Analytics** | Rastreamento de visitas e comportamento do usuário |
| **Design System Consistente** | Paleta de cores da campanha e tipografia customizada |

---

## Tecnologias Utilizadas

### Frontend
- **HTML5**: 
  - Estrutura semântica e acessível
  - Meta tags Open Graph para pré-visualização em redes sociais
  - Favicon customizado
- **CSS3**: 
  - CSS Grid e Flexbox para layouts complexos
  - CSS Variables para gerenciamento de paleta de cores
  - Media queries para responsividade mobile-first
  - Animações e transições CSS nativas
  - Gradientes lineares personalizados
  - Parallax scrolling effect
  - Tipografia customizada via @font-face (Heaters e Panton)
- **JavaScript (Vanilla)**: 
  - Manipulação de DOM
  - Modal system com exibição automática
  - Menu mobile com animação
  - Scroll effects
  - Redirecionamentos dinâmicos

### Design
- **Bootstrap Icons**: Biblioteca de ícones para redes sociais e contato
- **Google Fonts**: Open Sans para textos corridos
- **Fontes Customizadas**: 
  - Heaters (display/títulos)
  - Panton (corpo de texto)
- **Paleta de Cores Personalizada**:
  - Principal: `#e24894` (Rosa)
  - Secundária: `#18182f` (Azul escuro)
  - Terciária: `#f9f8f8` (Cinza claro)
  - Destaque: `#f18a1c` (Laranja)
  - Gradientes: Linear gradients rosa-laranja e rosa-vinho

### Ferramentas e Integrações
- **Google Analytics (GA4)**: Tracking code `G-4F0QEZPVBE`
- **Plataforma Elegis**: Sistema de arrecadação de doações eleitorais
- **WhatsApp Business API**: Integração para contato direto
- **Google Maps**: (preparado para integração futura)

### Hospedagem
- **Domínio Customizado**: ludmilarosa.com.br
- **CNAME Configuration**: Configuração DNS personalizada

---

## Estrutura do Projeto

```
ludmila-rosa/
│
├── css/
│   ├── style.css                    # Estilos principais da página inicial
│   ├── responsive.css               # Media queries para responsividade
│   ├── style-propostas.css          # Estilos da página de propostas
│   ├── responsive-propostas.css     # Responsividade das propostas
│   └── style-modal.css              # Estilos do modal de agradecimento
│
├── js/
│   ├── btn-menu-mob.js              # Lógica do menu mobile
│   ├── menu.js                      # Comportamento do menu fixo
│   └── modal.js                     # Sistema de modal automático
│
├── html/
│   ├── propostas.html               # Página dedicada de propostas
│   └── end.html                     # Página de encerramento (não utilizada)
│
├── img/                             # Assets visuais da campanha
│   ├── fotos-lud/                   # Fotos da candidata
│   ├── logo-com-numero/             # Variações do logo
│   └── page-propostas/              # Imagens ilustrativas das propostas
│
├── fonts/                           # Tipografia customizada
│   ├── Heaters.woff                 # Fonte display
│   └── Panton.woff                  # Fonte corpo
│
├── index.html                       # Página inicial
├── CNAME                            # Configuração de domínio
└── README.md                        # Documentação do projeto
```

---

## Destaques Técnicos

### Responsividade
- **Mobile-first approach**: Design otimizado prioritariamente para dispositivos móveis
- **Breakpoints estratégicos**: 
  - `@media (max-width: 900px)` - Transição tablet/desktop
  - `@media (max-width: 750px)` - Ajustes para tablets
  - `@media (max-width: 690px)` - Layout mobile
  - `@media (max-width: 380px)` - Dispositivos pequenos
- **Grid adaptativo**: Layouts que transitam de múltiplas colunas para coluna única
- **Menu hamburger**: Navegação mobile com animação suave
- **Imagens responsivas**: Alternância entre versões desktop e mobile

### Performance
- **Fontes otimizadas**: Preconnect e preload do Google Fonts
- **CSS eficiente**: Variáveis CSS para reutilização de valores
- **JavaScript leve**: Vanilla JS sem dependências externas (exceto Bootstrap Icons)
- **Carregamento assíncrono**: Google Analytics com async loading
- **Imagens otimizadas**: Formatos PNG para transparência e qualidade

### UX/UI
- **Navegação intuitiva**: Menu fixo no desktop, hamburger no mobile
- **Feedback visual**: Hover states com transições suaves (0.4s-0.5s)
- **Hierarquia visual clara**: Tipografia diferenciada para títulos (Heaters) e corpo (Panton)
- **Micro-interações**: Animações sutis que melhoram a experiência
- **CTAs estratégicos**: Botões de ação posicionados em pontos de conversão
- **Modal não-intrusivo**: Agradecimento ao eleitor com opção de fechar

### Integração de Terceiros
- **WhatsApp**: Link direto com mensagem pré-formatada
- **Email**: Mailto com assunto e corpo pré-preenchidos
- **Telefone**: Tel link para discagem direta em mobile
- **Plataforma Elegis**: Redirecionamento para página de doações oficial
- **Google Analytics**: Tracking completo de comportamento do usuário

### Arquitetura CSS
- **Modularização**: Separação de estilos por página e funcionalidade
- **Design System**: Variáveis CSS para cores, facilitando manutenção
- **Nomenclatura semântica**: Classes descritivas e organizadas
- **Gradientes dinâmicos**: Uso de gradientes lineares para identidade visual
- **Sticky positioning**: Elemento fixo na página de propostas

---

## Diferenciais do Projeto

- ✅ **100% responsivo**: Funciona perfeitamente em qualquer dispositivo
- ✅ **Zero dependências pesadas**: Código vanilla performático
- ✅ **Design profissional**: Interface que transmite credibilidade política
- ✅ **Código limpo**: Estrutura organizada e comentada
- ✅ **SEO otimizado**: Meta tags completas para compartilhamento
- ✅ **Solução completa**: Todas funcionalidades de campanha integradas
- ✅ **Domínio customizado**: Branding profissional com domínio próprio
- ✅ **Conformidade eleitoral**: CNPJ de candidatura e informações legais
- ✅ **Analytics integrado**: Rastreamento de métricas de campanha

---

## Métricas de Qualidade

- **Linhas de código**: ~2.400 (CSS), ~50 (JS), ~600 (HTML)
- **Páginas**: 2 principais (index + propostas) + 1 não utilizada
- **Arquivos CSS**: 5 (modularizados por funcionalidade)
- **Tempo de carregamento**: < 2 segundos
- **Compatibilidade**: Chrome, Firefox, Safari, Edge (últimas versões)
- **Responsividade**: 100% mobile-friendly
- **Breakpoints**: 4 níveis de responsividade
- **Componentes**: 10+ seções modulares

---

## Resultado da Campanha

O projeto foi utilizado durante toda a campanha eleitoral de 2024, servindo como hub central de comunicação digital. A candidata Ludmila Rosa obteve **2.463 votos** nas eleições municipais de Goiânia, demonstrando o alcance e efetividade da plataforma digital na conexão com os eleitores.

---

## Páginas do Site

### 1. Página Inicial (index.html)
- Hero section com apresentação da candidata
- Biografia completa em duas seções
- Grid de 8 propostas resumidas
- Seção de doações com parallax
- Múltiplos canais de contato
- Footer com redes sociais

### 2. Página de Propostas (propostas.html)
- Detalhamento completo de 7 pilares:
  - Centro de Goiânia
  - Saúde mental e inclusão social
  - Mulher + esporte feminino
  - Meio ambiente, sustentabilidade e cuidado animal
  - Cidade e qualidade de vida
  - Cultura e Arte
  - Mobilidade Urbana
  - Diversidade: Políticas para a Comunidade LGBTQIA+

---

## Desenvolvedor

**Vinicius Soares Castro**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinisoarescastro/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/vinisoarescastro)

- Assessor Especial de Desenvolvimento Web & Engenharia de Dados
- Câmara Municipal de Goiânia
- Bacharelando em Engenharia de Software, UFG
- Goiânia, Goiás, Brasil

---

## Contato da Campanha

- **WhatsApp**: [(62) 99824-0123](https://api.whatsapp.com/send?phone=5562998240123)
- **Email**: 2020ludmilarosa@gmail.com
- **Instagram**: [@eusouludmilarosa](https://www.instagram.com/eusouludmilarosa/)
- **Site**: [ludmilarosa.com.br](https://ludmilarosa.com.br)

---

## Licença

Este projeto foi desenvolvido para uso em campanha eleitoral real. O conteúdo é de propriedade exclusiva da Ludmila Rosa. O código está disponível para fins de portfólio e demonstração de habilidades técnicas.

**Propaganda Eleitoral**: Ludmila Rosa, Partido PSB  
**CNPJ Candidatura**: 56.380.138/0001-18

---

## Aprendizados e Competências Demonstradas

Este projeto demonstra competências em:

### Desenvolvimento Frontend
- **HTML5 Semântico**: Estruturação acessível e SEO-friendly
- **CSS3 Avançado**: Grid, Flexbox, animações, gradientes, variáveis CSS
- **JavaScript Vanilla**: Manipulação de DOM, eventos, modal system
- **Responsive Design**: Mobile-first com múltiplos breakpoints

### Design e UX
- **Interface profissional**: Layout que transmite credibilidade institucional
- **Design System**: Criação e aplicação consistente de paleta de cores
- **Tipografia customizada**: Integração de fontes web personalizadas
- **Micro-interações**: Animações e transições que melhoram a experiência

### Integração e Ferramentas
- **Google Analytics**: Implementação de tracking de campanha
- **APIs de Terceiros**: WhatsApp, Email, Telefone
- **Plataformas de Doação**: Integração com sistema eleitoral oficial
- **Bootstrap Icons**: Biblioteca de ícones profissionais

### Gestão de Projeto
- **Entrega completa**: Solução end-to-end para campanha política
- **Modularização**: Código organizado em múltiplos arquivos
- **Documentação**: Código comentado e estruturado
- **Versionamento**: Gestão de assets e arquivos
- **Deploy**: Configuração de domínio customizado

### Conformidade Legal
- **Transparência eleitoral**: CNPJ de candidatura visível
- **Informações obrigatórias**: Dados de propaganda eleitoral
- **Direitos autorais**: Licenciamento e propriedade intelectual

### Comunicação Política
- **Storytelling**: Narrativa biográfica engajadora
- **Apresentação de propostas**: Estruturação clara de plano de governo
- **Call-to-Action**: Estratégias de conversão para doações e engajamento
- **Multi-canal**: Integração de diversos pontos de contato

---
<div align="center">

**Desenvolvido com 💙 por Vinicius Soares Castro**

⭐ Se este projeto foi útil para seu portfólio ou estudo, considere dar uma estrela!

</div>
