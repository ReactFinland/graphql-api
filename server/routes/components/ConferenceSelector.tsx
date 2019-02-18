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
        options={getOptions(conferenceSeries, selection.conferenceSeriesId)}
      />
      <Select
        options={getOptions(relatedConferences, selection.conferenceId)}
      />
      <Select
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

function Select({ options }) {
  return (
    <select onChange={value => console.log("changed to", value)}>
      {options.map(({ value, label, selected }) => (
        <option key={value} value={value} selected={selected}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default ConferenceSelector;
