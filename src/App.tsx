import { useEffect, useMemo, useState } from 'react';
import martaLogo from './assets/images/marta_rizzini_logo2.svg';
import heroImage from './assets/images/hero2.png';

const SECTION_TOP_PADDING = 150;
const WHATSAPP_NUMBER = '5598999999999';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Dra. Marta! Gostaria de agendar uma avaliação de fisioterapia pélvica.'
);

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Dra. Marta', href: '#dra-marta' },
  { label: 'Como posso ajudar', href: '#como-posso-ajudar' },
  { label: 'Programa', href: '#plano' },
  { label: 'Contato', href: '#contato' },
];

const credentials = [
  {
    value: '+30 anos',
    label: 'de atuação dedicada à fisioterapia pélvica',
  },
  {
    value: 'Mestrado e doutorado',
    label: 'formação acadêmica sólida e visão científica',
  },
  {
    value: 'Especializações',
    label: 'conhecimento direcionado à saúde pélvica',
  },
];

const expertiseAreas = [
  {
    icon: '♀',
    title: 'Saúde Pélvica Feminina',
    subtitle:
      'Tratamento especializado para as principais disfunções do assoalho pélvico feminino, com foco em funcionalidade, autonomia e qualidade de vida.',
    items: [
      'Incontinência urinária de esforço e/ou urgência',
      'Síndrome Geniturinária da Menopausa',
      'Prolapsos pélvicos de bexiga, útero e/ou reto',
      'Medição, adaptação e acompanhamento do uso de pessário',
      'Constipação intestinal',
      'Anismo',
      'Incontinência fecal',
      'Pré e pós-operatório de endometriose',
      'Dor pélvica crônica',
      'Transtornos sexuais relacionados à dor',
      'Acompanhamento pré e pós-parto',
    ],
  },
  {
    icon: '♂',
    title: 'Saúde Pélvica Masculina',
    subtitle:
      'Acompanhamento fisioterapêutico para homens em diferentes fases do cuidado urológico, intestinal e da saúde pélvica.',
    items: [
      'Pré e pós-operatório de cirurgia da próstata',
      'Bexiga hiperativa',
      'Dor pélvica crônica',
      'Constipação intestinal',
      'Anismo',
      'Incontinência fecal',
    ],
  },
  {
    icon: '✦',
    title: 'Saúde Pélvica Infantil',
    subtitle:
      'Tratamento humanizado das principais alterações urinárias e intestinais da infância, com orientação à criança e à família.',
    items: [
      'Disfunções miccionais',
      'Enurese — xixi na cama durante o sono',
      'Escapes urinários diurnos',
      'Infecções urinárias de repetição',
      'Constipação intestinal',
      'Anismo',
      'Escapes fecais',
      'Incontinência fecal',
    ],
  },
];

const knowledgeCards = [
  {
    number: '01',
    title: 'Anatomia e função do assoalho pélvico',
    text: 'Compreensão da musculatura que sustenta órgãos pélvicos, participa da continência e pode ser treinada com precisão.',
  },
  {
    number: '02',
    title: 'Reabilitação pélvica',
    text: 'Treino muscular, uroterapia, educação corporal, diário miccional, biofeedback, eletroestimulação e progressão funcional.',
  },
  {
    number: '03',
    title: 'Visão integrada do paciente',
    text: 'Análise da rotina, hábitos, sono, intestino, hidratação, histórico clínico, emocional e objetivos pessoais antes de definir a conduta.',
  },
  {
    number: '04',
    title: 'Recursos terapêuticos especializados',
    text: 'Uso criterioso de eletromiografia, biofeedback, eletroestimulação, treino funcional e educação em saúde para favorecer autonomia.',
  },
];

const approachSteps = [
  {
    title: 'Escuta clínica cuidadosa',
    text: 'O primeiro passo é entender sintomas, rotina, histórico, medos, limitações e expectativas do paciente.',
  },
  {
    title: 'Avaliação funcional',
    text: 'A avaliação identifica força, coordenação, resistência, hábitos urinários e fatores que podem irritar a bexiga ou sobrecarregar a pelve.',
  },
  {
    title: 'Programa individual',
    text: 'A conduta é construída de acordo com a causa, a gravidade, o momento de vida e a capacidade de adesão ao tratamento.',
  },
  {
    title: 'Educação e autonomia',
    text: 'O paciente aprende sobre o próprio corpo, participa do processo e evolui para aplicar as estratégias no dia a dia.',
  },
];

const conditions = [
  'Perda urinária ao tossir, espirrar, rir ou fazer exercícios',
  'Urgência para urinar e dificuldade de chegar ao banheiro a tempo',
  'Aumento da frequência urinária e noctúria',
  'Perdas urinárias mistas: esforço e urgência',
  'Fraqueza do assoalho pélvico no pós-parto ou menopausa',
  'Perda urinária após cirurgia de próstata',
  'Preparo pré-cirúrgico para cirurgia de próstata',
  'Bexiga hiperativa e insegurança nas atividades diárias',
];

const programPillars = [
  {
    title: 'Avaliação e diagnóstico funcional',
    text: 'História clínica, sintomas, avaliação muscular, diário miccional e exames de Eletromiografia dos músculos do assoalho pélvico.',
  },
  {
    title: 'Treinamento dos músculos do assoalho pélvico',
    text: 'Concientização e percepção da musculatura pélvica; ganho de força, potência e resistência dos músculos do assoalho pélvico.',
  },
  {
    title: 'Biofeedback eletromiográfico',
    text: 'Recurso para visualizar a contração, confirmar se o músculo certo está sendo ativado e potencializar o aprendizado da contração e do relaxamento dos músculos do assoalho pélvico.',
  },
  {
    title: 'Eletroestimulação e neuromodulação',
    text: 'Ferramentas complementares quando há musculatura muito fraca ou bexiga hiperativa, sempre conforme avaliação.',
  },
  {
    title: 'Sinésioterapia funcional integrativa',
    text: 'O objetvo é integrar o diafrágma respiratório, músculos abdominais e do assoalho pélvico, no sentido de gerar perfeita funcionalidade do trato urinário e intestinal.',
  },
  {
    title: 'Acompanhamento e material educativo',
    text: 'Sessões semanais, orientações, acompanhamento próximo, grupo de suporte e integração com outros profissionais quando necessário.',
  },
];

const timeline = [
  ['Semanas 1–2', 'Avaliação, entendimento do caso e aprendizado da contração correta.'],
  ['Semanas 3–6', 'Rotina diária em casa, sessões semanais e ajustes de hábitos.'],
  ['Semanas 6–12', 'Primeiras melhoras perceptíveis na segurança e na continência.'],
  ['3 meses +', 'Ganhos consolidados, autonomia e plano de manutenção.'],
];

const habits = [
  ['Hidratação adequada', 'Beber pouca água pode piorar a irritação da bexiga e beber muita água pode gerar aumento da frequência urinária tanto de dia quanto à noite'],
  ['Menos irritantes vesicais', 'Café, álcool e refrigerantes podem aumentar urgência em algumas pessoas.'],
  ['Intestino funcionando bem', 'A constipação sobrecarrega o assoalho pélvico e pode piorar sintomas.'],
  ['Exercícios com constância', 'A regularidade costuma importar mais do que a intensidade.'],
];

const faqs = [
  {
    question: 'O site é sobre a Dra. Marta ou sobre o programa?',
    answer:
      'O foco principal é a Dra. Marta: sua experiência, formação, conhecimento e forma de cuidar. O programa aparece como uma solução estruturada criada a partir dessa experiência.',
  },
  {
    question: 'A fisioterapia pélvica atende homens, mulheres e crianças?',
    answer:
      'Sim. A atuação contempla diferentes situações da saúde feminina, masculina e infantil sempre com avaliação individualizada.',
  },
  {
    question: 'O Programa Reconquiste o Controle substitui uma consulta?',
    answer:
      'Não. O programa começa com avaliação profissional. A partir dela, a Dra. Marta define as estratégias mais adequadas para cada caso.',
  },
  {
    question: 'É possível melhorar a perda urinária sem cirurgia?',
    answer:
      'A Fisioterapia Pélvica é considerada o tratamento de primeira linha para todos os tipos de incontinência e distúrbios dolorosos na pélvis (nível de evidência 1A [ICS/EAU]).',
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apenas adiciona a classe uma vez, nunca remove
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);

        if (intersecting.length > 0) {
          const topMost = intersecting.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActive(`#${topMost.target.id}`);
        }
      },
      {
        rootMargin: '-96px 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return active;
}

function scrollToSection(href: string) {
  const section = document.querySelector(href);
  if (!section) return;

  const header = document.querySelector('.site-header') as HTMLElement | null;
  const headerOffset = header ? header.offsetHeight + 24 : 96;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const targetTop = href === '#inicio'
    ? 0
    : Math.max(sectionTop - headerOffset + SECTION_TOP_PADDING, 0);

  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={(event) => handleClick(event, '#inicio')} aria-label="Ir para o início">
        <img className="brand-logo" src={martaLogo} alt="Dra. Marta Rizzini" />
      </a>

      <button
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((state) => !state)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            className={active === item.href ? 'is-active' : ''}
            href={item.href}
            onClick={(event) => handleClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-cta"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Agendar avaliação
        </a>
      </nav>
    </header>
  );
}

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

function SectionTitle({ eyebrow, title, description, center = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${center ? 'center' : ''}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="decorated-title">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

interface WhatsAppButtonProps {
  children: React.ReactNode;
  variant?: string;
}

function WhatsAppButton({ children, variant = 'primary' }: WhatsAppButtonProps) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function App() {
  useRevealOnScroll();

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero page-section">
          <div className="hero-particles" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </div>
          <div className="hero-wash" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="hero-kicker">Dra. Marta Rizzini · Fisioterapia Pélvica</span>
              <h1>Experiência, ciência e acolhimento no cuidado da saúde pélvica</h1>
              <p>
                Um cuidado centrado na trajetória, na formação e na forma de conduzir cada paciente com discrição, segurança, acolhimento e clareza.
              </p>

              <div className="hero-actions">
                <WhatsAppButton>Agendar avaliação</WhatsAppButton>
                <a className="btn btn-soft" href="#dra-marta" onClick={(event) => { event.preventDefault(); scrollToSection('#dra-marta'); }}>
                  Conhecer a Dra. Marta
                </a>
              </div>
            </div>

            <aside className="portrait-card" data-reveal>
              <div className="portrait-frame">
                <img className="portrait-image" src={heroImage} alt="Dra. Marta Rizzini" />
              </div>
              <div className="portrait-content">
                <span>Especialista em cuidado pélvico</span>
                <strong>Dra. Marta Rizzini</strong>
                <p>Mais de três décadas dedicadas à fisioterapia pélvica, unindo conhecimento científico e atendimento acolhedor.</p>
              </div>
            </aside>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="credentials-strip" aria-label="Credenciais da Dra. Marta">
          <div className="container credentials-grid">
            {credentials.map((item) => (
              <article className="credential-card" key={item.value} data-reveal>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="dra-marta" className="section page-section">
          <div className="container about-grid">
            <div data-reveal>
              <span className="eyebrow">A protagonista do cuidado</span>
              <h2 className="decorated-title">A experiência da Dra. Marta é o coração deste site</h2>
              <p className="lead">
                Antes de qualquer protocolo, existe uma profissional que conduz o cuidado. A Dra. Marta é apresentada como referência: experiência clínica, formação acadêmica consistente, domínio da fisioterapia pélvica e comunicação leve para temas que são sentidos como vergonha e insegurança.
              </p>
              <p>
                Sua atuação une conhecimento, escuta e direção clínica. O programa de controle urinário e das disfunções dolorosas na pélvis aparece como uma solução especial criada a partir dessa bagagem profissional.
              </p>
            </div>

            <div className="signature-panel" data-reveal>
              <span className="panel-label">Como ela se posiciona</span>
              <h3>Uma profissional que explica, acolhe e guia.</h3>
              <p>
                A abordagem evita promessas exageradas e valoriza avaliação individualizada, educação do paciente,
                acompanhamento contínuo e integração com outros profissionais quando necessário.
              </p>
              <div className="signature-line">Dra. Marta Rizzini</div>
            </div>
          </div>
        </section>

        <section id="conhecimento" className="section soft-section page-section">
          <div className="container">
            <SectionTitle
              eyebrow="Conhecimento aplicado à prática"
              title="É o que sustenta a autoridade da Dra. Marta"
              description="A formação e a experiência ganham força quando são traduzidas em cuidado prático, linguagem clara e condutas personalizadas."
              center
            />

            <div className="knowledge-grid">
              {knowledgeCards.map((card) => (
                <article className="knowledge-card" key={card.title} data-reveal>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-posso-ajudar" className="section expertise-section page-section">
          <div className="container">
            <SectionTitle
              eyebrow="Áreas de atuação"
              title="Como posso ajudar você?"
              description="A fisioterapia pélvica atua em diferentes fases da vida. A Dra. Marta oferece avaliação individualizada e tratamento baseado em evidências para mulheres, homens e crianças."
              center
            />

            <div className="expertise-grid">
              {expertiseAreas.map((area, areaIndex) => (
                <article
                  className="expertise-card"
                  key={area.title}
                  data-reveal
                  style={{ '--expertise-delay': `${areaIndex * 90}ms` } as React.CSSProperties}
                >
                  <div className="expertise-card-header">
                    <span className="expertise-icon" aria-hidden="true">{area.icon}</span>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.subtitle}</p>
                    </div>
                  </div>

                  <ul className="expertise-list">
                    {area.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        style={{ '--item-delay': `${itemIndex * 45}ms` } as React.CSSProperties}
                      >
                        <span className="expertise-check" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="abordagem" className="section page-section">
          <div className="container approach-grid">
            <div data-reveal>
              <span className="eyebrow">Abordagem clínica</span>
              <h2 className="decorated-title">O método começa pela pessoa, não pelo sintoma</h2>
              <p className="lead">
                Perda urinária, urgência, noctúria ou insegurança na rotina não são tratados como uma queixa isolada.
                A Dra. Marta avalia contexto, função muscular, hábitos, rotina e impacto emocional para construir um
                caminho possível para cada paciente.
              </p>
              <div className="condition-box">
                <strong>Situações que podem chegar ao consultório</strong>
                <div className="condition-list">
                  {conditions.map((condition) => (
                    <span key={condition}>{condition}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="approach-steps">
              {approachSteps.map((step, index) => (
                <article className="approach-step" key={step.title} data-reveal>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section">
          <div className="container quote-card" data-reveal>
            <span className="eyebrow">Mensagem central</span>
            <blockquote>
              “Você não precisa conviver com a perda urinária e/ou dores pélvicas em silêncio. O primeiro passo é compreender o que está
              acontecendo e procurar uma avaliação conduzida com técnica, respeito e acolhimento.”
            </blockquote>
          </div>
        </section>

        <section id="plano" className="section program-section page-section">
          <div className="container program-hero" data-reveal>
            <span className="eyebrow">A cereja do bolo</span>
            <h2 className="decorated-title">Programa Reconquiste o Controle</h2>
            <p>
              O programa aparece como uma solução estruturada para o controle da bexiga, do intestino e das dores pélvicas. 
              Ele reúne avaliação, educação, recursos terapêuticos, acompanhamento e progressão para a rotina.
            </p>
          </div>

          <div className="container program-layout">
            <div className="program-main">
              <h3>O que o programa organiza</h3>
              <div className="program-pillars">
                {programPillars.map((pillar) => (
                  <article className="program-pillar" key={pillar.title} data-reveal>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="program-aside" data-reveal>
              <h3>Para quem pode fazer sentido</h3>
              <ul>
                <li>Mulheres com incontinência de esforço, urgência ou mista.</li>
                <li>Mulheres no pós-parto, menopausa ou com sintomas de bexiga hiperativa.</li>
                <li>Homens com perda urinária após cirurgia de próstata.</li>
                <li>Homens em preparo pré-cirúrgico ou com perda de força associada ao envelhecimento.</li>
              </ul>
              <WhatsAppButton variant="light">Tenho interesse no programa</WhatsAppButton>
            </aside>
          </div>
        </section>

        <section className="section timeline-section">
          <div className="container timeline-grid">
            <div data-reveal>
              <span className="eyebrow">Ritmo do tratamento</span>
              <h2 className="decorated-title">Uma evolução acompanhada, sem pressa e com resultados reais</h2>
              <p>
                Cada pessoa tem seu ritmo. A expectativa é comunicada com responsabilidade: constância, sessões, ajustes de rotina e evolução progressiva são mais importantes do que prometer resultado imediato.
              </p>
            </div>

            <div className="timeline-list">
              {timeline.map(([period, text]) => (
                <article key={period} data-reveal>
                  <strong>{period}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section habits-section">
          <div className="container">
            <SectionTitle
              eyebrow="Educação em saúde"
              title="Pequenas orientações que reforçam o cuidado"
              description="Conteúdos educativos simples ajudam o paciente a entender melhor o próprio corpo e melhorar sua qualidade de vida."
              center
            />

            <div className="habit-grid">
              {habits.map(([title, text]) => (
                <article className="habit-card" key={title} data-reveal>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <SectionTitle
              eyebrow="Dúvidas frequentes"
              title="Respostas com clareza e cuidado"
              description="Respostas simples para reforçar segurança, clareza e confiança antes da avaliação especializada."
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} data-reveal>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section page-section">
          <div className="container contact-grid">
            <div data-reveal>
              <span className="eyebrow eyebrow-light">Agende sua avaliação</span>
              <h2 className="decorated-title">Converse com quem tem experiência para orientar o seu caso.</h2>
              <p>
                O contato final reforça a Dra. Marta como referência. O paciente não está “comprando um programa; está
                procurando uma profissional capaz de avaliar, explicar e conduzir o cuidado com segurança.
              </p>
              <div className="contact-actions">
                <WhatsAppButton>Conversar no WhatsApp</WhatsAppButton>
                <a className="btn btn-outline-light" href="mailto:contato@martarizzini.com.br">
                  Enviar e-mail
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              data-reveal
              onSubmit={(event) => {
                event.preventDefault();
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');
              }}
            >
              <label>
                Nome
                <input type="text" placeholder="Seu nome" />
              </label>
              <label>
                Telefone
                <input type="tel" placeholder="(00) 00000-0000" />
              </label>
              <label>
                Principal interesse
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option>Conhecer a Dra. Marta</option>
                  <option>Agendar avaliação</option>
                  <option>Programa Reconquiste o Controle</option>
                  <option>Tirar uma dúvida</option>
                </select>
              </label>
              <label>
                Mensagem
                <textarea rows={4} placeholder="Conte brevemente o que você procura" />
              </label>
              <button className="btn btn-primary" type="submit">
                Solicitar contato
              </button>
              <small>Formulário visual. Integre depois ao backend ou a um serviço de e-mail.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Dra. Marta Rizzini</strong>
            <span>Fisioterapia Pélvica</span>
            <span>CREFITO - 3843-F</span>
          </div>
          <p>© {currentYear}. Conteúdo informativo. Não substitui avaliação profissional individualizada.</p>
        </div>
      </footer>
    </>
  );
}

export default App;