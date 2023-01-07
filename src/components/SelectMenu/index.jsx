import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoCheckboxOutline } from 'react-icons/io5';
import { MdShortText } from 'react-icons/md';
import * as S from './style';

const SelectMenu = ({ menus }) => {
  const [menu, setMenu] = useState(3);

  const handleMenu = e => {
    setMenu(e.target.value);
  };

  return (
    <S.Wrapper>
      <FormControl sx={{ m: 1, width: 150 }}>
        <Select value={menu} onChange={handleMenu}>
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
