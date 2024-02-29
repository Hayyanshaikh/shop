import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Checkbox = ({ checked, onChange, label }) => {
  const [enabled, setEnabled] = useState(checked)

  const handleChange = () => {
    setEnabled(!enabled);
    onChange(!enabled);
  }

  return (
    <div className="flex items-center gap-2">
      <label className="block font-semibold">{label}</label>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? 'bg-orange-400' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}

export default Checkbox;