export class NAVIGATION_ENUM {
  // Private Fields
  static #_DASHBOARD = 0;
  static #_TEAM = 1;
  static #_TASKS = 2;
  static #_CALENDAR = 3;

  // Accessors for "get" functions only (no "set" functions)
  static get DASHBOARD() {
    return this.#_DASHBOARD;
  }
  static get TEAM() {
    return this.#_TEAM;
  }
  static get TASKS() {
    return this.#_TASKS;
  }
  static get CALENDAR() {
    return this.#_CALENDAR;
  }
}

export const navigationList = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Tasks", href: "/tasks", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];
