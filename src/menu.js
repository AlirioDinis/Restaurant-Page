  // Css Botões
  import './Style/Btns-nav.css';
  //Css Menu
  import './Style/Menu.css';

export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Limpa o conteúdo anterior

  // Dados do menu
  const menuData = {
    entradas: [
      {
        nome: "Carpaccio de Polvo",
        descricao: "Finas fatias de polvo ao azeite de ervas, alcaparras e lascas de parmesão",
        preco: "28€"
      },
      {
        nome: "Tártaro de Atum Rabilho",
        descricao: "Atum fresco com abacate, gengibre, molho ponzu e crocante de arroz",
        preco: "32€"
      },
      {
        nome: "Foie Gras Poêlé",
        descricao: "Foie gras selado com chutney de figo e brioche torrado",
        preco: "38€"
      }
    ],
    principais: [
      {
        nome: "Robalo Selvagem Grelhado",
        descricao: "Servido com espargos brancos, batata confitada e molho beurre blanc",
        preco: "45€"
      },
      {
        nome: "Magret de Pato",
        descricao: "Peito de pato confitado com redução de vinho do Porto, puré de batata-doce e vegetais da época",
        preco: "42€"
      },
      {
        nome: "Lombo de Vitela Black Angus",
        descricao: "Acompanhado de risoto de funghi porcini, tomate seco e jus de carne",
        preco: "52€"
      },
      {
        nome: "Linguini ao Tartufo Nero",
        descricao: "Massa fresca com trufa negra, manteiga de parmesão e raspas de limão siciliano",
        preco: "38€"
      }
    ],
    sobremesas: [
      {
        nome: "Suflê de Chocolate Valrhona",
        descricao: "Servido quente com sorvete de baunilha de Madagascar",
        preco: "16€"
      },
      {
        nome: "Mille-feuille de Framboesa",
        descricao: "Camadas de massa folhada crocante, creme patissier e framboesas frescas",
        preco: "14€"
      },
      {
        nome: "Panna Cotta de Pistache",
        descricao: "Com calda de frutas vermelhas e crumble de amêndoa",
        preco: "13€"
      }
    ]
  };

  // Container principal
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';

  const menuWrapper = document.createElement('div');
  menuWrapper.className = 'menu-wrapper';

  // Header
  const header = createMenuHeader();
  menuWrapper.appendChild(header);

  // Seções do menu
  const entradasSection = createMenuSection('Starters', menuData.entradas);
  const principaisSection = createMenuSection('Main courses', menuData.principais);
  const sobremesasSection = createMenuSection('Desserts', menuData.sobremesas);

  menuWrapper.appendChild(entradasSection);
  menuWrapper.appendChild(principaisSection);
  menuWrapper.appendChild(sobremesasSection);

  // Footer
  const footer = createMenuFooter();
  menuWrapper.appendChild(footer);

  menuContainer.appendChild(menuWrapper);
  content.appendChild(menuContainer);
}

// Função para criar o header
function createMenuHeader() {
  const header = document.createElement('div');
  header.className = 'menu-header';

  const title = document.createElement('h1');
  title.className = 'menu-title';
  title.textContent = 'Le Gourmet';

  const divider = document.createElement('div');
  divider.className = 'menu-divider';

  const subtitle = document.createElement('p');
  subtitle.className = 'menu-subtitle';
  subtitle.textContent = 'Cuisine Contemporaine';

  const date = document.createElement('p');
  date.className = 'menu-date';
  date.textContent = '16 of january, 2026';

  header.appendChild(title);
  header.appendChild(divider);
  header.appendChild(subtitle);
  header.appendChild(date);

  return header;
}

// Função para criar uma seção do menu
function createMenuSection(titulo, items) {
  const section = document.createElement('section');
  section.className = 'menu-section';

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = titulo;
  section.appendChild(sectionTitle);

  items.forEach(item => {
    const menuItem = createMenuItem(item);
    section.appendChild(menuItem);
  });

  return section;
}

// Função para criar um item do menu
function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';

  const itemHeader = document.createElement('div');
  itemHeader.className = 'item-header';

  const itemName = document.createElement('h3');
  itemName.className = 'item-name';
  itemName.textContent = item.nome;

  const itemPrice = document.createElement('span');
  itemPrice.className = 'item-price';
  itemPrice.textContent = item.preco;

  itemHeader.appendChild(itemName);
  itemHeader.appendChild(itemPrice);

  const itemDescription = document.createElement('p');
  itemDescription.className = 'item-description';
  itemDescription.textContent = item.descricao;

  menuItem.appendChild(itemHeader);
  menuItem.appendChild(itemDescription);

  return menuItem;
}

// Função para criar o footer
function createMenuFooter() {
  const footer = document.createElement('div');
  footer.className = 'menu-footer';

  const chefInfo = document.createElement('p');
  chefInfo.innerHTML = 'Chef Executivo: <span class="chef-name">André Silva</span>';

  const reservations = document.createElement('p');
  reservations.className = 'reservations';
  reservations.textContent = 'Reservatios: +244 926 224 389';

  footer.appendChild(chefInfo);
  footer.appendChild(reservations);

  return footer;
}