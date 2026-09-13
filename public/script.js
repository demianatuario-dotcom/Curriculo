/* ============================================
   PRECISION CRAFT — Client Logic
   i18n, Theme, Navigation, Skills Animation
   ============================================ */

// === Base Path for subpath routing ===
const apiBasePath = window.location.pathname.startsWith('/curriculo') ? '/curriculo' : '';

// === i18n TRANSLATIONS ===
const i18n = {
    pt: {
        role1: "Atuário",
        role2: "Tech & Automação",
        nav_about: "Sobre Mim",
        nav_skills: "Habilidades",
        nav_studies: "Meus Estudos",
        nav_assistant: "Assistente IA",
        theme_dark: "Tema Escuro",
        theme_light: "Tema Claro",
        about_title: "Sobre Mim",
        about_p1: 'Sou <strong>atuário (MIBA 1807)</strong>, com <strong>mais de 15 anos de estrada</strong> em previdência complementar, governança e gestão de riscos — e confesso: sempre fui movido por uma curiosidade quase obsessiva em entender o que os números estão tentando nos contar.',
        about_p2: 'Minha atuação profissional se desenvolveu na <strong>Caixa Econômica Federal</strong>, acompanhando de perto planos previdenciários patrocinados, avaliando reservas matemáticas, <strong>solvência, liquidez, riscos e equacionamentos</strong>, em conformidade com o CPC 33 (R1) e os normativos da PREVIC.',
        about_p3: 'Traduzir estruturas técnicas complexas em análises claras, consistentes e úteis para a tomada de decisão sempre foi parte central do meu trabalho. Com o tempo, percebi que bons modelos não bastam se os processos forem lentos, frágeis ou opacos. Foi aí que <strong>mergulhei de vez em automação, programação e transformação digital</strong>, utilizando Python, R, Excel/VBA e IA Generativa, não por modismo, mas para <strong>reduzir riscos, acelerar entregas e elevar o nível das análises</strong>.',
        about_p4: 'Hoje, aplico essa mesma mentalidade no <strong>desenvolvimento e hospedagem de websites e agentes de Inteligência Artificial integrados ao WhatsApp</strong>, voltados a pequenos negócios como salões, estúdios de beleza e barbearias. Esses agentes não apenas respondem mensagens: <strong>atuam com estratégia</strong>, usando técnicas de marketing para atrair, engajar e reter clientes — porque <em>tecnologia boa é aquela que gera resultado real</em>.',
        about_p5: 'Também atuei como <strong>Perito Judicial</strong> no TRT da 10ª Região e no TJDFT, elaborando laudos e pareceres técnicos atuariais, financeiros e previdenciários. Sempre acreditei que a perícia cumpre melhor seu papel quando alia <strong>rigor técnico, imparcialidade e linguagem acessível</strong> — afinal, conhecimento que não é compreendido não cumpre sua função social.',
        about_p6: 'No fim das contas, meu trabalho acontece na interseção entre <strong>atuária, tecnologia, IA e negócio</strong>. Gosto de modelos robustos, processos bem automatizados e decisões bem fundamentadas. Ah — e faço questão de que tudo isso seja bem explicado, porque, convenhamos: <strong>um bom gráfico e uma boa narrativa costumam valer mais do que cem páginas de números soltos</strong> 😉',
        experience_title: "Experiência",
        experience_role1: "Atuário / Coordenador de Projetos e Processos",
        experience_desc1: "Modelagem atuarial, solvência e liquidez. Desenvolvimento de automações e uso intensivo de IA Generativa para apoio analítico e redação técnica.",
        experience_role2: "Consultor de Soluções Digitais e IA",
        experience_desc2: "Desenvolvimento de agentes de IA integrados ao WhatsApp para atendimento automatizado de salões e clínicas, com foco em retenção de clientes.",
        experience_role3: "Perito Judicial",
        experience_desc3: "Elaboração de laudos e pareceres técnicos atuariais, financeiros e previdenciários. Apuração com rigor técnico em cálculos complexos, traduzindo resultados com clareza para o suporte às decisões judiciais.",
        education_title: "Formação Acadêmica",
        edu1_title: "MBA em Finanças",
        edu2_title: "Bacharelado em Atuária",
        edu3_title: "Técnico em Sist. de Informação",
        skills_title: "Habilidades",
        cat1_title: "Atuária & Risco",
        cat2_title: "Tecnologia & Dados",
        cat3_title: "IA Generativa",
        cat4_title: "Idiomas",
        sk1_1: "Previdência Complementar Fechada",
        sk1_2: "CPC 33 (R1) / PREVIC / IFRS",
        sk1_3: "Solvência e Liquidez",
        sk1_4: "Governança Corporativa",
        sk2_1: "Excel / VBA",
        sk2_2: "Access",
        sk2_3: "Python / R",
        sk3_1: "Agentes Inteligentes (Gemini, GPT, Copilot)",
        sk3_2: "Automação WhatsApp (N8N)",
        sk3_3: "Desenvolvimento Web & Hospedagem",
        sk4_1: "Português",
        sk4_2: "Inglês",
        sk4_3: "Espanhol",
        level_advanced: "Avançado",
        level_intermediate: "Intermediário",
        level_basic: "Básico",
        level_native: "Nativo",
        studies_title: "Meus Estudos & Projetos",
        studies_intro: "Um espaço reservado para publicações, artigos, anotações de estudo e materiais de desenvolvimento contínuo em tecnologia, dados e atuária.",
        studies_empty: "Novos materiais serão publicados aqui em breve.",
        promo_section_title: "Minha Empresa",
        promo_badge: "MINHA EMPRESA",
        promo_title: "Domino Automate — Automação, IA e Web",
        promo_desc: "Fundador da Domino Automate, empresa especializada em soluções de IA de alta performance para pequenos e médios negócios. Desenvolvemos agentes autônomos integrados ao WhatsApp, automações com N8N e motores customizados em Python para escalar operações comerciais.",
        promo_stat1_val: "-90%",
        promo_stat1_lbl: "Tempo de Resposta",
        promo_stat2_val: "+28%",
        promo_stat2_lbl: "Conversão Comercial",
        promo_stat3_lbl: "Disponibilidade",
        promo_stat4_val: "-40%",
        promo_stat4_lbl: "Custo Operacional",
        promo_cta: 'Conhecer a Domino Automate <i class="fa-solid fa-arrow-right"></i>',
        assistant_title: "Assistente de I.A.",
        assistant_intro: "Desenvolvi este assistente inteligente usando a API do Google Gemini. Ele conhece todo o meu currículo e habilidades. Fique à vontade para perguntar!",
        assistant_welcome: "Olá! Sou a assistente virtual do Demian. Como posso te ajudar a conhecer melhor as habilidades e a trajetória dele hoje?",
        assistant_placeholder: "Ex: Qual é a experiência do Demian com Python?",
        assistant_typing: "Digitando...",
        assistant_error1: "Desculpe, ocorreu um erro na comunicação. Tente novamente.",
        assistant_error2: "Erro na conexão com o servidor. O serviço pode estar offline."
    },
    en: {
        role1: "Actuary",
        role2: "Tech & Automation",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_studies: "My Studies",
        nav_assistant: "AI Assistant",
        theme_dark: "Dark Theme",
        theme_light: "Light Theme",
        about_title: "About Me",
        about_p1: 'I am an <strong>actuary (MIBA 1807)</strong> with over <strong>15 years of experience</strong> in supplementary pension, corporate governance, and risk management — driven by an almost obsessive curiosity to understand what numbers are trying to tell us.',
        about_p2: 'My professional career has been developed at <strong>Caixa Econômica Federal</strong>, closely following sponsored pension plans, evaluating mathematical reserves, <strong>solvency, liquidity, risks and funding</strong>, in accordance with CPC 33 (R1) and PREVIC regulations.',
        about_p3: 'Translating complex technical structures into clear, consistent, and useful analyses for decision-making has always been central to my work. Over time, I realized that good models are not enough if processes are slow, fragile, or opaque. That\'s when I <strong>dived into automation, programming, and digital transformation</strong>, using Python, R, Excel/VBA, and Generative AI — not as a trend, but to <strong>reduce risks, accelerate deliveries, and raise the level of analyses</strong>.',
        about_p4: 'Today, I apply this same mindset to the <strong>development and hosting of websites and AI agents integrated with WhatsApp</strong>, aimed at small businesses such as salons, beauty studios, and barbershops. These agents don\'t just answer messages: <strong>they act strategically</strong>, using marketing techniques to attract, engage, and retain clients — because <em>good technology is the kind that generates real results</em>.',
        about_p5: 'I have also worked as an <strong>Expert Witness</strong> at the TRT 10th Region and TJDFT, preparing actuarial, financial, and pension technical reports and opinions. I have always believed that forensic work fulfills its role best when it combines <strong>technical rigor, impartiality, and accessible language</strong> — after all, knowledge that is not understood does not fulfill its social function.',
        about_p6: 'At the end of the day, my work happens at the intersection of <strong>actuarial science, technology, AI, and business</strong>. I like robust models, well-automated processes, and well-founded decisions. Oh — and I make a point of making sure all of this is well explained, because, let\'s face it: <strong>a good chart and a good narrative are usually worth more than a hundred pages of loose numbers</strong> 😉',
        experience_title: "Experience",
        experience_role1: "Actuary / Projects and Processes Coordinator",
        experience_desc1: "Actuarial modeling, solvency, and liquidity. Automation development and intensive use of Generative AI for analytical support and technical writing.",
        experience_role2: "Digital Solutions and AI Consultant",
        experience_desc2: "Development of AI agents integrated with WhatsApp for automated customer service in salons and clinics, focusing on customer retention.",
        experience_role3: "Expert Witness",
        experience_desc3: "Preparation of actuarial, financial, and pension technical reports and opinions. Rigorous technical calculations, translating results clearly to support judicial decisions.",
        education_title: "Education",
        edu1_title: "MBA in Finance",
        edu2_title: "Bachelor in Actuarial Science",
        edu3_title: "IT Systems Technician",
        skills_title: "Skills",
        cat1_title: "Actuarial & Risk",
        cat2_title: "Technology & Data",
        cat3_title: "Generative AI",
        cat4_title: "Languages",
        sk1_1: "Closed Supplementary Pension",
        sk1_2: "CPC 33 (R1) / PREVIC / IFRS",
        sk1_3: "Solvency and Liquidity",
        sk1_4: "Corporate Governance",
        sk2_1: "Excel / VBA",
        sk2_2: "Access",
        sk2_3: "Python / R",
        sk3_1: "Intelligent Agents (Gemini, GPT, Copilot)",
        sk3_2: "WhatsApp Automation (N8N)",
        sk3_3: "Web Development & Hosting",
        sk4_1: "Portuguese",
        sk4_2: "English",
        sk4_3: "Spanish",
        level_advanced: "Advanced",
        level_intermediate: "Intermediate",
        level_basic: "Basic",
        level_native: "Native",
        studies_title: "My Studies & Projects",
        studies_intro: "A space reserved for publications, articles, study notes, and continuous development materials in technology, data, and actuarial science.",
        studies_empty: "New materials will be published here soon.",
        promo_section_title: "My Company",
        promo_badge: "MY COMPANY",
        promo_title: "Domino Automate — Automation, AI & Web",
        promo_desc: "Founder of Domino Automate, a company specialized in high-performance AI solutions for small and medium businesses. We develop autonomous agents integrated with WhatsApp, N8N automations, and custom Python engines to scale commercial operations.",
        promo_stat1_val: "-90%",
        promo_stat1_lbl: "Response Time",
        promo_stat2_val: "+28%",
        promo_stat2_lbl: "Sales Conversion",
        promo_stat3_lbl: "Availability",
        promo_stat4_val: "-40%",
        promo_stat4_lbl: "Operating Cost",
        promo_cta: 'Discover Domino Automate <i class="fa-solid fa-arrow-right"></i>',
        assistant_title: "A.I. Assistant",
        assistant_intro: "I developed this intelligent assistant using the Google Gemini API. It knows my entire resume and skills. Feel free to ask anything!",
        assistant_welcome: "Hello! I am Demian's virtual assistant. How can I help you better understand his skills and trajectory today?",
        assistant_placeholder: "Ex: What is Demian's experience with Python?",
        assistant_typing: "Typing...",
        assistant_error1: "Sorry, a communication error occurred. Please try again.",
        assistant_error2: "Server connection error. The service might be offline."
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';

// === LANGUAGE ===
function updateLanguage() {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][key]) {
            el.setAttribute('placeholder', i18n[currentLang][key]);
        }
    });

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.innerHTML = currentLang === 'pt'
            ? '<span class="flag-icon">🇧🇷</span> Português'
            : '<span class="flag-icon">🇺🇸</span> English';
    }

    const isDark = document.body.classList.contains('dark-mode');
    updateThemeButtonText(isDark);

    fetchArtigos(currentLang);
}

// === ARTICLES (GROUPED BY AREA) ===
async function fetchArtigos(lang) {
    const gallery = document.getElementById('artigos-gallery');
    const emptyState = document.getElementById('artigos-empty');
    if (!gallery) return;

    const langCode = lang === 'pt' ? 1 : 2;

    try {
        const response = await fetch(`${apiBasePath}/api/artigos?lang=${langCode}`);
        if (!response.ok) throw new Error('Failed to fetch articles');
        const artigos = await response.json();

        gallery.innerHTML = '';

        if (artigos.length === 0) {
            gallery.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            gallery.style.display = 'block';
            emptyState.style.display = 'none';

            // Group by area
            const grouped = {};
            artigos.forEach(item => {
                const area = item.area || (lang === 'pt' ? 'Outros' : 'Other');
                if (!grouped[area]) grouped[area] = [];
                grouped[area].push(item);
            });

            // Render each area group
            Object.keys(grouped).forEach(area => {
                const groupHTML = `
                    <div class="area-group reveal-item">
                        <h3 class="area-group-header"><i class="fa-solid fa-folder"></i> ${area}</h3>
                        <div class="artigos-grid">
                            ${grouped[area].map(item => `
                                <a href="${item.link}" target="_blank" rel="noopener" class="artigo-item">
                                    ${item.imagem_url
                                        ? `<img src="${item.imagem_url}" alt="${item.titulo}" class="artigo-img">`
                                        : `<div class="artigo-img-fallback"><i class="fa-solid fa-file-lines"></i></div>`
                                    }
                                    <div class="artigo-overlay">
                                        <h3 class="artigo-title">${item.titulo}</h3>
                                        <i class="fa-solid fa-arrow-up-right-from-square artigo-icon"></i>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `;
                gallery.insertAdjacentHTML('beforeend', groupHTML);
            });

            initRevealObserver();
        }
    } catch (error) {
        console.error('Error loading articles:', error);
        gallery.innerHTML = '<p style="color: var(--text-secondary);">Erro ao carregar materiais.</p>';
    }
}

// === THEME ===
function updateThemeButtonText(isDark) {
    const themeBtnText = document.getElementById('theme-text');
    if (!themeBtnText) return;
    themeBtnText.textContent = isDark
        ? i18n[currentLang]['theme_light']
        : i18n[currentLang]['theme_dark'];
}

function updateThemeButton(isDark) {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    themeBtn.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i> <span id="theme-text">' + i18n[currentLang]['theme_light'] + '</span>'
        : '<i class="fa-solid fa-moon"></i> <span id="theme-text">' + i18n[currentLang]['theme_dark'] + '</span>';
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    // Language
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            updateLanguage();
        });
    }
    updateLanguage();

    // Theme
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.replace('light-mode', 'dark-mode');
        updateThemeButton(true);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            if (isDark) {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('theme', 'light');
                updateThemeButton(false);
            } else {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('theme', 'dark');
                updateThemeButton(true);
            }
        });
    }

    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            if (targetId) {
                e.preventDefault();

                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                sections.forEach(sec => sec.classList.remove('active-section'));
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active-section');

                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Re-observe reveal items in newly active section
                setTimeout(() => {
                    initRevealObserver();
                    animateSkillBars(targetSection);
                }, 50);

                // Close mobile sidebar
                if (sidebar) sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('open');
            }
        });
    });

    // Mobile hamburger
    const hamburger = document.getElementById('hamburger-btn');
    if (hamburger && sidebar && overlay) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }

    // Chat
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Init reveal animations
    initRevealObserver();

    // Animate skill bars if skills section is active
    const activeSection = document.querySelector('.section.active-section');
    if (activeSection) animateSkillBars(activeSection);
});

// === INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ===
let revealObserver = null;

function initRevealObserver() {
    if (revealObserver) revealObserver.disconnect();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
        return;
    }

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-item:not(.revealed)').forEach(el => {
        revealObserver.observe(el);
    });
}

// === SKILL BAR ANIMATION ===
function animateSkillBars(container) {
    const fills = container.querySelectorAll('.skill-fill');
    if (!fills.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const level = fill.getAttribute('data-level') || 0;
                if (prefersReduced) {
                    fill.style.transition = 'none';
                }
                requestAnimationFrame(() => {
                    fill.style.width = level + '%';
                });
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.2 });

    fills.forEach(fill => {
        fill.style.width = '0%';
        observer.observe(fill);
    });
}

// === AI CHAT ===
function appendMessage(text, isUser) {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;

    let formattedText = text;
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');

    msgDiv.innerHTML = `
        <div class="message-avatar"><i class="fa-solid ${isUser ? 'fa-user' : 'fa-robot'}"></i></div>
        <div class="message-content">${formattedText}</div>
    `;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');

    if (!chatInput || !chatBox) return;
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, true);
    chatInput.value = '';
    chatInput.disabled = true;
    sendBtn.disabled = true;

    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai-message';
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = `
        <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="message-content">${i18n[currentLang]['assistant_typing']}</div>
    `;
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch(`${apiBasePath}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();
        const loader = document.getElementById(loadingId);
        if (loader) loader.remove();

        if (response.ok && data.reply) {
            appendMessage(data.reply, false);
        } else {
            appendMessage(i18n[currentLang]['assistant_error1'], false);
        }
    } catch (error) {
        const loader = document.getElementById(loadingId);
        if (loader) loader.remove();
        appendMessage(i18n[currentLang]['assistant_error2'], false);
        console.error(error);
    } finally {
        chatInput.disabled = false;
        sendBtn.disabled = false;
        chatInput.focus();
    }
}
