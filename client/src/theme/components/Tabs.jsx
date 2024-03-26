import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Tabs = ({ tabs }) => {
  return (
    <div className="w-full flex items-start flex-col justify-start">
      <Tab.Group>
        <Tab.List className="flex w-full border-b-2">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  '-mb-[2px] py-2.5 px-2.5 text-sm font-medium border-b-2',
                  'ring-white/60',
                  selected
                    ? 'bg-white text-orange-400 border-orange-400'
                    : 'text-gray-400'
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="py-3 px-2 w-full">
          {tabs.map((tab, index) => (
            <Tab.Panel key={index} className="bg-white text-gray-500">
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Tabs;
