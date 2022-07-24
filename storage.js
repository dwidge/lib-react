function getStorageValue(key, defaultValue) {
	const saved = window && localStorage.getItem(key)
	const initial = JSON.parse(saved)
	return initial || defaultValue
}

export default (useState, useEffect) => ({
	useStorage(key, defaultValue) {
		const [value, setValue] = useState(() =>
			getStorageValue(key, defaultValue),
		)

		useEffect(() => {
			localStorage.setItem(key, JSON.stringify(value))
		}, [key, value])

		return [value, setValue]
	},
})
