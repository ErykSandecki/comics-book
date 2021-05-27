// @ts-nocheck
import { FunctionComponent, useContext, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// core
import { Context } from '../../../core/ContextProvider/ContextProvider';

// others
import CloseIcon from '../../../assets/images/icons/close-icon.svg';
import GearIcon from '../../../assets/images/icons/gear-icon.svg';
import ModifySizeIcon from '../../../assets/images/icons/modify-size-icon.svg';
import { TContext } from '../../../core/ContextProvider/types';

// styles
import './page-header-settings-menu-styles.scss';

const PageHeaderSettingsMenu: FunctionComponent<{}> = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setMargin }: TContext = useContext(Context);
  const onClickOpenHandler = (event: Event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClickCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div className="PageHeaderSettingsMenu">
      <img alt="gear-icon" onClick={onClickOpenHandler} src={GearIcon} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClickCloseHandler}
      >
        <MenuItem
          className="PageHeaderSettingsMenu__item"
          onClick={() => setMargin(1)}
        >
          Up
          <img alt="gear-icon" src={ModifySizeIcon} />
        </MenuItem>
        <MenuItem
          className="PageHeaderSettingsMenu__item"
          onClick={() => setMargin(-1)}
        >
          Down
          <img
            alt="reverted-gear-icon"
            className="PageHeaderSettingsMenu__icon-rotate"
            src={ModifySizeIcon}
          />
        </MenuItem>
        <MenuItem
          className="PageHeaderSettingsMenu__item"
          onClick={onClickCloseHandler}
        >
          Close
          <img alt="close-icon" src={CloseIcon} />
        </MenuItem>
      </Menu>
    </div>
  );
};
export default PageHeaderSettingsMenu;
