import * as React from "react";
import Select from "./Select";

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

export default ConferenceSelector;
