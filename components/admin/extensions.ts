import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { TableKit } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Youtube from "@tiptap/extension-youtube";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

// Size and alignment are data attributes, styled by .blog-content in globals.css.
const BlogImage = Image.extend({
  addAttributes() {
    const data = (name: string, fallback: string) => ({
      default: fallback,
      parseHTML: (el: HTMLElement) => el.getAttribute(`data-${name}`) ?? fallback,
      renderHTML: (attrs: Record<string, string>) => ({ [`data-${name}`]: attrs[name] }),
    });
    return { ...this.parent?.(), size: data("size", "full"), align: data("align", "center") };
  },
});

// Anything added here must also be allowed in lib/server/sanitize.ts, or it is removed on save.
export const extensions = [
  StarterKit.configure({
    heading: { levels: [2, 3, 4] },
    link: { openOnClick: false, defaultProtocol: "https", HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" } },
  }),
  TextStyleKit.configure({ lineHeight: false }),
  Highlight.configure({ multicolor: true }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  Subscript,
  Superscript,
  BlogImage,
  Youtube.configure({ nocookie: true, width: 760, height: 428 }),
  TableKit.configure({ table: { resizable: false } }),
  Placeholder.configure({ placeholder: "Write your blog here…" }),
];
