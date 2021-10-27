import React, { useMemo } from 'react';
import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
import { useSelector } from 'react-redux';
  

const Directory = () => {
  const sections =  useSelector(state => state.directory.sections);

    return (
        <div className="directory-menu">
              {sections.map(({id, ...otherSectionProps}) => {
                  return <MenuItem key={id} {...otherSectionProps} />
              })}  
        </div>
    )
}

export default Directory;

