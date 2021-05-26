// others
import { TFileUploadPayload, TUploadFile } from './types';

// store
import { CommonActionsType } from './actionsType';

export const uploadFile = (payload: TFileUploadPayload): TUploadFile => ({
  type: CommonActionsType.uploadFile,
  payload,
});
