export const formatterData = (data) => {
  const newReturn = data?.result?.map((n) => {
    const m = n.split(/\s+/);
    return m.map((n) => {
      const tempt = n.split("_");
      return { kind: tempt[0], percent: tempt[1] };
    });
  });

  return newReturn[0];
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
