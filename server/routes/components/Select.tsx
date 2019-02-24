import queryString from "query-string";
import * as React from "react";

// TODO: Add generics
interface SelectProps {
  field: string;
  options: Array<{ value: any; label: any; selected?: boolean }>;
}

function Select({ field, options }: SelectProps) {
  return (
    <select
      onChange={({ target: { value } }) => {
        location.search = queryString.stringify({
          ...queryString.parse(location.search),
          [field]: value,
        });
      }}
      value={options.filter(({ selected }) => selected)[0].value}
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
