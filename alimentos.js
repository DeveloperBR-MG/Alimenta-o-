const alimentos = [

  // =========================
  // EMBUTIDOS E PROCESSADOS
  // =========================

  {
    nome: "Salsicha",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Alimento processado, geralmente rico em gordura, sódio e condimentos."
  },

  {
    nome: "Salsichão",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Pode conter bastante gordura, sal e temperos, podendo piorar sintomas digestivos em algumas pessoas."
  },

  {
    nome: "Mortadela",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Carne processada geralmente rica em gordura, sódio e condimentos."
  },

  {
    nome: "Salame",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Alimento processado, gorduroso e condimentado."
  },

  {
    nome: "Linguiça",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Pode apresentar alto teor de gordura, sal e temperos."
  },

  {
    nome: "Bacon",
    categoria: "Embutidos",
    pontos: 3,
    motivo: "Possui bastante gordura e pode favorecer refluxo e desconforto digestivo."
  },

  {
    nome: "Presunto",
    categoria: "Embutidos",
    pontos: 2,
    motivo: "É um alimento processado e geralmente possui quantidade elevada de sódio."
  },

  {
    nome: "Peito de peru industrializado",
    categoria: "Embutidos",
    pontos: 2,
    motivo: "Apesar de geralmente possuir menos gordura, é processado e pode conter bastante sódio."
  },


  // =========================
  // FRITURAS E GORDUROSOS
  // =========================

  {
    nome: "Batata frita",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "Alimentos fritos e gordurosos podem favorecer sensação de estômago pesado e refluxo."
  },

  {
    nome: "Pastel",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "A fritura e o recheio gorduroso podem piorar sintomas digestivos."
  },

  {
    nome: "Coxinha",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "A combinação de massa e fritura pode dificultar a digestão em algumas pessoas."
  },

  {
    nome: "Salgados fritos",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "Alimentos fritos podem favorecer refluxo e desconforto digestivo."
  },

  {
    nome: "Hambúrguer",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "Pode combinar carne gordurosa, queijo, molhos e outros ingredientes que favorecem sintomas."
  },

  {
    nome: "Pizza",
    categoria: "Frituras e gordurosos",
    pontos: 2,
    motivo: "Pode combinar queijo, gordura, molho de tomate e embutidos."
  },

  {
    nome: "Torresmo",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "Possui grande quantidade de gordura e pode favorecer refluxo e desconforto."
  },

  {
    nome: "Carne muito gordurosa",
    categoria: "Frituras e gordurosos",
    pontos: 3,
    motivo: "Refeições muito gordurosas podem permanecer mais tempo no estômago e favorecer sintomas."
  },


  // =========================
  // BEBIDAS
  // =========================

  {
    nome: "Café",
    categoria: "Bebidas",
    pontos: 3,
    motivo: "Pode piorar queimação ou refluxo em algumas pessoas."
  },

  {
    nome: "Café com leite",
    categoria: "Bebidas",
    pontos: 2,
    motivo: "A combinação de café e leite pode provocar desconforto em algumas pessoas sensíveis."
  },

  {
    nome: "Refrigerante",
    categoria: "Bebidas",
    pontos: 3,
    motivo: "A carbonatação, acidez e eventualmente cafeína podem piorar refluxo ou desconforto."
  },

  {
    nome: "Energético",
    categoria: "Bebidas",
    pontos: 3,
    motivo: "Pode possuir bastante cafeína e outros estimulantes."
  },

  {
    nome: "Bebida alcoólica",
    categoria: "Bebidas",
    pontos: 3,
    motivo: "O álcool pode irritar a mucosa do estômago e piorar sintomas."
  },

  {
    nome: "Suco de laranja",
    categoria: "Bebidas",
    pontos: 2,
    motivo: "Por ser ácido, pode piorar queimação ou refluxo em algumas pessoas."
  },

  {
    nome: "Suco de limão",
    categoria: "Bebidas",
    pontos: 2,
    motivo: "A acidez pode provocar sintomas em algumas pessoas sensíveis."
  },


  // =========================
  // PICANTES E TEMPEROS
  // =========================

  {
    nome: "Pimenta",
    categoria: "Picantes e temperos",
    pontos: 3,
    motivo: "Alimentos picantes podem intensificar ardência e desconforto em algumas pessoas."
  },

  {
    nome: "Molho de pimenta",
    categoria: "Picantes e temperos",
    pontos: 3,
    motivo: "Pode intensificar sensação de queimação em pessoas sensíveis."
  },

  {
    nome: "Tempero muito apimentado",
    categoria: "Picantes e temperos",
    pontos: 3,
    motivo: "Temperos muito picantes podem aumentar sintomas digestivos em algumas pessoas."
  },


  // =========================
  // ALIMENTOS ÁCIDOS
  // =========================

  {
    nome: "Limão",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "A acidez pode provocar ou piorar sintomas em algumas pessoas."
  },

  {
    nome: "Laranja",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "Frutas cítricas podem piorar queimação ou refluxo em algumas pessoas."
  },

  {
    nome: "Abacaxi",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "Pode provocar desconforto em algumas pessoas sensíveis à acidez."
  },

  {
    nome: "Molho de tomate",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "A acidez do tomate pode piorar queimação ou refluxo em algumas pessoas."
  },

  {
    nome: "Ketchup",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "Pode combinar tomate, vinagre, açúcar e outros ingredientes que provocam sintomas em algumas pessoas."
  },

  {
    nome: "Vinagre",
    categoria: "Ácidos",
    pontos: 2,
    motivo: "Por ser ácido, pode provocar desconforto em pessoas sensíveis."
  },


  // =========================
  // DOCES
  // =========================

  {
    nome: "Chocolate",
    categoria: "Doces",
    pontos: 2,
    motivo: "Chocolate pode favorecer refluxo em algumas pessoas."
  },

  {
    nome: "Bolo com chocolate",
    categoria: "Doces",
    pontos: 2,
    motivo: "Pode combinar chocolate, açúcar e gordura, favorecendo sintomas em algumas pessoas."
  },

  {
    nome: "Sorvete",
    categoria: "Doces",
    pontos: 2,
    motivo: "Pode possuir bastante gordura e leite, causando desconforto em algumas pessoas."
  },

  {
    nome: "Doce muito gorduroso",
    categoria: "Doces",
    pontos: 2,
    motivo: "Grandes quantidades de gordura podem favorecer refluxo e sensação de estômago pesado."
  },


  // =========================
  // LATICÍNIOS
  // =========================

  {
    nome: "Leite integral",
    categoria: "Laticínios",
    pontos: 2,
    motivo: "O teor de gordura pode provocar desconforto ou refluxo em algumas pessoas."
  },

  {
    nome: "Queijo amarelo",
    categoria: "Laticínios",
    pontos: 2,
    motivo: "Queijos mais gordurosos podem favorecer refluxo e sensação de estômago pesado."
  },

  {
    nome: "Queijo muito gorduroso",
    categoria: "Laticínios",
    pontos: 2,
    motivo: "O alto teor de gordura pode favorecer sintomas digestivos em algumas pessoas."
  },

  {
    nome: "Creme de leite",
    categoria: "Laticínios",
    pontos: 2,
    motivo: "Possui bastante gordura e pode favorecer refluxo ou desconforto."
  },


  // =========================
  // INDUSTRIALIZADOS
  // =========================

  {
    nome: "Salgadinho de pacote",
    categoria: "Industrializados",
    pontos: 3,
    motivo: "Pode conter bastante gordura, sal e temperos."
  },

  {
    nome: "Macarrão instantâneo",
    categoria: "Industrializados",
    pontos: 2,
    motivo: "Pode apresentar bastante sódio, gordura e temperos."
  },

  {
    nome: "Nuggets",
    categoria: "Industrializados",
    pontos: 3,
    motivo: "Produto processado que frequentemente é preparado com bastante gordura."
  },

  {
    nome: "Lasanha industrializada",
    categoria: "Industrializados",
    pontos: 3,
    motivo: "Pode combinar gordura, queijo, molho de tomate e grande quantidade de sódio."
  }
];