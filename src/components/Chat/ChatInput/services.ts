import { TTyping } from '../../../store/typings/types';

export const getPreparedContent = (content: string) =>
  urlifyContent(content).replaceAll(
    '<div><br></div>',
    `<div class="ChatMessages__break-line"><br></div>`
  );

export const urlifyContent = (content: string): string => {
  // eslint-disable-next-line 
  const urlRegex = /(https?:\/\/[^\s][A-Za-z0-9\/\s\.'-]+)/g;
  return content.replaceAll(
    urlRegex,
    (url) => '<a href="' + url + '" target="_blank">' + url + '</a>'
  );
};

export const getTypingsWithRemovedItem = (
  typings: Array<TTyping>,
  selectedProfileId: string
) => typings.filter(({ profileId }) => profileId !== selectedProfileId);
