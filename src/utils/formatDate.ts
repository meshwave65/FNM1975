export function formatDate(date: string | null | undefined) {
  if (!date) return "";

  const [ano, mes, dia] = date.split("-");

  return `${dia}/${mes}/${ano}`;
}
