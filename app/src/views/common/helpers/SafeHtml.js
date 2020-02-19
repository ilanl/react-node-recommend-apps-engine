import parse from "html-react-parser";

export const safeHtml = html => {
  return parse(html);
};
