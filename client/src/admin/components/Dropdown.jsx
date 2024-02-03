import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import * as Icon from "@phosphor-icons/react";

const Dropdown = ({ menuItems, title }) => {
  return (
    <div className="relative inline-block">
      <Menu>
        <Menu.Button className="bg-gray-100 px-4 py-2 flex items-center gap-1 rounded">
          <span className="text-sm font-semibold">{title}</span>
          <Icon.CaretDown size={14} weight="bold"/>
        </Menu.Button>
        <Menu.Items className="absolute left-0 mt-2 bg-white border rounded w-52 p-1 z-10">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                item.to ? (
                  <Link
                    to={item.to}
                    className={`block px-4 py-2 rounded transition ${active && 'bg-orange-500 text-black'}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`block px-4 py-2 w-full text-left rounded transition ${active && 'bg-orange-500 text-black'}`}
                  >
                    {item.label}
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