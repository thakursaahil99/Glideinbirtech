/** Split a headline into words; "*phrase*" segments are flagged as accents. */
export function tokenize(text: string) {
  const tokens: { word: string; accent: boolean }[] = [];
  text.split(/(\*[^*]+\*)/g).forEach((seg) => {
    if (!seg) return;
    const accent = seg.startsWith("*") && seg.endsWith("*");
    const clean = accent ? seg.slice(1, -1) : seg;
    clean
      .split(" ")
      .filter(Boolean)
      .forEach((word) => tokens.push({ word, accent }));
  });
  return tokens;
}

/** Strip the accent markers for plain-text contexts (metadata, aria). */
export function plain(text: string) {
  return text.replace(/\*/g, "");
}
