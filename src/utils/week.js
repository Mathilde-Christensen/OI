export function getISOWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7; // søndag=7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum); // torsdag afgør ISO-året
  const year = d.getUTCFullYear();

  const yearStart = new Date(Date.UTC(year, 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

  return `${year}-W${String(weekNo).padStart(2, "0")}`;
}

// simpel uge-shift (fint til projekt)
export function shiftWeekKey(weekKey, delta) {
  const [y, w] = weekKey.split("-W");
  let year = Number(y);
  let week = Number(w) + delta;

  if (week < 1) { year -= 1; week = 52; }
  if (week > 52) { year += 1; week = 1; }

  return `${year}-W${String(week).padStart(2, "0")}`;
}

export function formatWeekLabel(weekKey) {
  const [year, w] = weekKey.split("-W");
  return `Uge ${Number(w)} - ${year}`;
}

