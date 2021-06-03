import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

// hooks
import useOutsideClickCard from './useOutsideClickCard';
import usePress from './usePress';

// others
import EditIcon from '../../assets/images/icons/edit-icon.svg';
import PlusIcon from '../../assets/images/icons/plus.svg';
import TrashIcon from '../../assets/images/icons/trash-icon.svg';

// styles
import './profile-picker-styles.scss';

type TProps = {
  clickHandler: () => void;
  mode?: 'add' | 'select';
  name?: string;
  src?: string;
};

const ProfilePicker: FunctionComponent<TProps> = ({
  clickHandler,
  mode = 'add',
  name,
  src,
}) => {
  // @ts-ignore
  const cardRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const isFocus = useOutsideClickCard(cardRef);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const isOverlayVisible = mode === 'select' && overlayVisible && isFocus;

  const onPressHandler = () => {
    setOverlayVisible(true);
  };

  const onClickHandler = () => {
    clickHandler();
  };

  const { clearManual, ...restPropsPress } = usePress(
    onPressHandler,
    onClickHandler
  );

  useEffect(() => {
    if (!isFocus && overlayVisible) {
      setOverlayVisible(false);
      clearManual();
    }
    // eslint-disable-next-line
  }, [isFocus, overlayVisible]);

  return (
    <section
      className={`ProfilePicker ${
        isOverlayVisible ? 'ProfilePicker--blur' : ''
      }`}
      ref={cardRef}
    >
      <div
        className={`ProfilePicker__card ProfilePicker--${mode}__card ${
          isOverlayVisible ? 'ProfilePicker__card--blur' : ''
        }`}
        {...restPropsPress}
      >
        {/* TITLE */}
        <p className={`ProfilePicker__title ProfilePicker--${mode}__title`}>
          {name ? name : 'Create:'}
        </p>

        {/* CIRCLE */}
        <div className={`ProfilePicker__button ProfilePicker--${mode}__button`}>
          <img
            alt={name ? `${name}-avatar` : 'icon'}
            className={`ProfilePicker__image ProfilePicker--${mode}__image`}
            src={src ? src : PlusIcon}
          />
        </div>
      </div>

      {/* OVERLAY */}
      {isOverlayVisible && (
        <div className="ProfilePicker__overlay">
          <div className="ProfilePicker__wrapper">
            <p className="ProfilePicker__help-text">
              Select one of the options:
            </p>
            <div className="ProfilePicker__options">
              <div className="ProfilePicker__option">
                <img alt="edit-icon" src={EditIcon} />
              </div>
              <div className="ProfilePicker__option">
                <img alt="trash-icon" src={TrashIcon} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfilePicker;
