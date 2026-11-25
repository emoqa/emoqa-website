"use client";

import { useState } from "react";
import { Mark } from "@/components/site/Logo";

type Lang = "en" | "hi" | "mr";
type Level = "school" | "college";

const langs: { id: Lang; label: string }[] = [{ id: "en", label: "English" }, { id: "hi", label: "हिन्दी" }, { id: "mr", label: "मराठी" }];
const levels: { id: Level; label: string }[] = [{ id: "school", label: "School" }, { id: "college", label: "College" }];

const topics: { id: string; q: Record<Lang, string>; a: Record<Level, Record<Lang, string>> }[] = [
  {
    id: "rainbow",
    q: { en: "Why do we see a rainbow?", hi: "इंद्रधनुष क्यों दिखाई देता है?", mr: "इंद्रधनुष्य का दिसते?" },
    a: {
      school: {
        en: "Sunlight is a mix of many colours. When it enters a raindrop it bends, and each colour bends a little differently. The drop reflects the colours back towards you, spread out like a fan. Millions of drops together make the arc. Shall we try it with a glass of water?",
        hi: "सूरज की रोशनी कई रंगों से मिलकर बनी होती है। जब वह बारिश की बूँद में जाती है तो मुड़ती है, और हर रंग थोड़ा अलग मुड़ता है। बूँद इन रंगों को फैलाकर आपकी ओर लौटा देती है। लाखों बूँदें मिलकर इंद्रधनुष बनाती हैं। क्या हम इसे पानी के गिलास से करके देखें?",
        mr: "सूर्यप्रकाश अनेक रंगांनी बनलेला असतो. तो पावसाच्या थेंबात शिरताना वळतो आणि प्रत्येक रंग थोडा वेगळा वळतो. थेंब हे रंग पसरवून तुमच्याकडे परत पाठवतो. लाखो थेंब मिळून इंद्रधनुष्य तयार होते. पाण्याच्या ग्लासने करून पाहूया का?",
      },
      college: {
        en: "Refractive index depends on wavelength, so white light disperses on entering a droplet. It reflects once internally and refracts again on leaving. The deviation has a minimum, which concentrates light near 42° for red and about 40° for violet. That is why the arc is centred on the antisolar point. Want the derivation?",
        hi: "अपवर्तनांक तरंगदैर्ध्य पर निर्भर करता है, इसलिए बूँद में प्रवेश करते समय श्वेत प्रकाश का वर्ण-विक्षेपण होता है। एक आंतरिक परावर्तन के बाद प्रकाश फिर अपवर्तित होकर निकलता है। न्यूनतम विचलन के कारण लाल रंग लगभग 42° और बैंगनी लगभग 40° पर केंद्रित होता है। क्या आप इसकी व्युत्पत्ति देखना चाहेंगे?",
        mr: "अपवर्तनांक तरंगलांबीवर अवलंबून असतो, त्यामुळे थेंबात शिरताना पांढऱ्या प्रकाशाचे अपस्करण होते. एका आंतरिक परावर्तनानंतर प्रकाश पुन्हा अपवर्तित होऊन बाहेर पडतो. किमान विचलनामुळे लाल रंग सुमारे 42° आणि जांभळा सुमारे 40° जवळ एकवटतो. याची सिद्धता पाहायची आहे का?",
      },
    },
  },
  {
    id: "interest",
    q: { en: "What is compound interest?", hi: "चक्रवृद्धि ब्याज क्या है?", mr: "चक्रवाढ व्याज म्हणजे काय?" },
    a: {
      school: {
        en: "It means earning interest on your interest. Put ₹100 in a bank at 10% a year. After one year you have ₹110. Next year the 10% is counted on ₹110, so you earn ₹11 and reach ₹121. The amount grows a bit faster every year. What do you think you’d have after year three?",
        hi: "इसका मतलब है ब्याज पर भी ब्याज मिलना। मान लो ₹100 पर साल का 10% ब्याज है। एक साल बाद ₹110 होंगे। अगले साल 10% ₹110 पर गिना जाएगा, यानी ₹11, और कुल ₹121। रकम हर साल थोड़ी और तेज़ी से बढ़ती है। तीसरे साल के बाद कितने होंगे, बताओ?",
        mr: "याचा अर्थ व्याजावरही व्याज मिळणे. समजा ₹100 वर वर्षाला 10% व्याज आहे. एका वर्षानंतर ₹110 होतील. पुढच्या वर्षी 10% हे ₹110 वर मोजले जाईल, म्हणजे ₹11, आणि एकूण ₹121. रक्कम दरवर्षी थोडी जास्त वेगाने वाढते. तिसऱ्या वर्षानंतर किती होतील, सांगा?",
      },
      college: {
        en: "Interest is added to principal each period, so growth is exponential: A = P(1 + r/n)^(nt). With P = ₹10,000, r = 8% and yearly compounding, ten years gives about ₹21,589. As n grows, the limit is continuous compounding, A = Pe^(rt). Shall we compare monthly and yearly side by side?",
        hi: "हर अवधि में ब्याज मूलधन में जुड़ता है, इसलिए वृद्धि घातीय होती है: A = P(1 + r/n)^(nt)। P = ₹10,000, r = 8% और वार्षिक चक्रवृद्धि पर दस वर्ष में लगभग ₹21,589 होते हैं। n बढ़ने पर सीमा A = Pe^(rt) है। क्या हम मासिक और वार्षिक की तुलना करें?",
        mr: "प्रत्येक कालावधीत व्याज मुद्दलात मिळवले जाते, म्हणून वाढ घातांकी असते: A = P(1 + r/n)^(nt). P = ₹10,000, r = 8% आणि वार्षिक चक्रवाढीने दहा वर्षांत सुमारे ₹21,589 होतात. n वाढल्यास मर्यादा A = Pe^(rt) असते. मासिक आणि वार्षिक यांची तुलना करूया का?",
      },
    },
  },
];

/** A scripted conversation that shows language and level switching. */
export default function TutorDemo() {
  const [topic, setTopic] = useState(topics[0].id);
  const [lang, setLang] = useState<Lang>("en");
  const [level, setLevel] = useState<Level>("school");
  const t = topics.find((x) => x.id === topic)!;
  const answer = t.a[level][lang];
  const key = `${topic}-${lang}-${level}`;
  const [touched, setTouched] = useState(false);

  return (
    <div className="td" onClickCapture={() => setTouched(true)}>
      <div className="td-top">
        <span className="td-name"><Mark size={28} /> AI Teacher</span>
        <div role="group" aria-label="Language" className="td-seg">
          {langs.map((l) => <button key={l.id} type="button" lang={l.id} aria-pressed={l.id === lang} onClick={() => setLang(l.id)}>{l.label}</button>)}
        </div>
      </div>
      <div className="td-body" lang={lang}>
        <p className="td-q">{t.q[lang]}</p>
        <p className="td-a">
          <span key={key} aria-hidden className={touched ? "td-type" : undefined}>
            {answer.split(" ").map((w, i) => <span key={i} style={{ animationDelay: `${i * 40}ms` }}>{w} </span>)}
          </span>
          <span className="sr-only" aria-live="polite">{answer}</span>
        </p>
      </div>
      <div className="td-foot">
        <div role="group" aria-label="Question" className="td-topics">
          {topics.map((x) => <button key={x.id} type="button" className="chip" aria-pressed={x.id === topic} onClick={() => setTopic(x.id)} lang={lang}>{x.q[lang]}</button>)}
        </div>
        <div role="group" aria-label="Level" className="td-seg">
          {levels.map((l) => <button key={l.id} type="button" aria-pressed={l.id === level} onClick={() => setLevel(l.id)}>{l.label}</button>)}
        </div>
      </div>
      <p className="fine">Scripted illustration. Supported languages depend on the selected models and deployment configuration.</p>
    </div>
  );
}
