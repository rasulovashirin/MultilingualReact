import "./Header.css"
import { useLang } from "../LangContext"

function Header () {

  const [lang, setLang] = useLang()

    return (
      <>
        <header className="header">
        <div className="container header-container">
          <div className="header-text">Quotes</div>
          {/* <label className="lang-btn">
            <select
              defaultValue="uzbek"
              // onChange={e => setLang(e.target.value)}
              >
              <option value="english">English</option>
              <option value="uzbek">O'zbek</option>
              <option value="russian">Russkiy</option>
            </select>
          </label> */}
          <div>Active language : <span className="active-lang">{lang}</span></div>
        </div>
        </header>
      </>
    )
}
export default Header