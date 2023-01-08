import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoCheckboxOutline } from 'react-icons/io5';
import { MdShortText } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from '../../slices/questions';
import * as S from './style';

const SelectMenu = ({ menus, questionId, question }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { menuSelected } = question;

  const handleChangeMenu = e => {
    dispatch(
      questionActions.changeMenu({
        id: questionId,
        menuSelected: e.target.value,
      })
    );
  };

  return (
    <S.Wrapper>
      {pathname === '/' && (
        <FormControl sx={{ m: 1, width: 150 }}>
          <Select value={menuSelected} onChange={handleChangeMenu}>
            {menus.map(menu => (
              <MenuItem key={menu.id} value={menu.id}>
                <S.ItemWrapper>
                  {menuIcon.map(
                    icon =>
                      menu.id === icon.id && (
                        <div className="iconWrapper" key={icon.id}>
                          {icon.iconElement}
                        </div>
                      )
                  )}
                  <span>{menu.option}</span>
                </S.ItemWrapper>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </S.Wrapper>
  );
};

export default SelectMenu;

const menuIcon = [
  { id: 1, iconElement: <MdShortText /> },
  {
    id: 2,
    iconElement: <HiOutlineMenuAlt2 />,
  },
  { id: 3, iconElement: <IoMdRadioButtonOn /> },
  { id: 4, iconElement: <IoCheckboxOutline /> },
  { id: 5, iconElement: <IoIosArrowDropdown /> },
];
