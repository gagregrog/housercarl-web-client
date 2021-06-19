export const fetchJSON = async (path: string) => {
  const res = await window.fetch(path);

  if (!res.ok) {
    throw res.status;
  }

  return res.json();
}
