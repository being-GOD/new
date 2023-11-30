import type { Handle } from '@sveltejs/kit'
import { fromCollection } from '$lib/database/mongo'

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session')
	if (!session) {
		// if there is no session load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	const user = await fromCollection.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			name: user.username,
			role: user.username,
		}
	}

	// load page as normal
	return await resolve(event)
}
