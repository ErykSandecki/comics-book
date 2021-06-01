// @ts-nocheck
// others
import { TChannel } from '../../../store/channels/types';
import { TProfile } from '../../../store/profiles/types';

const generateId = (data: Array<TProfile | TChannel>, keyId: string) => {
  const result: Array<string> = [];
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  do {
    result.splice(0, result.length);
    for (let i = 0; i < 9; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * characters.length))
      );
    }
  } while (data.find((data) => data[keyId] === result.join('')));

  return result.join('');
};

export default generateId;
