type PopularServiceIllustrationProps = {
    category: string;
};
export function PopularServiceIllustration({ category }: PopularServiceIllustrationProps) {
    return (<svg className="feature-illustration" viewBox="0 0 360 250" fill="none" aria-hidden="true" focusable="false">
      {/* A shared isometric home keeps the service artwork in the brand palette. */}
      <ellipse cx="198" cy="244" rx="148" ry="15" fill="#126440" opacity=".32"/>
      <path d="M38 106 167 35 266 88 138 160Z" fill="#f7faf7"/>
      <path d="M47 109 167 43 167 231 47 283Z" fill="#f1e9d6"/>
      <path d="M167 43 257 91 257 275 167 231Z" fill="#17322a"/>
      <path d="M32 106 166 29 272 86 264 94 166 42 40 115Z" fill="#d9e9db"/>
      <path d="M62 125 150 77 150 92 62 140Z" fill="#126440"/>
      <path d="M62 159 150 111 150 126 62 174Z" fill="#126440"/>
      <path d="M62 193 150 145 150 160 62 208Z" fill="#126440"/>
      <path d="M62 227 150 179 150 194 62 242Z" fill="#126440"/>
      <path d="M60 137 152 87 152 94 60 144ZM60 171 152 121 152 128 60 178ZM60 205 152 155 152 162 60 212Z" fill="#b4d7bb"/>
      <path d="m181 78 21 11v28l-21-11Zm34 18 21 11v28l-21-11Zm-34 32 21 11v28l-21-11Zm34 18 21 11v28l-21-11Z" fill="#6cac82"/>
      <path d="M176 217 264 168 331 205 245 254Z" fill="#e1ebe3"/>
      <path d="M176 217 245 254 245 275 176 238Z" fill="#b4d7bb"/>
      <path d="M245 254 331 205 331 226 245 275Z" fill="#126440"/>
      <path d="M193 213v-28l68-38 53 29v29M205 207v-28m17 19v-28m17 19v-28m17 19v-28m17 20v-28m17 38v-28" stroke="#f7faf7" strokeWidth="3" strokeLinejoin="round"/>
      {category === "Cleaning" && (<g>
          <path d="m283 115-33 112" stroke="#f1e9d6" strokeWidth="9" strokeLinecap="round"/>
          <path d="m232 209 33 10 3 31-58-1Z" fill="#a2d4b0"/>
          <path d="m232 217-8 27m18-24-5 26m16-23-2 24" stroke="#126440" strokeWidth="3"/>
          <path d="M292 66v24m-12-12h24M312 105v14m-7-7h14M81 62v16m-8-8h16" stroke="#e3f5e9" strokeWidth="3" strokeLinecap="round"/>
        </g>)}
      {category === "Repairs" && (<g>
          <path d="M208 209h94v51h-94Z" fill="#6cac82"/>
          <path d="m208 209 21-12h94l-21 12Z" fill="#d9e9db"/>
          <path d="m302 209 21-12v51l-21 12Z" fill="#126440"/>
          <path d="M242 198v-14h30v14" stroke="#f7faf7" strokeWidth="6" strokeLinejoin="round"/>
          <path d="M208 227h94" stroke="#17322a" strokeWidth="4"/>
          <rect x="250" y="220" width="12" height="15" rx="2" fill="#f1e9d6"/>
          <path d="m294 128-20 47m12-49 17 7m-25 41 9 4" stroke="#f1e9d6" strokeWidth="8" strokeLinecap="round"/>
        </g>)}
      {category === "Moving" && (<g>
          <path d="m218 192 43-24 45 25-43 24Z" fill="#f1e9d6"/>
          <path d="m218 192 45 25v52l-45-25Z" fill="#b4d7bb"/>
          <path d="m263 217 43-24v52l-43 24Z" fill="#6cac82"/>
          <path d="m239 180 44 25v14l-12 7v-14l-44-25Z" fill="#fff" opacity=".65"/>
          <path d="m268 149 26-15 31 17-26 15Z" fill="#f1e9d6"/>
          <path d="m268 149 31 17v36l-31-17Z" fill="#b4d7bb"/>
          <path d="m299 166 26-15v36l-26 15Z" fill="#6cac82"/>
          <path d="m282 141 29 17v11" stroke="#fff" strokeWidth="6" opacity=".65"/>
        </g>)}
    </svg>);
}
