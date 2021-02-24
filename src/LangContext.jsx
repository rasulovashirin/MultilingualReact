import { createContext, useState, useContext } from "react"

const LangContext = createContext()

function LangProvider({ children }) {

	const [lang, setLang] = useState("russian")

	const value = {
		lang: lang,
		setLang: setLang,
	}


	return (
		<LangContext.Provider value={value}>
			{children}
		</LangContext.Provider>
	)
}

function useLang(setterOnly = false) {

	const { lang, setLang } = useContext(LangContext)

	return setterOnly ? [setLang] : [lang, setLang]
}

export {
	LangProvider,
	useLang,
}
