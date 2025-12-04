// University data
const universities = [
    {
        id: 1,
        name: " USP-Universidade de São Paulo",
        shortName: "USP",
        type: "publica",
        location: "São Paulo, SP",
        image:"https://direito.usp.br/pca/arquivos/eeb5bf47643b_whatsapp-image-2022-07-25-at-16.29.33.jpeg",
        students: "90.000",
        courses: "300+",
        ranking: "#1",
        price: "Gratuito",
        priceValue: 0,
        description: "A maior e mais prestigiosa universidade do Brasil, reconhecida mundialmente pela excelência em ensino e pesquisa.",
        website: "https://www.siteoficialdauniversidade.br",
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
        image: "https://ogimg.infoglobo.com.br/in/24875842-3df-0d9/FT1086A/91540713_RI-Rio-de-Janeiro-RJ-09-02-2021Universidade-Federal-do-Rio-de-Janeiro-UFRJcampus-da-P.jpg",
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
    },
    {
        "id": 7,
        "name": "Universidade São Judas Tadeu",
        "shortName": "São Judas",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://cpp.org.br/wp-content/uploads/2018/11/17085af1ac88b9579a7412609f8a7483-500.jpg",
        "students": "37.000",   
        "ranking": "Top 20 Brasil (privada)",
        "price": "R$ 1.200",
        "priceValue": 1200,
        "description": "Universidade com tradição em diversas áreas, especialmente Direito, Engenharia, Saúde e Negócios.",
        "courses_offered": [
          { "name": "Direito", "duration": "5 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Medicina Veterinária", "duration": "5 anos" },
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Psicologia", "duration": "5 anos" },
          { "name": "Ciência da Computação", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Mooca - São Paulo",
          "Campus Butantã - São Paulo",
          "Campus Paulista - São Paulo",
          "Campus Jabaquara - São Paulo",
          "Campus Santo Amaro - São Paulo",
          "Campus Santana - São Paulo",
          "Campus Vila Leopoldina - São Paulo",
          "Campus São Bernardo do Campo - SP",
          "Campus Guarulhos - SP",
          "Campus Cubatão (Medicina) - SP",
          "Campus Unimonte (Santos) - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova tradicional da instituição" },
          { "name": "ENEM", "description": "Uso da nota do ENEM" },
          { "name": "Transferência", "description": "Ingresso por transferência externa" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito", "Convênio Empresa"]
      },
      {
        "id": 8,
        "name": "Universidade Nove de Julho",
        "shortName": "Uninove",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://i0.wp.com/saopaulo.wordcamp.org/2019/files/2019/07/uninove-liberdade.jpg?w=1024&ssl=1",
        "students": "90.000+",
        "courses": "200+",
        "ranking": "Top 10 SP Privadas",
        "price": "R$ 800 - R$ 1.500",
        "priceValue": 1100,
        "description": "Uma das maiores universidades privadas do Brasil, conhecida por EAD forte e grande estrutura.",
        "courses_offered": [
          { "name": "Sistemas de Informação", "duration": "4 anos" },
          { "name": "Medicina", "duration": "6 anos" },
          { "name": "Direito", "duration": "5 anos" },
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Engenharia de Produção", "duration": "5 anos" }
        ],
        "locations": [
          "Campus Memorial - São Paulo",
          "Campus Vergueiro - São Paulo",
          "Campus Vila Maria - São Paulo",
          "Campus Santo Amaro - São Paulo",
          "Campus Vila Prudente - São Paulo",
          "Campus Bauru - SP",
          "Campus Guarulhos - SP",
          "Campus Mauá - SP",
          "Campus São Bernardo do Campo - SP",
          "Campus Osasco - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria ou online" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" },
          { "name": "Transferência", "description": "Ingresso por transferência" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsas institucionais"]
      },
      {
        "id": 9,
        "name": "Mackenzie - Universidade Presbiteriana Mackenzie",
        "shortName": "Mackenzie",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2023__SL__03__SL__08__SL__f167b5b2-2c4b-4426-bc63-6566dacbee5d.png._PROC_CP65.png",
        "students": "45.000",
        "courses": "150+",
        "ranking": "Top 10 Brasil (privadas)",
        "price": "R$ 2.000",
        "priceValue": 2000,
        "description": "Universidade tradicional com excelência em Arquitetura, Direito, Engenharia e Negócios.",
        "courses_offered": [
          { "name": "Arquitetura e Urbanismo", "duration": "5 anos" },
          { "name": "Engenharia de Produção", "duration": "5 anos" },
          { "name": "Direito", "duration": "5 anos" }
        ],
        "locations": [
          "Campus Higienópolis - São Paulo",
          "Campus Alphaville - Barueri, SP",
          "Campus Campinas - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova tradicional Mackenzie" },
          { "name": "ENEM", "description": "Nota do ENEM" }
        ],
        "scholarships": ["ProUni", "Bolsa Mérito", "FIES"]
      },
      {
        "id": 10,
        "name": "Insper - Instituto de Ensino e Pesquisa",
        "shortName": "Insper",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Pr%C3%A9dio_Quat%C3%A1_67%2C_inaugurado_pelo_Insper_em_agosto_de_2024..png",
        "students": "3.000",
        "courses": "10+",
        "ranking": "#1 em Administração e Economia",
        "price": "Sob consulta",
        "priceValue": 0,
        "description": "Instituição focada em Administração, Economia e Engenharia, com forte ênfase em inovação e empreendedorismo.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Economia", "duration": "4 anos" },
          { "name": "Engenharia Mecânica", "duration": "5 anos" },
          { "name": "Engenharia de Computação", "duration": "5 anos" }
        ],
        "locations": [
          "Campus Vila Olímpia - São Paulo"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria do Insper" },
          { "name": "ENEM", "description": "Uso da nota do ENEM" }
        ],
        "scholarships": ["ProUni", "Bolsa Mérito", "FIES"]
      },
      {
        "id": 11,
        "name": "Universidade Anhembi Morumbi",
        "shortName": "Anhembi Morumbi",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://www.anhembimorumbihortolandia.com/wp-content/uploads/2022/04/ANHEMBI_FACHADA.png",
        "students": "40.000",
        "courses": "100+",
        "ranking": "Top 20 Privadas SP",
        "price": "R$ 1.500",
        "priceValue": 1500,
        "description": "Reconhecida por cursos de Tecnologia, Comunicação, Moda e Gestão.",
        "courses_offered": [
          { "name": "Design Gráfico", "duration": "4 anos" },
          { "name": "Jogos Digitais", "duration": "4 anos" },
          { "name": "Engenharia de Software", "duration": "4 anos" },
          { "name": "Marketing", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Vila Olímpia - São Paulo",
          "Campus Santo Amaro - São Paulo",
          "Campus Moema - São Paulo",
          "Campus Paulista - São Paulo"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova tradicional" },
          { "name": "ENEM", "description": "Nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 12,
        "name": "Estácio de Sá",
        "shortName": "Estácio",
        "type": "privada",
        "location": "Rio de Janeiro, RJ",
        "image": "https://wordpress-cms-revista-prod-assets.quero.space/uploads/2024/08/1d8744752991af7f5da3edf5b32b622ccc525f4e.png",
        "students": "350.000+",
        "courses": "200+",
        "ranking": "Uma das maiores EAD do Brasil",
        "price": "R$ 700 - R$ 1.200",
        "priceValue": 950,
        "description": "Rede de ensino privada com grande foco em EAD e cursos presenciais em várias áreas.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Direito", "duration": "5 anos" },
          { "name": "Pedagogia", "duration": "4 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Tijuca - Rio de Janeiro",
          "Campus Botafogo - Rio de Janeiro",
          "Campus Barra da Tijuca - Rio de Janeiro",
          "Campus Niterói - RJ",
          "Campus São Gonçalo - RJ",
          "Campus Salvador - BA",
          "Campus Brasília - DF"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova presencial ou online" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Institucional"]
      },
      {
        "id": 13,
        "name": "Universidade Cruzeiro do Sul",
        "shortName": "Cruzeiro do Sul",
        "type": "privada",
        "location": "São Paulo, SP",
        "image":"https://i0.wp.com/ucs.digital/wp-content/uploads/2022/11/IMG-20221121-WA0021.jpg?fit=1024%2C576&ssl=1",
        "students": "80.000+",
        "courses": "150+",
        "ranking": "Top 20 SP Privadas",
        "price": "R$ 1.200",
        "priceValue": 1200,
        "description": "Famosa por cursos de Medicina, Engenharia, Administração e Tecnologia.",
        "courses_offered": [
          { "name": "Medicina", "duration": "6 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Brás - São Paulo",
          "Campus Tatuapé - São Paulo",
          "Campus Santo Amaro - São Paulo",
          "Campus Suzano - SP",
          "Campus Osasco - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria ou online" },
          { "name": "ENEM", "description": "Nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 14    ,
        "name": "Universidade Belas Artes",
        "shortName": "Belas Artes",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://www.belasartes.br/wp-content/uploads/2023/04/belas-artes-stb-parceria.png.webp",
        "students": "20.000",
        "courses": "60+",
        "ranking": "Referência em Artes e Design",
        "price": "R$ 2.000",
        "priceValue": 2000,
        "description": "Tradicional universidade focada em cursos de Artes, Design, Moda e Arquitetura.",
        "courses_offered": [
          { "name": "Design Gráfico", "duration": "4 anos" },
          { "name": "Arquitetura e Urbanismo", "duration": "5 anos" },
          { "name": "Moda", "duration": "4 anos" },
          { "name": "Cinema e Audiovisual", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Barra Funda - São Paulo",
          "Campus Vila Mariana - São Paulo",
          "Campus Perdizes - São Paulo"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova tradicional" },
          { "name": "ENEM", "description": "Nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 15,
        "name": "Universidade Paulista (UNIP)",
        "shortName": "UNIP",
        "type": "privada",
        "location": "São Paulo, SP",
        "image": "https://jornalarua.com/wp-content/uploads/2023/04/campi-unip-jornal-a-rua.jpg",
        "students": "200.000+",
        "courses": "300+",
        "ranking": "Top 10 em EAD",
        "price": "R$ 800 - R$ 1.500",
        "priceValue": 1150,
        "description": "Uma das maiores universidades privadas do Brasil, com forte presença em EAD e cursos presenciais em diversas áreas.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Direito", "duration": "5 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Barra Funda - São Paulo",
          "Campus Mooca - São Paulo",
          "Campus Lapa - São Paulo",
          "Campus Santo Amaro - São Paulo",
          "Campus Guarulhos - SP",
          "Campus Osasco - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria ou online" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Institucional"]
      },
      {
        "id": 16,
        "name": "Universidade Metodista de São Paulo",
        "shortName": "Metodista",
        "type": "privada",
        "location": "São Bernardo do Campo, SP",
        "image": "https://s1.static.brasilescola.uol.com.br/be/vestibular/entrado-campus-vergueiro-54986938ba509.jpg",
        "students": "12.000",
        "courses": "50+",
        "ranking": "Top 20 Privadas SP",
        "price": "R$ 1.200",
        "priceValue": 1200,
        "description": "Universidade com tradição em Educação, Engenharia, Negócios e Comunicação.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Psicologia", "duration": "5 anos" },
          { "name": "Publicidade e Propaganda", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Rudge Ramos - São Bernardo do Campo",
          "Campus Belenzinho - São Paulo"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 17,
        "name": "Universidade Braz Cubas",
        "shortName": "Braz Cubas",
        "type": "privada",
        "location": "Mogi das Cruzes, SP",
        "image": "https://noticias.cruzeirodosuleducacional.edu.br/wp-content/uploads/2023/11/braz-cubas-campus.jpg",
        "students": "15.000",
        "courses": "40+",
        "ranking": "Referência em SP interior",
        "price": "R$ 1.100",
        "priceValue": 1100,
        "description": "Universidade reconhecida por cursos de Administração, Engenharia, Educação e Tecnologia.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" },
          { "name": "Pedagogia", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Mogi das Cruzes - SP",
          "Campus Suzano - SP",
          "Campus Guararema - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 18,
        "name": "Universidade do Vale do Rio dos Sinos (Unisinos)",
        "shortName": "Unisinos",
        "type": "privada",
        "location": "São Leopoldo, RS",
        "image": "https://noticiasconcursos.com.br/wp-content/uploads/2023/05/noticiasconcursos.com.br-unisinos-abre-inscricoes-do-vestibular-de-inverno-2023-unisinos.jpg",
        "students": "30.000",
        "courses": "70+",
        "ranking": "Referência em Tecnologia e Gestão",
        "price": "R$ 1.800",
        "priceValue": 1800,
        "description": "Universidade tradicional do RS, reconhecida em Engenharia, Tecnologia e Negócios.",
        "courses_offered": [
          { "name": "Engenharia de Software", "duration": "5 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" },
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" }
        ],
        "locations": [
          "Campus São Leopoldo - RS",
          "Campus Porto Alegre - RS"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 19,
        "name": "Universidade do Centro de Ensino Unificado de Brasília (UniCEUB)",
        "shortName": "UniCEUB",
        "type": "privada",
        "location": "Brasília, DF",
        "image": "https://sechat.com.br/_next/image?url=https%3A%2F%2Fsechat-images.s3.amazonaws.com%2FAlunas_do_Ceub_realizam_estudo_que_comprovam_os_beneficios_do_CBD_contra_epilepsia_infantil_a2861c1636.jpg&w=1920&q=80",
        "students": "15.000",
        "courses": "60+",
        "ranking": "Top 10 DF Privadas",
        "price": "R$ 1.500",
        "priceValue": 1500,
        "description": "Referência em Administração, Direito, Engenharia e Saúde no Distrito Federal.",
        "courses_offered": [
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Direito", "duration": "5 anos" },
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Nutrição", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Asa Norte - Brasília",
          "Campus Asa Sul - Brasília"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Institucional"]
      },
      {
        "id": 20,
        "name": "Universidade do Oeste Paulista (Unoeste)",
        "shortName": "Unoeste",
        "type": "privada",
        "location": "Presidente Prudente, SP",
        "image": "https://cdn.diariodolitoral.com.br/img/pc/920/610/dn_noticia/2019/12/foto-release.jpg",
        "students": "12.000",
        "courses": "50+",
        "ranking": "Referência em Engenharia e Saúde",
        "price": "R$ 1.200",
        "priceValue": 1200,
        "description": "Universidade reconhecida em cursos de Engenharia, Tecnologia e Ciências da Saúde.",
        "courses_offered": [
          { "name": "Engenharia Civil", "duration": "5 anos" },
          { "name": "Engenharia de Produção", "duration": "5 anos" },
          { "name": "Enfermagem", "duration": "4 anos" },
          { "name": "Fisioterapia", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Presidente Prudente - SP",
          "Campus Araçatuba - SP",
          "Campus Dracena - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 21,
        "name": "Universidade São Francisco (USF)",
        "shortName": "USF",
        "type": "privada",
        "location": "Bragança Paulista, SP",
        "image": "https://s2-g1.glbimg.com/aqlC2_d-gukP5Zeqq19MyxRvZ1c=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/o/Y/zYlbdaQa6bvdosfQF0Kg/informe-g1-2024-03-20t093725.285.png",
        "students": "10.000",
        "courses": "40+",
        "ranking": "Referência em Saúde e Educação",
        "price": "R$ 1.400",
        "priceValue": 1400,
        "description": "Universidade focada em cursos de Saúde, Educação e Tecnologia, reconhecida em SP interior.",
        "courses_offered": [
          { "name": "Enfermagem", "duration": "4 anos" },
          { "name": "Fisioterapia", "duration": "4 anos" },
          { "name": "Administração", "duration": "4 anos" },
          { "name": "Sistemas de Informação", "duration": "4 anos" }
        ],
        "locations": [
          "Campus Bragança Paulista - SP",
          "Campus Itatiba - SP"
        ],
        "admission_methods": [
          { "name": "Vestibular", "description": "Prova própria" },
          { "name": "ENEM", "description": "Ingresso via nota do ENEM" }
        ],
        "scholarships": ["ProUni", "FIES", "Bolsa Mérito"]
      },
      {
        "id": 22,
        "name": "UNIVESP-Universidade Virtual do Estado de São Paulo",
        "shortName": "UNIVESP",
        "type": "publica",
        "location": "São Paulo, SP",
        "image": "https://abcdoabc.com.br/wp-content/uploads/2024/07/univesp-525x350.jpg",
        "students": "30.000+",
        "courses": "10+",
        "ranking": "#1 Virtual",
        "price": "Gratuito",
        "priceValue": 0,
        "description": "Primeira universidade 100% online do Brasil, oferecendo cursos de graduação e pós-graduação com qualidade e flexibilidade.",
        "courses_offered": [
            { "name": "Licenciatura em Matemática", "duration": "4 anos" },
            { "name": "Engenharia de Computação", "duration": "4 anos" },
            { "name": "Tecnologia em Gestão Pública", "duration": "3 anos" },
            { "name": "Tecnologia em Análise e Desenvolvimento de Sistemas", "duration": "3 anos" }
        ],
        "locations": [
            "Polos em todos os municípios do Estado de São Paulo"
        ],
        "admission_methods": [
            { "name": "Vestibular UNIVESP", "description": "Prova objetiva online" },
            { "name": "ENEM", "description": "Aproveitamento da nota do ENEM" }
        ],
        "scholarships": ["Auxílio Internet", "Bolsas de Inclusão Digital"]
    },
    {
        "id": 23,
        "name": "UEMA-Universidade Estadual do Maranhão",
        "shortName": "UEMA",
        "type": "publica",
        "location": "São Luís, MA",
        "image": "https://repositorio.uema.br/retrieve/34fb75b8-93cf-4758-955c-4797b2aef562",
        "students": "20.000+",
        "courses": "70+",
        "ranking": "#2 Nordeste",
        "price": "Gratuito",
        "priceValue": 0,
        "description": "Referência no Maranhão, com forte atuação em educação, pesquisa e extensão, oferecendo cursos presenciais em diversas áreas.",
        "courses_offered": [
            { "name": "Medicina", "duration": "6 anos" },
            { "name": "Engenharia Civil", "duration": "5 anos" },
            { "name": "Direito", "duration": "5 anos" },
            { "name": "Administração", "duration": "4 anos" }
        ],
        "locations": [
            "Campus São Luís",
            "Campus Caxias",
            "Campus Imperatriz",
            "Campus Timon"
        ],
        "admission_methods": [
            { "name": "Vestibular UEMA", "description": "Prova presencial" },
            { "name": "ENEM/SISU", "description": "Parte das vagas via ENEM" }
        ],
        "scholarships": ["Auxílio Moradia", "Auxílio Alimentação", "Bolsas CNPq"]
    },
    {
        "id": 24,
        "name": "FATEC-Faculdade de Tecnologia do Estado de São Paulo",
        "shortName": "FATEC",
        "type": "publica",
        "location": "São Paulo, SP",
        "image": "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2023/11/5060-1-2-3a-scaled.jpg",
        "students": "50.000+",
        "courses": "70+",
        "ranking": "#3 Tecnologia",
        "price": "Gratuito",
        "priceValue": 0,
        "description": "Rede de faculdades públicas com mais de 70 campi em todo o estado de São Paulo, referência em tecnologia e inovação.",
        "courses_offered": [
            { "name": "Análise e Desenvolvimento de Sistemas", "duration": "3 anos" },
            { "name": "Gestão de TI", "duration": "3 anos" },
            { "name": "Engenharia de Computação", "duration": "4 anos" },
            { "name": "Gestão Empresarial", "duration": "3 anos" },
            { "name": "Redes de Computadores", "duration": "3 anos" }
        ],
        "locations": [
            "Campi distribuídos em mais de 70 cidades do estado de São Paulo"
        ],
        "admission_methods": [
            { "name": "Vestibular FATEC", "description": "Prova específica" },
            { "name": "ENEM", "description": "Aproveitamento da nota do ENEM" }
        ],
        "scholarships": ["Bolsa Transporte", "Auxílio Permanência"]
    },
    {
        "id": 25,
        "name": "UNEMAT-Universidade do Estado de Mato Grosso",
        "shortName": "UNEMAT",
        "type": "publica",
        "location": "Cáceres, MT",
        "image": "http://cms.unemat.br/storage/imagens/noticia/fxp2w4GKiRkssjSjSmIddpV8eJEPVI3MOsUEiVDh.jpg",
        "students": "15.000+",
        "courses": "60+",
        "ranking": "#4 Centro-Oeste",
        "price": "Gratuito",
        "priceValue": 0,
        "description": "Universidade estadual de Mato Grosso, oferecendo cursos em áreas de saúde, ciências humanas, agrárias e tecnológicas.",
        "courses_offered": [
            { "name": "Medicina Veterinária", "duration": "5 anos" },
            { "name": "Engenharia Agrícola", "duration": "5 anos" },
            { "name": "Pedagogia", "duration": "4 anos" },
            { "name": "Administração", "duration": "4 anos" }
        ],
        "locations": [
            "Campus Cáceres",
            "Campus Alta Floresta",
            "Campus Rondonópolis",
            "Campus Sinop"
        ],
        "admission_methods": [
            { "name": "Vestibular UNEMAT", "description": "Prova própria" },
            { "name": "ENEM/SISU", "description": "Vagas via ENEM" }
        ],
        "scholarships": ["Auxílio Alimentação", "Auxílio Transporte"]
    },
    {
        "id": 26,
        "name": "UECE-Universidade Estadual do Ceará",
        "shortName": "UECE",
        "type": "publica",
        "location": "Fortaleza, CE",
        "image": "https://www.uece.br/wp-content/uploads/2024/10/FachadaReitoriaLetreiroClose-2-1200x800.jpg",
        "students": "15.000+",
        "courses": "50+",
        "ranking": "#5 Nordeste",
        "price": "Gratuito",
        "priceValue": 0,
        "description": "Referência no Ceará, com cursos presenciais e de qualidade reconhecida em engenharia, saúde, tecnologia e humanas.",
        "courses_offered": [
            { "name": "Engenharia Civil", "duration": "5 anos" },
            { "name": "Engenharia de Computação", "duration": "5 anos" },
            { "name": "Medicina", "duration": "6 anos" },
            { "name": "Direito", "duration": "5 anos" }
        ],
        "locations": [
            "Campus Itaperi - Fortaleza",
            "Campus Fátima - Fortaleza",
            "Campus Quixadá",
            "Campus Iguatu"
        ],
        "admission_methods": [
            { "name": "Vestibular UECE", "description": "Prova presencial" },
            { "name": "ENEM/SISU", "description": "Parte das vagas via ENEM" }
        ],
        "scholarships": ["Auxílio Permanência", "Bolsas de Pesquisa"]
    },

    // outras novas faculdades publicas e oarticulares 
    {
    id: 27,
    name: "UFSM - Universidade Federal de Santa Maria",
    shortName: "UFSM",
    type: "publica",
    location: "Santa Maria, RS",
    image: "https://dsmcdn.cloud-bricks.net/fotos/807836/file/desktop/voce-sabia-que-o-campus-da-ufsm-quase-foi-no-centro-universidade-lanca-e-book-com-essa-e-outras-curiosidades-1.jpg?1762085606",
    website: "https://www.ufsm.br",
    students: "28.000",
    courses: "140+",
    ranking: "Top 10 Sul",
    price: "Gratuito",
    priceValue: 0,
    description: "Instituição federal referência no sul do Brasil.",
    courses_offered: [
      { name: "Engenharia Elétrica", duration: "5 anos" },
      { name: "Direito", duration: "5 anos" }
    ],
    locations: ["Campus Santa Maria"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Ingresso pelo SISU" }
    ],
    scholarships: ["Auxílio Moradia", "Auxílio Alimentação"]
},
{
    id: 28,
    name: "UFSC - Universidade Federal de Santa Catarina",
    shortName: "UFSC",
    type: "publica",
    location: "Florianópolis, SC",
    image: "https://s1.static.brasilescola.uol.com.br/be/vestibular/centro-cultura-eventos-ufsc-53ac600e23e88.jpg",
    website: "https://www.ufsc.br",
    students: "42.000",
    courses: "200+",
    ranking: "Top 5 Sul",
    price: "Gratuito",
    priceValue: 0,
    description: "Uma das melhores universidades do Brasil.",
    courses_offered: [
      { name: "Engenharia de Software", duration: "5 anos" },
      { name: "Medicina", duration: "6 anos" }
    ],
    locations: ["Campus Trindade"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Ingresso via SISU" }
    ],
    scholarships: ["Auxílio Permanência", "Moradia Estudantil"]
},
{
    id: 29,
    name: "UFPR - Universidade Federal do Paraná",
    shortName: "UFPR",
    type: "publica",
    location: "Curitiba, PR",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/UFPR_vista_frontal.jpg/250px-UFPR_vista_frontal.jpg",
    website: "https://www.ufpr.br",
    students: "35.000",
    courses: "150+",
    ranking: "Top 6 Brasil",
    price: "Gratuito",
    priceValue: 0,
    description: "Uma das mais antigas universidades do país.",
    courses_offered: [
      { name: "Direito", duration: "5 anos" },
      { name: "Engenharia Civil", duration: "5 anos" }
    ],
    locations: ["Campus Reitoria"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Sistema Unificado" }
    ],
    scholarships: ["Bolsa Alimentação"]
},
{
    id: 30,
    name: "UFC - Universidade Federal do Ceará",
    shortName: "UFC",
    type: "publica",
    location: "Fortaleza, CE",
    image: "https://s1.static.brasilescola.uol.com.br/be/vestibular/710968db4b8a107465c5e126abee982e.jpg",
    website: "https://www.ufc.br",
    students: "32.000",
    courses: "120+",
    ranking: "Top 4 Nordeste",
    price: "Gratuito",
    priceValue: 0,
    description: "Universidade referência no Nordeste.",
    courses_offered: [
      { name: "Engenharia de Computação", duration: "5 anos" },
      { name: "Administração", duration: "4 anos" }
    ],
    locations: ["Campus Benfica"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Nota do ENEM" }
    ],
    scholarships: ["Auxílio Transporte"]
},
{
    id: 31,
    name: "UFPA - Universidade Federal do Pará",
    shortName: "UFPA",
    type: "publica",
    location: "Belém, PA",
    image: "https://portalamazonia.com/wp-content/uploads/2021/04/b2ap3_large_181005-drone-ufpa-0021.jpeg",
    website: "https://www.ufpa.br",
    students: "60.000",
    courses: "300+",
    ranking: "Top 3 Norte",
    price: "Gratuito",
    priceValue: 0,
    description: "A maior universidade da região Norte.",
    courses_offered: [
      { name: "Engenharia Ambiental", duration: "5 anos" },
      { name: "Biologia", duration: "4 anos" }
    ],
    locations: ["Campus Guamá"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Via ENEM" }
    ],
    scholarships: ["Auxílio Moradia"]
},
{
    id: 32,
    name: "UFPB - Universidade Federal da Paraíba",
    shortName: "UFPB",
    type: "publica",
    location: "João Pessoa, PB",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsd_0zrOz7qm-MnVp0AUIiID6VEbLvhZ25QA&s",
    website: "https://www.ufpb.br",
    students: "28.000",
    courses: "130+",
    ranking: "Top 6 Nordeste",
    price: "Gratuito",
    priceValue: 0,
    description: "Universidade com forte pesquisa e inovação.",
    courses_offered: [
      { name: "Sistemas de Informação", duration: "4 anos" },
      { name: "Fisica", duration: "4 anos" }
    ],
    locations: ["Campus João Pessoa"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Via ENEM" }
    ],
    scholarships: ["Bolsa Moradia"]
},
{
    id: 33,
    name: "PUC-Rio",
    shortName: "PUC-Rio",
    type: "privada",
    location: "Rio de Janeiro, RJ",
    image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/09/PUC-RIO.jpg?w=1200&h=1200&crop=1",
    website: "https://www.puc-rio.br",
    students: "20.000",
    courses: "80+",
    ranking: "Top 5 Privadas BR",
    price: "R$ 3.000",
    priceValue: 3000,
    description: "Uma das melhores universidades privadas do Brasil.",
    courses_offered: [
      { name: "Engenharia de Computação", duration: "5 anos" },
      { name: "Psicologia", duration: "5 anos" }
    ],
    locations: ["Campus Gávea"],
    admission_methods: [
      { name: "ENEM", description: "Nota do ENEM" }
    ],
    scholarships: ["ProUni", "Bolsa Mérito"]
},
{
    id: 34,
    name: "UNIFOR - Universidade de Fortaleza",
    shortName: "UNIFOR",
    type: "privada",
    location: "Fortaleza, CE",
    image: "https://unifor.br/documents/20143/573160/unifor-campus-centro-convivencia-fachada-foto-ares-soares.jpg/47477ff5-2e7a-aaf8-a296-41b8041f53d4?t=1547844199906",
    website: "https://www.unifor.br",
    students: "25.000",
    courses: "100+",
    ranking: "Top 10 Privadas BR",
    price: "R$ 1.800",
    priceValue: 1800,
    description: "Universidade referência no Ceará.",
    courses_offered: [
      { name: "Design Digital", duration: "4 anos" },
      { name: "Engenharia Civil", duration: "5 anos" }
    ],
    locations: ["Campus Fortaleza"],
    admission_methods: [
      { name: "ENEM", description: "Entrada via ENEM" }
    ],
    scholarships: ["ProUni", "FIES"]
},
{
    id: 35,
    name: "UNIT - Universidade Tiradentes",
    shortName: "UNIT",
    type: "privada",
    location: "Aracaju, SE",
    image: "https://s1.static.brasilescola.uol.com.br/be/vestibular/reitoria-unit-54ae60f93a240.jpg",
    website: "https://www.unit.br",
    students: "40.000",
    courses: "150+",
    ranking: "Top 5 Nordeste Privadas",
    price: "R$ 900",
    priceValue: 900,
    description: "Maior universidade privada de Sergipe.",
    courses_offered: [
      { name: "Enfermagem", duration: "4 anos" },
      { name: "Engenharia Mecânica", duration: "5 anos" }
    ],
    locations: ["Campus Aracaju"],
    admission_methods: [
      { name: "Vestibular", description: "Prova online" }
    ],
    scholarships: ["ProUni", "FIES"]
},
{
    id: 36,
    name: "UNIARA - Universidade de Araraquara",
    shortName: "UNIARA",
    type: "privada",
    location: "Araraquara, SP",
    image: "https://www.uniara.com.br/cursos/presencial/graduacao/assets/img/unidades/uniara-unidade-2.jpg",
    website: "https://www.uniara.com.br",
    students: "10.000",
    courses: "50+",
    ranking: "Top 30 SP",
    price: "R$ 1.200",
    priceValue: 1200,
    description: "Universidade tradicional do interior paulista.",
    courses_offered: [
      { name: "Administração", duration: "4 anos" },
      { name: "Engenharia Ambiental", duration: "5 anos" }
    ],
    locations: ["Campus Araraquara"],
    admission_methods: [
      { name: "ENEM", description: "Nota do ENEM" }
    ],
    scholarships: ["ProUni"]
},
{
    id: 37,
    name: "UNIFESP - Universidade Federal de São Paulo",
    shortName: "UNIFESP",
    type: "publica",
    location: "São Paulo, SP",
    image: "https://s1.static.brasilescola.uol.com.br/be/vestibular/b99e46cb352989e94d93d7808dbecc97.jpg",
    website: "https://www.unifesp.br",
    students: "15.000",
    courses: "40+",
    ranking: "Top 5 Saúde",
    price: "Gratuito",
    priceValue: 0,
    description: "Referência nacional em cursos da área da saúde.",
    courses_offered: [
      { name: "Medicina", duration: "6 anos" },
      { name: "Biomedicina", duration: "4 anos" }
    ],
    locations: ["Campus Vila Mariana"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Entrada via SISU" }
    ],
    scholarships: ["Bolsa Alimentação"]
},
{
    id: 38,
    name: "UERJ - Universidade do Estado do Rio de Janeiro",
    shortName: "UERJ",
    type: "publica",
    location: "Rio de Janeiro, RJ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMsu4t8HwY8HAjx6muAILGeInx3SWqe_nog&s",
    website: "https://www.uerj.br",
    students: "25.000",
    courses: "100+",
    ranking: "Top 15 BR",
    price: "Gratuito",
    priceValue: 0,
    description: "Uma das universidades mais tradicionais do país.",
    courses_offered: [
      { name: "Engenharia Eletrônica", duration: "5 anos" },
      { name: "Direito", duration: "5 anos" }
    ],
    locations: ["Campus Maracanã"],
    admission_methods: [
      { name: "Vestibular UERJ", description: "Prova própria" }
    ],
    scholarships: ["Auxílio transporte"]
},
{
    id: 39,
    name: "UFRN - Universidade Federal do Rio Grande do Norte",
    shortName: "UFRN",
    type: "publica",
    location: "Natal, RN",
    image: "https://s2-g1.glbimg.com/mZosh-_QhvQyJsIIyQBwJcTOW_s=/0x0:1152x648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/d/l/FHzDfLTASJ8XoMbCRSlA/whatsapp-image-2019-10-17-at-11.35.48.jpeg",
    website: "https://www.ufrn.br",
    students: "30.000",
    courses: "140+",
    ranking: "Top 10 Nordeste",
    price: "Gratuito",
    priceValue: 0,
    description: "Universidade com forte pesquisa no Nordeste.",
    courses_offered: [
      { name: "Engenharia de Computação", duration: "5 anos" },
      { name: "Arquitetura", duration: "5 anos" }
    ],
    locations: ["Campus Natal"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Via ENEM" }
    ],
    scholarships: ["Auxílio Moradia"]
},
{
    id: 40,
    name: "UFES - Universidade Federal do Espírito Santo",
    shortName: "UFES",
    type: "publica",
    location: "Vitória, ES",
    image: "https://www.ufes.br/sites/default/files/2024-03/teatro_ufes.png",
    website: "https://www.ufes.br",
    students: "20.000",
    courses: "80+",
    ranking: "Top 15 BR",
    price: "Gratuito",
    priceValue: 0,
    description: "Maior universidade do Espírito Santo.",
    courses_offered: [
      { name: "Engenharia Química", duration: "5 anos" },
      { name: "História", duration: "4 anos" }
    ],
    locations: ["Campus Goiabeiras"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Entrada via SISU" }
    ],
    scholarships: ["Auxílio permanência"]
},
{
    id: 41,
    name: "UNIPAMPA",
    shortName: "UNIPAMPA",
    type: "publica",
    location: "Bagé, RS",
    image: "https://www.bage24horas.com.br/uploads/images/2025/10/unipampa-lanca-edital-para-professor-com-salario-de-r-13-3-mil-545bd.jpg",
    website: "https://www.unipampa.edu.br",
    students: "12.000",
    courses: "40+",
    ranking: "Top 20 Sul",
    price: "Gratuito",
    priceValue: 0,
    description: "Universidade do interior gaúcho com forte presença regional.",
    courses_offered: [
      { name: "Agronomia", duration: "5 anos" },
      { name: "Engenharia Civil", duration: "5 anos" }
    ],
    locations: ["Campus Bagé"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Via ENEM" }
    ],
    scholarships: ["Moradia Estudantil"]
},
{
    id: 42,
    name: "UNICID",
    shortName: "UNICID",
    type: "privada",
    location: "São Paulo, SP",
    image: "https://spjornal.com.br/wp-content/uploads/2025/05/unicid.jpg",
    website: "https://www.unicid.edu.br",
    students: "40.000",
    courses: "100+",
    ranking: "Top 30 SP",
    price: "R$ 1.300",
    priceValue: 1300,
    description: "Instituição de destaque na zona leste de São Paulo.",
    courses_offered: [
      { name: "Fisioterapia", duration: "4 anos" },
      { name: "Engenharia Civil", duration: "5 anos" }
    ],
    locations: ["Campus Tatuapé"],
    admission_methods: [
      { name: "ENEM", description: "Nota do ENEM" }
    ],
    scholarships: ["ProUni", "FIES"]
},
{
    id: 44,
    name: "UFBA - Universidade Federal da Bahia",
    shortName: "UFBA",
    type: "publica",
    location: "Salvador, BA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC6SMov48ZuNHPSHCKsprGM_yKJhcnSrEtA&s",
    website: "https://www.ufba.br",
    students: "38.000",
    courses: "150+",
    ranking: "Top 10 Nordeste",
    price: "Gratuito",
    priceValue: 0,
    description: "A maior federal da Bahia.",
    courses_offered: [
      { name: "Medicina", duration: "6 anos" },
      { name: "Computação", duration: "4 anos" }
    ],
    locations: ["Campus Ondina"],
    admission_methods: [
      { name: "ENEM/SISU", description: "Entrada via ENEM" }
    ],
    scholarships: ["Auxílio Moradia"]
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