import * as React from "react";

// TODO: Add generics
// TODO: Drop selected from options?
interface SelectProps {
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  options: Array<{ value: any; label: any; selected?: boolean }>;
  selected?: any; // One of options
}

function Select({ onChange, options, selected }: SelectProps) {
  return (
    <select onChange={onChange} value={selected || getSelectedValue(options)}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

function getSelectedValue(options) {
  if (options.length <= 0) {
    return;
  }
  const selectedOptions = options.filter(({ selected }) => selected);

  if (selectedOptions.length <= 0) {
    return;
  }

  // TODO: This picks just the first one. Likely we should not even do this.
  return selectedOptions[0].value;
}

export default Select;
