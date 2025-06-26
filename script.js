// University data
const universities = [
    {
        id: 1,
        name: " USP-Universidade de São Paulo",
        shortName: "USP",
        type: "publica",
        location: "São Paulo, SP",
        image: "https://direito.usp.br/pca/arquivos/eeb5bf47643b_whatsapp-image-2022-07-25-at-16.29.33.jpeg",
        students: "90.000",
        courses: "300+",
        ranking: "#1",
        price: "Gratuito",
        priceValue: 0,
        description: "A maior e mais prestigiosa universidade do Brasil, reconhecida mundialmente pela excelência em ensino e pesquisa.",
        courses_offered: [
            { name: "Medicina", duration: "6 anos" },
            { name: "Engenharia Civil", duration: "5 anos" },
            { name: "Direito", duration: "5 anos" },
            { name: "Administração", duration: "4 anos" },
            { name: "Psicologia", duration: "5 anos" },
            { name: "Arquitetura", duration: "5 anos" }
        ],
        locations: [
            "Campus Cidade Universitária - São Paulo",
            "Campus Ribeirão Preto",
            "Campus São Carlos",
            "Campus Piracicaba"
        ],
        admission_methods: [
            { name: "FUVEST", description: "Vestibular tradicional da USP" },
            { name: "ENEM/SISU", description: "Sistema de Seleção Unificada" },
            { name: "Transferência", description: "Para alunos de outras instituições" }
        ],
        scholarships: ["ProUni", "Auxílio Permanência", "Bolsa Mérito"]
    },
    {
        id: 2,
        name: " UNICAMP-Universidade Estadual de Campinas",
        shortName: "UNICAMP",
        type: "publica",
        location: "Campinas, SP",
        image: "https://www.idis.org.br/wp-content/uploads/2021/03/Unicamp_ArthurCastro.png",
        students: "37.000",
        courses: "200+",
        ranking: "#2",
        price: "Gratuito",
        priceValue: 0,
        description: "Universidade pública de excelência, reconhecida pela qualidade de seus cursos e pesquisas inovadoras.",
        courses_offered: [
            { name: "Engenharia da Computação", duration: "5 anos" },
            { name: "Medicina", duration: "6 anos" },
            { name: "Economia", duration: "4 anos" },
            { name: "Física", duration: "4 anos" },
            { name: "Química", duration: "4 anos" },
            { name: "Biologia", duration: "4 anos" }
        ],
        locations: [
            "Campus Campinas",
            "Campus Piracicaba",
            "Campus Limeira"
        ],
        admission_methods: [
            { name: "Vestibular UNICAMP", description: "Processo seletivo próprio" },
            { name: "ENEM/SISU", description: "Vagas pelo SISU" },
            { name: "Vestibular Indígena", description: "Processo específico" }
        ],
        scholarships: ["Auxílio Social", "Bolsa Atividade", "Programa de Apoio Didático"]
    },
    {
        id: 3,
        name: " PUC-SP-Pontifícia Universidade Católica de São Paulo",
        shortName: "PUC-SP",
        type: "privada",
        location: "São Paulo, SP",
        image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/1022_8E57FE06B791363B-1.jpg?w=1200&h=900&crop=0",
        students: "25.000",
        courses: "150+",
        ranking: "#3",
        price: "R$ 2.800",
        priceValue: 2800,
        description: "Universidade católica de tradição e excelência, com forte atuação em áreas humanas e sociais.",
        courses_offered: [
            { name: "Psicologia", duration: "5 anos" },
            { name: "Direito", duration: "5 anos" },
            { name: "Administração", duration: "4 anos" },
            { name: "Comunicação Social", duration: "4 anos" },
            { name: "Serviço Social", duration: "4 anos" },
            { name: "Filosofia", duration: "4 anos" }
        ],
        locations: [
            "Campus Monte Alegre - São Paulo",
            "Campus Marquês de Paranaguá - São Paulo",
            "Campus Consolação - São Paulo"
        ],
        admission_methods: [
            { name: "Vestibular PUC", description: "Processo seletivo próprio" },
            { name: "ENEM", description: "Nota do ENEM" },
            { name: "Transferência Externa", description: "Para alunos de outras IES" }
        ],
        scholarships: ["ProUni", "Bolsa Filantropia", "Desconto Pontualidade", "Bolsa Mérito Acadêmico"]
    },
    {
        id: 4,
        name: " FIAP-Faculdade de Informática e Administração Paulista",
        shortName: "FIAP",
        type: "privada",
        location: "São Paulo, SP",
        image: "https://braziljournal.com/wp-content/uploads/2022/08/fiap-857x482.jpg",
        students: "15.000",
        courses: "80+",
        ranking: "#1 Tech",
        price: "R$ 2.200",
        priceValue: 1200,
        description: "Referência em tecnologia e inovação, formando profissionais para o mercado digital.",
        courses_offered: [
            { name: "Ciência da Computação", duration: "4 anos" },
            { name: "Sistemas de Informação", duration: "4 anos" },
            { name: "Engenharia de Software", duration: "4 anos" },
            { name: "Análise e Desenvolvimento de Sistemas", duration: "2,5 anos" },
            { name: "Jogos Digitais", duration: "4 anos" },
            { name: "Inteligência Artificial", duration: "4 anos" }
        ],
        locations: [
            "Campus Aclimação - São Paulo",
            "Campus Paulista - São Paulo",
            "Campus Vila Olímpia - São Paulo"
        ],
        admission_methods: [
            { name: "Vestibular FIAP", description: "Processo seletivo próprio" },
            { name: "ENEM", description: "Nota do ENEM" },
            { name: "Processo Seletivo Agendado", description: "Prova agendada" }
        ],
        scholarships: ["ProUni", "FIES", "Bolsa Mérito", "Desconto Empresa Parceira"]
    },
    {
        id: 5,
        name: " UFRJ-Universidade Federal do Rio de Janeiro",
        shortName: "UFRJ",
        type: "publica",
        location: "Rio de Janeiro, RJ",
        image: "https://i.pinimg.com/736x/d4/c9/75/d4c9757c62c7af0645f419d3bd44d6e1.jpg",
        students: "67.000",
        courses: "280+",
        ranking: "#3",
        price: "Gratuito",
        priceValue: 0,
        description: "Uma das mais antigas e prestigiosas universidades do Brasil, com tradição em pesquisa e ensino.",
        courses_offered: [
            { name: "Medicina", duration: "6 anos" },
            { name: "Engenharia Civil", duration: "5 anos" },
            { name: "Direito", duration: "5 anos" },
            { name: "Arquitetura", duration: "5 anos" },
            { name: "Comunicação Social", duration: "4 anos" },
            { name: "História", duration: "4 anos" }
        ],
        locations: [
            "Campus Cidade Universitária - Rio de Janeiro",
            "Campus Praia Vermelha - Rio de Janeiro",
            "Campus Macaé",
            "Campus Xerém"
        ],
        admission_methods: [
            { name: "ENEM/SISU", description: "Sistema de Seleção Unificada" },
            { name: "Transferência", description: "Para alunos de outras instituições" },
            { name: "Reingresso", description: "Para ex-alunos da UFRJ" }
        ],
        scholarships: ["Auxílio Permanência", "Bolsa Monitoria", "Bolsa Extensão"]
    },
    {
        id: 6,
        name: " UFMG-Universidade Federal de Minas Gerais",
        shortName: "UFMG",
        type: "publica",
        location: "Belo Horizonte, MG",
        image: "https://www.hojeemdia.com.br/image/policy:1.722828.1742234802:1742234802/image.jpg?f=2x1&w=1200",
        students: "50.000",
        courses: "250+",
        ranking: "#4",
        price: "Gratuito",
        priceValue: 0,
        description: "Universidade federal de excelência, reconhecida pela qualidade do ensino e pesquisa em diversas áreas.",
        courses_offered: [
            { name: "Medicina", duration: "6 anos" },
            { name: "Engenharia Elétrica", duration: "5 anos" },
            { name: "Veterinária", duration: "5 anos" },
            { name: "Odontologia", duration: "5 anos" },
            { name: "Farmácia", duration: "5 anos" },
            { name: "Letras", duration: "4 anos" }
        ],
        locations: [
            "Campus Pampulha - Belo Horizonte",
            "Campus Saúde - Belo Horizonte",
            "Campus Regional de Montes Claros"
        ],
        admission_methods: [
            { name: "ENEM/SISU", description: "Sistema de Seleção Unificada" },
            { name: "Transferência", description: "Para alunos de outras instituições" },
            { name: "Portador de Diploma", description: "Para graduados" }
        ],
        scholarships: ["Auxílio Permanência", "Bolsa Alimentação", "Bolsa Moradia"]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const typeFilter = document.getElementById('typeFilter');
const locationFilter = document.getElementById('locationFilter');
const priceFilter = document.getElementById('priceFilter');
const universitiesGrid = document.getElementById('universitiesGrid');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const universityModal = document.getElementById('universityModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 58, 138, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#1e3a8a';
        header.style.backdropFilter = 'none';
    }
});

// Filter and search functionality
function filterUniversities() {
    const searchTerm = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const locationValue = locationFilter.value;
    const priceValue = priceFilter.value;
    
    const filtered = universities.filter(university => {
        const matchesSearch = university.name.toLowerCase().includes(searchTerm) ||
                            university.shortName.toLowerCase().includes(searchTerm) ||
                            university.courses_offered.some(course => 
                                course.name.toLowerCase().includes(searchTerm)
                            );
        
        const matchesType = !typeValue || university.type === typeValue;
        
        const matchesLocation = !locationValue || 
                              university.location.toLowerCase().includes(locationValue);
        
        const matchesPrice = !priceValue || checkPriceRange(university.priceValue, priceValue);
        
        return matchesSearch && matchesType && matchesLocation && matchesPrice;
    });
    
    renderUniversities(filtered);
}

function checkPriceRange(price, range) {
    switch(range) {
        case 'gratuito':
            return price === 0;
        case 'ate-500':
            return price > 0 && price <= 500;
        case '500-1000':
            return price > 500 && price <= 1000;
        case '1000-2000':
            return price > 1000 && price <= 2000;
        case 'acima-2000':
            return price > 2000;
        default:
            return true;
    }
}

// Render universities
function renderUniversities(universitiesToRender = universities) {
    universitiesGrid.innerHTML = '';
    
    universitiesToRender.forEach(university => {
        const universityCard = createUniversityCard(university);
        universitiesGrid.appendChild(universityCard);
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.university-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.innerHTML = `
        <div class="university-image">
            <img src="${university.image}" alt="${university.name}">
            <div class="university-badge ${university.type}">${university.type === 'publica' ? 'Pública' : 'Privada'}</div>
        </div>
        <div class="university-content">
            <h3 class="university-name">${university.name}</h3>
            <div class="university-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                ${university.location}
            </div>
            <div class="university-stats">
                <div class="stat-item">
                    <span class="stat-value">${university.students}</span>
                    <span class="stat-label">Alunos</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${university.courses}</span>
                    <span class="stat-label">Cursos</span>
                </div>
            </div>
            <div class="university-price">
                <div class="price-info">
                    <span class="price-value">${university.price}</span>
                    <span class="price-label">Mensalidade</span>
                </div>
                <button class="view-details-btn" onclick="openUniversityModal(${university.id})">
                    Ver Detalhes
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Modal functionality
function openUniversityModal(universityId) {
    const university = universities.find(u => u.id === universityId);
    if (!university) return;
    
    modalTitle.textContent = university.name;
    modalBody.innerHTML = createModalContent(university);
    universityModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeUniversityModal() {
    universityModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createModalContent(university) {
    return `
        <div class="modal-section">
            <h3>Sobre a Universidade</h3>
            <p>${university.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Informações Gerais</h3>
            <div class="modal-grid">
                <div class="modal-info-card">
                    <div class="modal-info-value">${university.students}</div>
                    <div class="modal-info-label">Estudantes</div>
                </div>
                <div class="modal-info-card">
                    <div class="modal-info-value">${university.courses}</div>
                    <div class="modal-info-label">Cursos</div>
                </div>
                <div class="modal-info-card">
                    <div class="modal-info-value">${university.ranking}</div>
                    <div class="modal-info-label">Ranking</div>
                </div>
                <div class="modal-info-card">
                    <div class="modal-info-value">${university.price}</div>
                    <div class="modal-info-label">Mensalidade</div>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Principais Cursos</h3>
            <div class="courses-list">
                ${university.courses_offered.map(course => `
                    <div class="course-item">
                        <div class="course-name">${course.name}</div>
                        <div class="course-duration">Duração: ${course.duration}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Unidades e Localização</h3>
            <div class="locations-list">
                ${university.locations.map(location => `
                    <div class="location-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${location}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Formas de Ingresso</h3>
            <div class="admission-methods">
                ${university.admission_methods.map(method => `
                    <div class="admission-item">
                        <div class="admission-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                        </div>
                        <div class="admission-name">${method.name}</div>
                        <div class="admission-description">${method.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Bolsas e Financiamentos</h3>
            <div class="modal-grid">
                ${university.scholarships.map(scholarship => `
                    <div class="modal-info-card">
                        <div class="modal-info-value">✓</div>
                        <div class="modal-info-label">${scholarship}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Event listeners
searchBtn.addEventListener('click', filterUniversities);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterUniversities();
    }
});
searchInput.addEventListener('input', filterUniversities);
typeFilter.addEventListener('change', filterUniversities);
locationFilter.addEventListener('change', filterUniversities);
priceFilter.addEventListener('change', filterUniversities);

modalClose.addEventListener('click', closeUniversityModal);
universityModal.addEventListener('click', (e) => {
    if (e.target === universityModal) {
        closeUniversityModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && universityModal.classList.contains('active')) {
        closeUniversityModal();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderUniversities();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .section-header');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});