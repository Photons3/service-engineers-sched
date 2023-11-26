import Head from "next/head";
import NavBar from "../Navbar/NavBar";
import CalendarTable from "./CalendarTable";

export default function CalendarPage() {
  return (
    <>
      <Head key="calendar">
        <title>Calendar</title>
      </Head>
      <NavBar />
      <CalendarTable />
    </>
  );
}
