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
    <select
      onChange={onChange}
      value={
        selected ||
        (options.length > 0 &&
          options.filter(({ selected }) => selected)[0].value)
      }
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
