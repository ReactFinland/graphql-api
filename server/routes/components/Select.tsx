import queryString from "query-string";
import * as React from "react";

// TODO: Add generics
// TODO: Drop selected from options?
interface SelectProps {
  field: string;
  options: Array<{ value: any; label: any; selected?: boolean }>;
  selected?: any; // One of options
}

function Select({ field, options, selected }: SelectProps) {
  return (
    <select
      onChange={({ target: { value } }) => {
        location.search = queryString.stringify({
          ...queryString.parse(location.search),
          [field]: value,
        });
      }}
      value={selected || options.filter(({ selected }) => selected)[0].value}
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
