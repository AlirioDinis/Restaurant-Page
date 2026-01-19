  // Css botões
  import './Style/Btns-nav.css';
  // contactos.css
  import './Style/Contact.css';

export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Container principal
  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-container';

  const contactWrapper = document.createElement('div');
  contactWrapper.className = 'contact-wrapper';

  // Título
  const title = document.createElement('h1');
  title.className = 'contact-title';
  title.textContent = 'Contact us';

  const divider = document.createElement('div');
  divider.className = 'contact-divider';

  // Informações de contato
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';

  // Telefone
  const phoneItem = createContactItem('📞', 'Telephone', '+244 926 224 389', 'tel:+244926224389');
  
  // Email
  const emailItem = createContactItem('📧', 'E-mail', 'aliriodinis@gmail.com');
  
  // Morada
  const addressItem = createContactItem('📍', 'Houseohold', 'Luanda, Angola');

  contactInfo.appendChild(phoneItem);
  contactInfo.appendChild(emailItem);
  contactInfo.appendChild(addressItem);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'contact-footer';
  const footerText = document.createElement('p');
  footerText.textContent = 'We look forward to welcoming you!';
  footer.appendChild(footerText);

  // Montar tudo
  contactWrapper.appendChild(title);
  contactWrapper.appendChild(divider);
  contactWrapper.appendChild(contactInfo);
  contactWrapper.appendChild(footer);

  contactContainer.appendChild(contactWrapper);
  content.appendChild(contactContainer);
}

// Função auxiliar para criar item de contato
function createContactItem(icon, label, value, link) {
  const item = document.createElement('div');
  item.className = 'contact-item';

  const iconDiv = document.createElement('div');
  iconDiv.className = 'contact-icon';
  iconDiv.textContent = icon;

  const details = document.createElement('div');
  details.className = 'contact-details';

  const labelDiv = document.createElement('div');
  labelDiv.className = 'contact-label';
  labelDiv.textContent = label;

  const valueDiv = document.createElement('div');
  valueDiv.className = 'contact-value';

  if (link) {
    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.textContent = value;
    valueDiv.appendChild(linkElement);
  } else {
    valueDiv.textContent = value;
  }

  details.appendChild(labelDiv);
  details.appendChild(valueDiv);

  item.appendChild(iconDiv);
  item.appendChild(details);

  return item;
}