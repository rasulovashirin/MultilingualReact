import "./Header.css"

function Header () {
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
        </div>
        </header>
      </>
    )
}
export default Header