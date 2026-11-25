import "server-only";
import sanitizeHtml from "sanitize-html";
import { FONTS } from "@/lib/blog-types";

const COLOR = [/^#[0-9a-f]{3,8}$/i, /^rgba?\([\d\s.,%/]+\)$/i, /^inherit$/];
const FONT = FONTS.filter((f) => f.value).map((f) => new RegExp(`^${f.value.replace(/[()]/g, "\\$&")}$`));
const ALIGN = [/^(left|right|center|justify)$/];

/** Article HTML is always cleaned here before it is stored, whatever the editor sent. */
export function sanitizeContent(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "hr", "h2", "h3", "h4", "strong", "em", "u", "s", "sub", "sup", "mark", "span", "code", "pre",
      "blockquote", "ul", "ol", "li", "a", "img", "table", "thead", "tbody", "tr", "th", "td", "div", "iframe",
    ],
    allowedAttributes: {
      "*": ["style"],
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title", "data-size", "data-align"],
      ol: ["start", "type"],
      code: ["class"],
      mark: ["data-color"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
      div: ["data-youtube-video"],
      iframe: ["src", "width", "height", "allowfullscreen"],
    },
    allowedClasses: { code: [/^language-[\w-]+$/] },
    allowedStyles: {
      "*": {
        color: COLOR,
        "background-color": COLOR,
        "font-family": FONT,
        "font-size": [/^\d{1,2}px$/],
        "text-align": ALIGN,
      },
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["https"], iframe: ["https"] },
    allowProtocolRelative: false,
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
    allowIframeRelativeUrls: false,
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: attribs.target === "_blank" ? { ...attribs, rel: "noopener noreferrer" } : attribs,
      }),
    },
  });
}
