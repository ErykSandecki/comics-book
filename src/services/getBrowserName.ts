import { browserName, BrowserTypes, isMobile } from 'react-device-detect';

enum Browser {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Safari = 'safari',
}

const getBrowserName = (): string => {
  const prefix = isMobile ? 'mobile' : '';

  switch (browserName) {
    case BrowserTypes.Chrome:
      return `${prefix}-${Browser.Chrome}`;
    case BrowserTypes.Firefox:
      return `${prefix}-${Browser.Firefox}`;
    case BrowserTypes.Safari:
      return `${prefix}-${Browser.Safari}`;
    default:
      return '';
  }
};

export default getBrowserName;
