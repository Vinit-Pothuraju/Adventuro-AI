export const safeJsonParse = (content: string) => {
  try {
    return JSON.parse(content);
  } catch {
    // try to extract JSON block
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON object found");

    return JSON.parse(match[0]);
  }
};
