// eslint-disable-next-line @typescript-eslint/no-explicit-any
const doFetch = async (path: string, method: string, body?: any) => {
	const res = await fetch(path, {
		method: method,
		body: body && JSON.stringify(body),
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	const data = await res.json()

	return data
}

export default doFetch
