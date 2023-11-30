import Head from "next/head";
import NavBar from "../Navbar/NavBar";
import CalendarTable from "./CalendarTable";
import CalendarControls from "./CalendarControls";

export default function CalendarPage() {
  return (
    <>
      <Head key="calendar">
        <title>Calendar</title>
      </Head>
      <NavBar />
      <CalendarControls />
      <CalendarTable />
    </>
  );
}
