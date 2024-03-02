import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import * as Icon from "@phosphor-icons/react";

const Select = ({ data, onClick, title, position }) => {
  const [selectedPerson, setSelectedPerson] = useState(title);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const handleClick = (label) => {
    setSelectedPerson(label);
    if (onClick) {
      onClick(label);
    }
  };
  return (
    <div className="flex flex-col relative">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Button>
            <div className="flex items-center justify-between rounded bg-gray-100 pl-4 pr-2 py-3">
              <Combobox.Input
                className="text-sm font-semibold bg-transparent focus:outline-none"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Select a person..."
              />
                <Icon.CaretUpDown size={16} />
            </div>
          </Combobox.Button>
        <Combobox.Options className={`absolute ${position ? position : "left-0 top-full"} mt-2 bg-white border rounded w-full p-1 z-10 max-h-56 overflow-auto`}>
          {filteredPeople.map((item) => (
            <Combobox.Option
              key={item}
              value={item}
              onClick={() => handleClick(item.toLowerCase())}
              className={({ active }) =>
                `px-4 py-2 hover:bg-orange-400 cursor-pointer text-black block w-full text-left rounded transition flex items-center gap-2 ${
                  active ? "bg-orange-400" : ""
                }`
              }
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`text-sm ${
                      selected ? "font-medium" : "font-semibold"
                    }`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`text-sm font-semibold ${
                        active ? "text-white" : "text-teal-600"
                      }`}
                    ></span>
                  ) : null}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Select;
