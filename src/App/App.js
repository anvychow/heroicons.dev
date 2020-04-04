import * as constants from "__constants"
import * as Hero from "react-heroicons"
import * as Icons from "svgs"
import CarbonAds from "./CarbonAds"
import Context from "./Context"
import firebase from "__firebase"
import Icon from "./Icon"
import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import SearchBar from "./SearchBar"
import SearchTrie from "./helpers/SearchTrie"
import useDarkMode from "./useDarkMode"

import srcSchoger from "images/schoger.jpg"
import srcWathan from "images/wathan.jpg"
import srcZaydek from "images/zaydek.png"

const ga = firebase.analytics()

const searchTrie = new SearchTrie(originalIcons)

const App = props => {
	const [darkMode, setDarkMode] = useDarkMode()

	const [query, setQuery] = React.useState("")
	const [solid, setSolid] = React.useState(darkMode)
	const [icons, setIcons] = React.useState(originalIcons)

	React.useEffect(
		React.useCallback(() => {
			let eventType = ""
			if (!darkMode) {
				eventType = constants.GA_INIT_LIGHT_MODE
			} else {
				eventType = constants.GA_INIT_DARK_MODE
			}
			ga.logEvent(eventType)
		}, [darkMode]),
		[],
	)

	// Debounce query (10ms):
	React.useEffect(() => {
		const id = setTimeout(() => {
			setIcons(searchTrie.search(query) || [])
		}, 10)
		return () => {
			clearTimeout(id)
		}
	}, [query])

	const { Provider } = Context
	return (
		<Provider value={{
			darkMode,
			setDarkMode,
			query,
			setQuery,
			solid,
			setSolid,
			icons,
			setIcons,
 		}}>
			<div className="py-24 flex flex-row justify-center min-h-full bg-gray-100 dark:bg-gray-900 transition duration-150">
				<div className="px-6 w-full max-w-screen-lg">

					{/* Carbon Ads */}
					<div className="p-6 absolute inset-x-0 top-0 z-30 pointer-events-none">
						<div className="flex flex-row justify-center lg:justify-end">
							<CarbonAds className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 transition pointer-events-auto" src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" />
						</div>
					</div>

					{/* Carbon Ads (responsive) */}
					<div className="block lg:hidden" style={{ height: 100 }} />

					{/* Header */}
					<div className="flex flex-row justify-center">
						<h1 className="relative font-dm-sans font-bold text-5xl tracking-tighter leading-none text-black dark:text-white transition duration-150">
							Heroicons
							<div className="-mb-8 absolute left-full bottom-full">
								<button
									onPointerDown={e => e.preventDefault()}
									onClick={e => {
										// NOTE: <SearchBar> does **not** track
										// GA
										setDarkMode(!darkMode)
										ga.logEvent(constants.GA_DARK_MODE)
									}}
								>
									<Icon className="p-px w-8 h-8" svg={!darkMode ? Hero.SunOutlineMd : Hero.SunSolidSm} />
								</button>
							</div>
						</h1>
					</div>

					{/* Subheader */}
					<div className="h-3" />
					<h2 className="-mx-px text-center font-medium text-xl leading-relaxed text-gray-800 dark:text-gray-100 transition duration-150">
						<a className="mx-px text-indigo-500" href="https://github.com/refactoringui/heroicons" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS)}>
							Open source icons
						</a>{" "}
						by{" "}
						<a className="mx-px text-indigo-500" href="https://twitter.com/steveschoger" onClick={e => ga.logEvent(constants.GA_TWITTER_STEVE)}>
							<img className="-mt-px mx-2 inline-block w-6 h-6 rounded-full" src={srcSchoger} />
							Steve S<span className="hidden md:inline">choger</span><span className="inline md:hidden">.</span>
						</a>{" "}
						and{" "}
						<a className="mx-px text-indigo-500" href="https://twitter.com/adamwathan" onClick={e => ga.logEvent(constants.GA_TWITTER_ADAM)}>
							<img className="-mt-px mx-2 inline-block w-6 h-6 rounded-full" src={srcWathan} />
							Adam W<span className="hidden md:inline">athan</span><span className="inline md:hidden">.</span>
						</a>
						<br />
						<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS_VIEWER)}>
							Viewer
						</a>{" "}
						by{" "}
						<a className="mx-px text-indigo-500" href="https://twitter.com/username_ZAYDEK" onClick={e => ga.logEvent(constants.GA_TWITTER_ZAYDEK)}>
							<img className="-mt-px mx-2 inline-block w-6 h-6 rounded-full" src={srcZaydek} />
							Zaydek
						</a>{" "}
						and{" "}
						<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS_VIEWER)}>
							contributors on GitHub
						</a>
					</h2>

					{/* Buttons */}
					<div className="h-12" />
					<div className="flex flex-col xs:flex-row justify-center">
						<a className="px-6 py-4 flex flex-row justify-center items-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline transition duration-150" href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814" onClick={e => ga.logEvent(constants.GA_FIGMA)}>
							<p className="font-medium text-lg">
								Open in Figma
							</p>
							<Icons.Figma className="ml-3 -mt-1 w-6 h-6" />
						</a>
						<div className="w-3 h-3" />
						<a className="px-6 py-4 flex flex-row justify-center items-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline transition duration-150" href="https://github.com/refactoringui/heroicons" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS)}>
							<p className="font-medium text-lg">
								Open in GitHub
							</p>
							<Icons.GitHub className="ml-3 -mt-1 w-6 h-6 text-black dark:text-white transition duration-150" />
						</a>
					</div>

					{/* Search bar */}
					<div className="h-6" />
					<SearchBar />

					{/* Icons */}
					<div className="h-6" />
					<IconGrid />

				</div>
			</div>
		</Provider>
	)
}

export default App
