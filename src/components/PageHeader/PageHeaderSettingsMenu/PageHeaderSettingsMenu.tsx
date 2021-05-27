// @ts-nocheck
import { FunctionComponent, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// others
import CloseIcon from '../../../assets/images/icons/close-icon.svg';
import GearIcon from '../../../assets/images/icons/gear-icon.svg';
import ModifySizeIcon from '../../../assets/images/icons/modify-size-icon.svg';

// styles
import './page-header-settings-menu-styles.scss';

const PageHeaderSettingsMenu: FunctionComponent<{}> = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
        <MenuItem className="PageHeaderSettingsMenu__item">
          Up
          <img alt="gear-icon" src={ModifySizeIcon} />
        </MenuItem>
        <MenuItem className="PageHeaderSettingsMenu__item">
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
