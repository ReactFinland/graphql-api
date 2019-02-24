import queryString from "query-string";
import * as React from "react";

function ConferenceSelector({ conferenceSeries, selection }) {
  const selectedConferenceSeries = conferenceSeries.find(
    c => c.id === selection.conferenceSeriesId
  );
  const relatedConferences = selectedConferenceSeries.conferences;
  const selectedConference =
    selectedConferenceSeries.conferences.find(
      c => c.id === selection.conferenceId
    ) || {};
  const selectedDay = selectedConference.schedules || [];

  return (
    <>
      <Select
        field="conferenceSeriesId"
        options={getOptions(conferenceSeries, selection.conferenceSeriesId)}
      />
      <Select
        field="conferenceId"
        options={getOptions(relatedConferences, selection.conferenceId)}
      />
      <Select
        field="day"
        options={getOptions(
          selectedDay.map(({ day }) => ({ id: day, name: day })),
          selection.day
        )}
      />
    </>
  );
}

function getOptions(values, selectionId) {
  return values.map(({ id, name }) => ({
    value: id,
    label: name,
    selected: id === selectionId,
  }));
}

function Select({ field, options }) {
  return (
    <select
      onChange={({ target: { value } }) => {
        location.search = queryString.stringify({
          ...queryString.parse(location.search),
          [field]: value,
        });

        // TODO: If series or conference is changed,
        // clean selections after?
      }}
      value={options.filter(({ selected }) => selected)[0].value}
    >
      {options.map(({ value, label, selected }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default ConferenceSelector;
