export const formatterData = (data, URLs) => {
  const newReturn = data?.result?.map((n) => {
    const m = n.split(/\s+/);
    return m.map((n) => {
      const tempt = n.split("_");
      return { kind: tempt[0], percent: tempt[1] };
    });
  });
  return URLs.map((url, index) => {
    return {
      url: url,
      return: newReturn[index],
    };
  });
};

export const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

export const handleError = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
