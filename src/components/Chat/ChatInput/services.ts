import { TTyping } from '../../../store/channels/types';

export const getPreparedContent = (content: string) =>
  content.replaceAll(
    '<div><br></div>',
    `<div class="ChatMessages__break-line"><br></div>`
  );

export const getTypingsWithRemovedItem = (
  typings: Array<TTyping>,
  selectedProfileId: string
) => typings.filter(({ profileId }) => profileId !== selectedProfileId);
