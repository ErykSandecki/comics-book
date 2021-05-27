// @ts-nocheck
//others
import { TReturnablePayload } from '../../../store/common/types';

const afterUploadImageHandler = ({
  error,
  result,
  src,
}: TReturnablePayload) => {
  if (result === 'error') {
    throw error;
  }
  return src;
};

export default afterUploadImageHandler;
