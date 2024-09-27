export const ssr = false;
/**
 * Loads information necessary for the page to do stuff
 * @returns Object w/ petinent data
 */
export function load() {
  let prevEntry = window.localStorage.getItem("nobrainer-prevtext");

  console.log(prevEntry);

	return {
		"entry": prevEntry
	};
}