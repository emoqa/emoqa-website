"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useEditorState, type Editor } from "@tiptap/react";
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, CodeXml, Highlighter, ImagePlus, Italic, Link as LinkIcon,
  List, ListOrdered, Minus, Palette, Quote, Redo2, RemoveFormatting, Strikethrough, Subscript, Superscript, Table, Underline,
  Undo2, Video,
} from "lucide-react";
import { FONTS, FONT_SIZES } from "@/lib/blog-types";

const ICON = 17;

function Btn({ label, active, disabled, onClick, children }: { label: string; active?: boolean; disabled?: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" title={label} aria-label={label} aria-pressed={active} disabled={disabled}
      onMouseDown={(e) => e.preventDefault()} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Toolbar({ editor, onImage }: { editor: Editor; onImage: () => void }) {
  const [ask, setAsk] = useState<"link" | "video" | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      block: e.isActive("heading", { level: 2 }) ? "2" : e.isActive("heading", { level: 3 }) ? "3" : e.isActive("heading", { level: 4 }) ? "4" : "p",
      font: (e.getAttributes("textStyle").fontFamily as string) ?? "",
      size: (e.getAttributes("textStyle").fontSize as string) ?? "",
      color: (e.getAttributes("textStyle").color as string) ?? "#120b33",
      mark: (e.getAttributes("highlight").color as string) ?? "#FFF3B0",
      bold: e.isActive("bold"), italic: e.isActive("italic"), underline: e.isActive("underline"), strike: e.isActive("strike"),
      sub: e.isActive("subscript"), sup: e.isActive("superscript"), code: e.isActive("code"), link: e.isActive("link"),
      highlight: e.isActive("highlight"),
      bullet: e.isActive("bulletList"), ordered: e.isActive("orderedList"), quote: e.isActive("blockquote"), pre: e.isActive("codeBlock"),
      left: e.isActive({ textAlign: "left" }), center: e.isActive({ textAlign: "center" }),
      right: e.isActive({ textAlign: "right" }), justify: e.isActive({ textAlign: "justify" }),
      table: e.isActive("table"), image: e.isActive("image"),
      imageAttrs: e.getAttributes("image") as { alt?: string; size?: string; align?: string },
      undo: e.can().undo(), redo: e.can().redo(),
    }),
  });

  const run = () => editor.chain().focus();

  function open(kind: "link" | "video") {
    setError("");
    setValue(kind === "link" ? (editor.getAttributes("link").href ?? "") : "");
    setAsk(kind);
  }

  function submitAsk(e: FormEvent) {
    e.preventDefault();
    const raw = value.trim();
    if (ask === "link") {
      if (!raw) run().extendMarkRange("link").unsetLink().run();
      else {
        const href = /^(https?:|mailto:|tel:|\/|#)/i.test(raw) ? raw : `https://${raw}`;
        if (editor.state.selection.empty && !s.link) run().insertContent({ type: "text", text: raw, marks: [{ type: "link", attrs: { href } }] }).run();
        else run().extendMarkRange("link").setLink({ href }).run();
      }
    } else if (!run().setYoutubeVideo({ src: raw }).run()) {
      setError("Paste a YouTube link.");
      return;
    }
    setAsk(null);
  }

  return (
    <div className="adm-toolbar" role="toolbar" aria-label="Formatting">
      <div className="adm-tools">
        <Btn label="Undo" disabled={!s.undo} onClick={() => run().undo().run()}><Undo2 size={ICON} /></Btn>
        <Btn label="Redo" disabled={!s.redo} onClick={() => run().redo().run()}><Redo2 size={ICON} /></Btn>
        <i />
        <select aria-label="Text style" value={s.block} onChange={(e) => {
          const v = e.target.value;
          if (v === "p") run().setParagraph().run();
          else run().setHeading({ level: Number(v) as 2 | 3 | 4 }).run();
        }}>
          <option value="p">Paragraph</option>
          <option value="2">Heading 1</option>
          <option value="3">Heading 2</option>
          <option value="4">Heading 3</option>
        </select>
        <select aria-label="Font" value={s.font} onChange={(e) => (e.target.value ? run().setFontFamily(e.target.value).run() : run().unsetFontFamily().run())}>
          {FONTS.map((f) => <option key={f.value} value={f.value}>{f.value ? f.label : "Font"}</option>)}
        </select>
        <select aria-label="Font size" value={s.size} onChange={(e) => (e.target.value ? run().setFontSize(e.target.value).run() : run().unsetFontSize().run())}>
          <option value="">Size</option>
          {FONT_SIZES.map((f) => <option key={f} value={f}>{f.replace("px", "")}</option>)}
        </select>
        <i />
        <Btn label="Bold" active={s.bold} onClick={() => run().toggleBold().run()}><Bold size={ICON} /></Btn>
        <Btn label="Italic" active={s.italic} onClick={() => run().toggleItalic().run()}><Italic size={ICON} /></Btn>
        <Btn label="Underline" active={s.underline} onClick={() => run().toggleUnderline().run()}><Underline size={ICON} /></Btn>
        <Btn label="Strikethrough" active={s.strike} onClick={() => run().toggleStrike().run()}><Strikethrough size={ICON} /></Btn>
        <label className="adm-color" title="Text colour"><Palette size={ICON} style={{ color: s.color }} />
          <input type="color" aria-label="Text colour" value={/^#[0-9a-f]{6}$/i.test(s.color) ? s.color : "#120b33"} onChange={(e) => editor.chain().setColor(e.target.value).run()} />
        </label>
        <label className="adm-color" title="Highlight colour"><Highlighter size={ICON} />
          <input type="color" aria-label="Highlight colour" value={/^#[0-9a-f]{6}$/i.test(s.mark) ? s.mark : "#fff3b0"} onChange={(e) => editor.chain().setHighlight({ color: e.target.value }).run()} />
        </label>
        <Btn label="Subscript" active={s.sub} onClick={() => run().toggleSubscript().run()}><Subscript size={ICON} /></Btn>
        <Btn label="Superscript" active={s.sup} onClick={() => run().toggleSuperscript().run()}><Superscript size={ICON} /></Btn>
        <Btn label="Clear formatting" onClick={() => run().unsetAllMarks().clearNodes().run()}><RemoveFormatting size={ICON} /></Btn>
        <i />
        <Btn label="Align left" active={s.left} onClick={() => run().setTextAlign("left").run()}><AlignLeft size={ICON} /></Btn>
        <Btn label="Align centre" active={s.center} onClick={() => run().setTextAlign("center").run()}><AlignCenter size={ICON} /></Btn>
        <Btn label="Align right" active={s.right} onClick={() => run().setTextAlign("right").run()}><AlignRight size={ICON} /></Btn>
        <Btn label="Justify" active={s.justify} onClick={() => run().setTextAlign("justify").run()}><AlignJustify size={ICON} /></Btn>
        <i />
        <Btn label="Bullet list" active={s.bullet} onClick={() => run().toggleBulletList().run()}><List size={ICON} /></Btn>
        <Btn label="Numbered list" active={s.ordered} onClick={() => run().toggleOrderedList().run()}><ListOrdered size={ICON} /></Btn>
        <Btn label="Quote" active={s.quote} onClick={() => run().toggleBlockquote().run()}><Quote size={ICON} /></Btn>
        <Btn label="Inline code" active={s.code} onClick={() => run().toggleCode().run()}><Code size={ICON} /></Btn>
        <Btn label="Code block" active={s.pre} onClick={() => run().toggleCodeBlock().run()}><CodeXml size={ICON} /></Btn>
        <Btn label="Divider" onClick={() => run().setHorizontalRule().run()}><Minus size={ICON} /></Btn>
        <i />
        <Btn label="Link" active={s.link} onClick={() => open("link")}><LinkIcon size={ICON} /></Btn>
        <Btn label="Insert image" onClick={onImage}><ImagePlus size={ICON} /></Btn>
        <Btn label="YouTube video" onClick={() => open("video")}><Video size={ICON} /></Btn>
        <Btn label="Insert table" active={s.table} onClick={() => run().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}><Table size={ICON} /></Btn>
      </div>

      {ask && (
        <form className="adm-context" onSubmit={submitAsk}>
          <input autoFocus aria-label={ask === "link" ? "Link address" : "YouTube link"} placeholder={ask === "link" ? "https://example.com (leave empty to remove)" : "https://www.youtube.com/watch?v=…"} value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="adm-btn primary">Apply</button>
          <button type="button" className="adm-btn" onClick={() => setAsk(null)}>Cancel</button>
          {error && <span className="adm-error">{error}</span>}
        </form>
      )}

      {s.image && (
        <div className="adm-context">
          <input aria-label="Image description" placeholder="Describe the image (alt text)" value={s.imageAttrs.alt ?? ""} onChange={(e) => editor.commands.updateAttributes("image", { alt: e.target.value })} />
          <select aria-label="Image size" value={s.imageAttrs.size} onChange={(e) => editor.commands.updateAttributes("image", { size: e.target.value })}>
            <option value="small">Small</option><option value="medium">Medium</option><option value="full">Full width</option>
          </select>
          <select aria-label="Image position" value={s.imageAttrs.align} onChange={(e) => editor.commands.updateAttributes("image", { align: e.target.value })}>
            <option value="left">Left</option><option value="center">Centre</option><option value="right">Right</option>
          </select>
          <button type="button" className="adm-btn" onClick={() => run().deleteSelection().run()}>Remove</button>
        </div>
      )}

      {s.table && (
        <div className="adm-context">
          <button type="button" className="adm-btn" onClick={() => run().addRowAfter().run()}>+ Row</button>
          <button type="button" className="adm-btn" onClick={() => run().addColumnAfter().run()}>+ Column</button>
          <button type="button" className="adm-btn" onClick={() => run().deleteRow().run()}>− Row</button>
          <button type="button" className="adm-btn" onClick={() => run().deleteColumn().run()}>− Column</button>
          <button type="button" className="adm-btn" onClick={() => run().deleteTable().run()}>Delete table</button>
        </div>
      )}

      {s.highlight && (
        <div className="adm-context">
          <button type="button" className="adm-btn" onClick={() => run().extendMarkRange("highlight").unsetHighlight().run()}>Remove highlight</button>
        </div>
      )}
    </div>
  );
}
