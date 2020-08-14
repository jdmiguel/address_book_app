import settingsIconSrc from '../assets/img/settings.svg';
import homeIconSrc from '../assets/img/home.svg';
import placeIconSrc from '../assets/img/place.svg';
import exploreIconSrc from '../assets/img/explore.svg';
import phoneIconSrc from '../assets/img/phone.svg';
import warningIconSrc from '../assets/img/warning.svg';
import searchingIconSrc from '../assets/img/searching.svg';
import checkIconSrc from '../assets/img/check.svg';

import spainFlagSrc from '../assets/img/spain-flag.png';
import franceFlagSrc from '../assets/img/france-flag.png';
import switzerlandFlagSrc from '../assets/img/switzerland-flag.png';
import unitedKingdomFlagSrc from '../assets/img/united-kingdom-flag.png';

// icons config
export const settingsIcon = {
  src: String(settingsIconSrc),
  alt: 'settings',
};
export const homeIcon = { src: String(homeIconSrc), alt: 'home' };
export const modalIcons = {
  firstIcon: { src: String(placeIconSrc), alt: 'address' },
  secondIcon: { src: String(exploreIconSrc), alt: 'location' },
  thirdIcon: { src: String(phoneIconSrc), alt: 'phone' },
};
export const warningIcon = { src: String(warningIconSrc), alt: 'warning' };
export const searchingIcon = {
  src: String(searchingIconSrc),
  alt: 'address',
};
export const checkIcon = { src: String(checkIconSrc), alt: 'check' };

// literals
export const literals = {
  logo: 'ADDRESS BOOK',
  footer: {
    text: 'This is a coding exercise for Sherpany company',
    link: {
      settingsText: 'Go to Settings',
      settingsLink: '/settings',
      homeText: 'Back to Home',
      homeLink: '/',
    },
    warning:
      'While finder is active, more users will not be loaded by scrolling',
  },
  loadingText: 'Loading...',
  settingsPageTitle: 'Set one of these nationalities as default',
  finderPlaceholder: 'Start typing to filter by user...',
  userAltImg: 'user image',
  errorText:
    'Sorry but the last request has failed, try again by reloading the page ;)',
  endUsersText: 'END OF USERS CATALOG',
};

// nationalities config
export const nationalities = {
  swiss: {
    id: 'ch',
    src: String(switzerlandFlagSrc),
    text: 'Swiss',
  },
  spanish: {
    id: 'es',
    src: String(spainFlagSrc),
    text: 'Spanish',
  },
  french: {
    id: 'fr',
    src: String(franceFlagSrc),
    text: 'French',
  },
  british: {
    id: 'gb',
    src: String(unitedKingdomFlagSrc),
    text: 'British',
  },
};

// scroll utils
export const scrollTrigger = 50;
export const scrollFactor = 1.6;
export const maxRequests = 11;
export const batchUsersByRequest = 100;

// defaults
export const defaultImgSrc = 'https://randomuser.me/api/portraits/women/52.jpg';
export const defaultCardData = {
  cardFirstLine: 'Alba Caballero',
  cardSecondLine: 'purpleelephant787',
  cardThirdLine: 'alba.caballero@example.com',
};
export const defaultNationalityText = 'Spanish';
export const defaultModalData = {
  imgSrc: defaultImgSrc,
  firstText: 'Alba Caballero',
  secondText: 'purpleelephant787',
  thirdText: 'alba.caballero@example.com',
  fourthText: 'Avenida de Castilla',
  fifthText: '4639',
  sixthText: 'Valencia',
  seventhText: 'Comunidad de Madrid',
  eighthText: '56271',
  ninethText: '942-033-129',
  tenthText: '689-284-149',
};
