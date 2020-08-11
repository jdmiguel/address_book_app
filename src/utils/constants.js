import settingsIconSrc from '../assets/img/settings.svg';
import homeIconSrc from '../assets/img/home.svg';
import spainFlagSrc from '../assets/img/spain-flag.png';
import franceFlagSrc from '../assets/img/france-flag.png';
import switzerlandFlagSrc from '../assets/img/switzerland-flag.png';
import unitedKingdomFlagSrc from '../assets/img/united-kingdom-flag.png';

// iconPaths
export const settingsIcon = settingsIconSrc;
export const homeIcon = homeIconSrc;

// imgPaths
export const spainFlag = spainFlagSrc;
export const franceFlag = franceFlagSrc;
export const switzerlandFlag = switzerlandFlagSrc;
export const unitedKingdomFlag = unitedKingdomFlagSrc;

// literals
export const literals = {
  title: 'ADDRESS BOOK',
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
  homePageTitle: 'Contact list',
  settingsPageTitle: 'Choose any nationality',
  finder: {
    enabledText: 'Start typing to filter by user...',
    disabledText: 'Finder is disabled while users are loading',
  },
};

// mocks
export const userImgSrc =
  'https://randomuser.me/api/portraits/med/women/52.jpg';
export const userCardData = {
  cardFirstLine: 'Alba Caballero',
  cardSecondLine: 'purpleelephant787',
  cardThirdLine: 'alba.caballero@example.com',
};
export const nationalityCardText = 'Spanish';
