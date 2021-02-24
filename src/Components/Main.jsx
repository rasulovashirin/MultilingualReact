import { useLang } from "../LangContext"

import "./Main.css"
function Main () {

  const [lang, setLang] = useLang()

  return(
    <>
    <main className="main">
    <div className="container">
    <div className="langs">
    <button className="lang-btn" onClick={e => setLang("english")}>English</button>
    <button className="lang-btn" onClick={e => setLang("russian")}>Russian</button>
    <button className="lang-btn" onClick={e => setLang("uzbek")}>Uzbek</button>
    </div>



    <div className={lang === 'english' ? 'english' : 'text'}>
    Start now. Optimize later. Imperfect starts can always be improved. Obsessing over a perfect plan will never take you anywhere on its own.
    <span className="author">James Clear</span>
    </div>

    <div className={lang === 'russian' ? 'russian' : 'text'}>
    Я просто хочу достичь той точки в своей жизни, где смогу остановиться, оглядеться, вздохнуть с облегчением и подумать: я там, где сейчас мне хотелось бы быть.
    <span className="author">Bezammi</span>
    </div>
    <div className={lang === 'uzbek' ? 'uzbek' : 'text'}>
    Hozir boshlang. Keyinchalik optimallashtirish. Nomukammal start har doim yaxshilanishi mumkin. Mukammal reja bilan mashg'ul bo'lish sizni hech qachon o'z-o'zidan hech qaerga olib ketmaydi.
    <span className="author">James Clear</span>
    </div>
    </div>
    </main>
    </>
    )
  }

  export default Main