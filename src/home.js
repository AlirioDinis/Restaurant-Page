  // Css Botões
  import './Style/Btns-nav.css';

  // home.js
import './Style/home.css';

export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Container principal
  const homeContainer = document.createElement('div');
  homeContainer.className = 'home-container';

  const homeContent = document.createElement('div');
  homeContent.className = 'home-content';

  // Seção Hero
  const hero = createHeroSection();
  
  // Features
  const features = createFeaturesSection();
  
  // Informações adicionais
  const info = createInfoSection();

  homeContent.appendChild(hero);
  homeContent.appendChild(features);
  homeContent.appendChild(info);

  homeContainer.appendChild(homeContent);
  content.appendChild(homeContainer);
}

// Função para criar a seção Hero
function createHeroSection() {
  const hero = document.createElement('div');
  hero.className = 'home-hero';

  const title = document.createElement('h1');
  title.className = 'home-title';
  title.textContent = "Ladies and gentlemen, Welcome to Elaine's Restaurant!";

  const subtitle = document.createElement('p');
  subtitle.className = 'home-subtitle';
  subtitle.textContent = 'Our goal is to please your palate.';

  const divider = document.createElement('div');
  divider.className = 'home-divider';

  hero.appendChild(title);
  hero.appendChild(subtitle);
  hero.appendChild(divider);

  return hero;
}

// Função para criar a seção de Features
function createFeaturesSection() {
  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'home-features';

  const features = [
    {
      //icon: '🍽️',
      title: 'Daily Menu',
      description: 'Fresh ingredients prepared daily with passion and creativity'
    },
    {
     // icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our talented team brings years of culinary excellence'
    },
    {
     // icon: '✨',
      title: 'Fine Dining',
      description: 'An unforgettable gastronomic experience awaits you'
    }
  ];

  features.forEach(feature => {
    const card = createFeatureCard(feature);
    featuresContainer.appendChild(card);
  });

  return featuresContainer;
}

// Função para criar um card de feature
function createFeatureCard(feature) {
  const card = document.createElement('div');
  card.className = 'feature-card';

  const icon = document.createElement('div');
  icon.className = 'feature-icon';
  icon.textContent = feature.icon;

  const title = document.createElement('h3');
  title.className = 'feature-title';
  title.textContent = feature.title;

  const description = document.createElement('p');
  description.className = 'feature-description';
  description.textContent = feature.description;

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(description);

  return card;
}

// Função para criar a seção de informações
function createInfoSection() {
  const info = document.createElement('div');
  info.className = 'home-info';

  const locationText = document.createElement('p');
  locationText.innerHTML = '<strong> Location:</strong> Luanda, Angola';

  const emailText = document.createElement('p');
  emailText.innerHTML = '<strong> Email:</strong> aliriodinis@gmail.com';

  const hoursText = document.createElement('p');
  hoursText.innerHTML = '<strong> Hours:</strong> Tuesday - Sunday, 12:00 - 23:00';

  info.appendChild(locationText);
  info.appendChild(emailText);
  info.appendChild(hoursText);

  return info;
}