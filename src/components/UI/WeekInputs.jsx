import { useContext, useState } from "react";

import { SelectedDatesContext } from "../../store/SelectedDates";

import { getISOWeeks } from "../../helpers/DATE_CLASS";

export default function WeekInputs(props) {
  const selectedDates = useContext(SelectedDatesContext);
  const filteredWeekNumber = selectedDates.dateTime.getWeekNumber();
  const weeksInWeekYears = getISOWeeks(selectedDates.dateTime.getYearNumber());

  const [input, setInput] = useState(filteredWeekNumber);

  function handleIncrementWeek() {
    const newValue = input + 1;
    if (newValue <= weeksInWeekYears) {
      setInput(newValue);
      selectedDates.SetFromWeekYear(newValue, 2023);
      props.onChangeWeekNumber();
    }
  }

  function handleDecrementWeek() {
    const newValue = input - 1;
    if (newValue > 0) {
      setInput(newValue);
      selectedDates.SetFromWeekYear(newValue, 2023);
      props.onChangeWeekNumber();
    }
  }

  function handleOnChange(e) {
    const newValue = e.target.value;

    if (newValue > 0 && newValue <= weeksInWeekYears) {
      setInput(newValue);
      selectedDates.SetFromWeekYear(newValue, 2023);
      props.onChangeWeekNumber();
    }

    if (newValue == NaN) {
      setInput(newValue);
    }

    if (newValue == "") {
      setInput(newValue);
    }
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
    }
  }

  let classNames;
  if (props.className) {
    classNames = "inline-flex justify-center gap-1 " + props.className;
  } else {
    classNames = "inline-flex justify-center gap-1";
  }

  return (
    <div className={classNames}>
      <button
        type="button"
        onClick={handleDecrementWeek}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
      >
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div>
        <label htmlFor="PaginationPage" className="sr-only">
          Page
        </label>

        <input
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          type="number"
          className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] dark:border-gray-800 dark:bg-gray-900 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          min="1"
          max="52"
          value={input}
          id="PaginationPage"
        />
      </div>

      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        onClick={handleIncrementWeek}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
