import React from "react";
import styled from 'styled-components';

const calendarDiv = styled.div`
  color: red;

`;

const Calendar = ({ propsCalendarDate }) => {
  return (
    <>
      <input type='date' value={propsCalendarDate} max={propsCalendarDate} />
    </>
  );
}

export default Calendar;
