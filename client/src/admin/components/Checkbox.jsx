import React from 'react';
import * as Icon from '@phosphor-icons/react';

const CustomCheckBox = ({ label, checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className={`${checked ? "bg-orange-400" : "bg-white"} overflow-hidden border w-5 h-5 flex flex-shrink-0 justify-center items-center rounded`}>
          {checked && (
            <div className="text-black leading-none overflow-hidden">
              <Icon.Check className="leading-none" size={10} weight="bold" />
            </div>
          )}
        </div>
      </div>
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default CustomCheckBox;