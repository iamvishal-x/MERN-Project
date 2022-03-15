const URL = "http://localhost:5000";

export const fetchFunction = async (path) => {
  try {
    const fetchRes = await fetch(`${URL}${path}`, {
      method: `get`,
      headers: {
        "content-type": "application/json",
      },
    });
    const status = fetchRes.status;
    const data = await fetchRes.json();
    return { data, status };
  } catch (error) {
    return error;
  }
};
