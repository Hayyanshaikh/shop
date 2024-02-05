import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import * as Icon from "@phosphor-icons/react";

const Dropdown = ({ menuItems, title, position, icon, onClick }) => {
  const handleClick = (label) => {
    if (onClick) {
      onClick(label);
    }
  }
  return (
    <div className="relative inline-block">
      <Menu>
        <Menu.Button className={`bg-gray-100 ${title ? "px-4" : "px-2"} py-2 flex items-center gap-1 rounded`}>
          {
            title ? <span className="text-sm font-semibold">{title}</span> : ""
          }

          {
            icon ? icon : <Icon.CaretDown size={14} weight="bold"/>
          }
        </Menu.Button>
        <Menu.Items className={`absolute ${position ? position : "left-0"} mt-2 bg-white border rounded min-w-[120px] p-1 z-10`}>
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                item.to ? (
                  <Link
                    to={item.to}
                    className={`block px-3 py-2 rounded transition flex items-center gap-2 ${active && 'bg-orange-400 text-black'}`}
                  >
                    {
                      item.icon ? item.icon : ''
                    }

                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleClick(item.label.toLowerCase())}
                    className={`block px-3 py-2 w-full text-left rounded transition flex items-center gap-2 ${active && 'bg-orange-400 text-black'}`}
                  >

                    {
                      item.icon ? item.icon : ''
                    }
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;