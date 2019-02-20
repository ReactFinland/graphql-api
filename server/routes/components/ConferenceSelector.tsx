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
  // TODO: Figure out selections
  // defaultValue={options.filter(({ selected }) => selected)[0].value}
  return (
    <select onChange={event => console.log("changed to", event)}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default ConferenceSelector;
