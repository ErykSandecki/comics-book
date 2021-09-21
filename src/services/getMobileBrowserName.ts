import { browserName, BrowserTypes, isMobile } from 'react-device-detect';

enum Browser {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Safari = 'safari',
}

const getMobileBrowserName = (): Browser | string => {
  if (isMobile) {
    switch (browserName) {
      case BrowserTypes.Chrome:
        return Browser.Chrome;
      case BrowserTypes.Firefox:
        return Browser.Firefox;
      default:
        return Browser.Safari;
    }
  }
  return '';
};

export default getMobileBrowserName;
