import settingsIconSrc from '../assets/img/settings.svg';
import homeIconSrc from '../assets/img/home.svg';
import placeIconSrc from '../assets/img/place.svg';
import exploreIconSrc from '../assets/img/explore.svg';
import phoneIconSrc from '../assets/img/phone.svg';
import warningIconSrc from '../assets/img/warning.svg';

import spainFlagSrc from '../assets/img/spain-flag.png';
import franceFlagSrc from '../assets/img/france-flag.png';
import switzerlandFlagSrc from '../assets/img/switzerland-flag.png';
import unitedKingdomFlagSrc from '../assets/img/united-kingdom-flag.png';

// iconPaths
export const settingsIcon = String(settingsIconSrc);
export const homeIcon = String(homeIconSrc);
export const modalIcons = {
  firstIcon: String(placeIconSrc),
  secondIcon: String(exploreIconSrc),
  thirdIcon: String(phoneIconSrc),
};
export const warningIcon = String(warningIconSrc);

// imgPaths
export const spainFlag = String(spainFlagSrc);
export const franceFlag = String(franceFlagSrc);
export const switzerlandFlag = String(switzerlandFlagSrc);
export const unitedKingdomFlag = String(unitedKingdomFlagSrc);

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
    warning: 'While finder is active, users will not be loaded',
  },
  loadingText: 'Loading...',
  settingsPageTitle: 'Set one of these nationalities as default',
  finder: {
    enabledText: 'Start typing to filter by user...',
    disabledText: 'Finder is disabled while users are loading',
  },
};

// nationalities values
export const nationalityValue = {
  ch: 'ch',
  es: 'es',
  fr: 'fr',
  gb: 'gb',
};

// mocks
export const userThumbSrc =
  'https://randomuser.me/api/portraits/med/women/52.jpg';
export const userImgSrc = 'https://randomuser.me/api/portraits/women/52.jpg';
export const userCardData = {
  cardFirstLine: 'Alba Caballero',
  cardSecondLine: 'purpleelephant787',
  cardThirdLine: 'alba.caballero@example.com',
};
export const nationalityCardText = 'Spanish';
export const userModalData = {
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
