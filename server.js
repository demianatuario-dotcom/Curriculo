const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use((req, res, next) => {
    if (req.originalUrl === '/curriculo') {
        return res.redirect(301, '/curriculo/');
    }
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/curriculo', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// System prompt with Curriculum context
const SYSTEM_PROMPT = `
Você é a Assistente Virtual de Demian Lisboa Pereira.
Seu objetivo é responder a dúvidas sobre as habilidades, experiência profissional e formação acadêmica do Demian de forma gentil e prestativa.

[RESUMO DO DEMIAN]
Atuário (MIBA 1807) com mais de 15 anos de experiência em previdência complementar, governança corporativa e gestão de riscos. Atuação em projetos estratégicos na Caixa Econômica Federal.
Especialista em modelagem atuarial, solvência e liquidez, com apuração de reservas matemáticas conforme CPC 33 (R1) e normativos PREVIC.
Liderança em iniciativas de automação e inovação tecnológica, com desenvolvimento de soluções em Python, R, Excel/VBA e IA Generativa.
Vivência adicional em precificação, análise de custo benefício, controles internos e governança.
Também atua com Inteligência Artificial para pequenos negócios locais.

[COMPETÊNCIAS-CHAVE]
- Atuária, Risco e Governança: Previdência complementar fechada, CPC 33 (R1), PREVIC, IFRS, Solvência e liquidez.
- Tecnologia, Dados e Automação: Excel e VBA (avançado), Python e R (intermediário), Access (avançado), SQL (básico), IA Generativa aplicada a negócios.
- Idiomas: Inglês (avançado), Espanhol (básico).

[FORMAÇÃO]
- MBA em Finanças (IBMEC)
- Bacharelado em Atuária (UFRGS)
- Técnico em Sistemas de Informação (UFRGS)

[INSTRUÇÕES CRÍTICAS]
- Responda de forma concisa e profissional.
- Foque nas habilidades do Demian.
- Se o usuário perguntar sobre contato, telefone, demonstrar intenção de contratar serviços ou consultoria, recomende FORTEMENTE o WhatsApp do Demian: (61) 98117-1564.
`;

app.post(['/api/chat', '/curriculo/api/chat'], async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Using gemini-2.5-flash for fast responses
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Este é o seu system prompt. Siga estas instruções a partir de agora: " + SYSTEM_PROMPT }],
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido. Sou a assistente virtual do Demian e estou pronta para responder com base no currículo dele." }],
                }
            ],
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        res.json({ reply: responseText });
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: 'Failed to process chat request' });
    }
});

// Artigos Endpoint
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 5000,
    max: 3
});
pool.on('error', (err) => console.error('Database pool error:', err.message));

const FALLBACK_ARTIGOS = {
    1: [
        {
            id: 1,
            titulo: 'A Importância da Inteligência Atuarial na Profissão do Atuário',
            link: 'https://drive.google.com/file/d/1ECeRRknWMmV9qqCIjpEszV3z5v11s1Gs/view?usp=drive_link',
            imagem_url: '/images/ai_actuary.png',
            area: 'Tecnologia'
        },
        {
            id: 5,
            titulo: 'Governança Corporativa nos Fundos de Pensão',
            link: 'https://drive.google.com/file/d/1D_RFzaBXmiv588FA0L1mHUWePtmRUhFH/view?usp=drive_link',
            imagem_url: '',
            area: 'Governança'
        },
        {
            id: 7,
            titulo: 'Perícia Atuarial em Fundos de Pensão (Em Breve)',
            link: '#',
            imagem_url: '',
            area: 'Judicial'
        }
    ],
    2: [
        {
            id: 2,
            titulo: 'The Importance of Artificial Inteligence in the Actuarial Profession',
            link: 'https://drive.google.com/file/d/1d3ZzUkAE_E6CpedsSYlwAJJX3If2nX0V/view?usp=drive_link',
            imagem_url: '/images/ai_actuary.png',
            area: 'Tecnologia'
        },
        {
            id: 6,
            titulo: 'Corporate Governance in Pension Funds',
            link: 'https://drive.google.com/file/d/1Q2XBj0P4F8P9GC-dbF-kZ_99Xg5E7lkE/view?usp=drive_link',
            imagem_url: '',
            area: 'Governança'
        },
        {
            id: 8,
            titulo: 'Actuarial Forensics in Pension Funds (Coming Soon)',
            link: '#',
            imagem_url: '',
            area: 'Judicial'
        }
    ]
};

app.get(['/api/artigos', '/curriculo/api/artigos'], async (req, res) => {
    const langCode = req.query.lang === '2' ? 2 : 1;
    try {
        const result = await pool.query('SELECT id, titulo, link, imagem_url, area FROM artigos WHERE idioma = $1 ORDER BY area ASC, id ASC', [langCode]);
        if (result.rows && result.rows.length > 0) {
            return res.json(result.rows);
        }
        res.json(FALLBACK_ARTIGOS[langCode] || []);
    } catch (error) {
        console.error("Error fetching articles, using fallback:", error.message);
        res.json(FALLBACK_ARTIGOS[langCode] || []);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
