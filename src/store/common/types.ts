// store
import { CommonActionsType } from './actionsType';

export type TFile = {
  name: string;
  file: Blob;
};

export type TReturnablePayload = {
  result: 'success' | 'error';
  src: string;
};

export type TFileUploadPayload = TFile & {
  action: (payload: TReturnablePayload) => void;
};

export type TUploadFile = {
  type: typeof CommonActionsType.uploadFile;
  payload: TFileUploadPayload;
};
