export const getTag = el => tag =>
	getTags(el)(tag)[0]

export const getTags = el => tag =>
	[...el.getElementsByTagName(tag)]

export const getText = el =>
	el.textContent

export const tools = (userEvent, screen, jest) => ({
	text: (testid) =>
		getText(screen.getByTestId(testid)),
})

export const type = (userEvent, screen) => (testid, text) =>
	userEvent.type(screen.getByTestId(testid), text)

export const clear = (userEvent, screen) => (testid, text) =>
	userEvent.clear(screen.getByTestId(testid))

export const input = (userEvent, screen) => (testid, text) => {
	userEvent.clear(screen.getByTestId(testid))
	userEvent.type(screen.getByTestId(testid), text)
}

export const click = (userEvent, screen) => testid =>
	userEvent.click(screen.getByTestId(testid))

export const serialSpy = jest => (object, key, returns) =>
	returns.reduce((f, val) => f.mockImplementationOnce(() => val), jest.spyOn(object, key))
