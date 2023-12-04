import classNames from "../../helpers/classNames";

export default function CalendarMainRow({ currentIndex, weekDatesString }) {
  // ADD 2 to Current Index to hit the right columm
  const columnStart = currentIndex + 2;

  return (
    <>
      <div
        className={classNames(
          `col-start-[${columnStart}]`,
          "row-start-[1] sticky top-0 -z-20 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 px-6 text-center justify-center content-center"
        )}
      >
        {weekDatesString.weekday} <br />
        {`${weekDatesString.month} ${weekDatesString.day}`}
      </div>
    </>
  );
}
