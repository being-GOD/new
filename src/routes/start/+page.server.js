// // export function load({ cookies }) {
// // 	cookies.set('Home Page', 'true', { path: '/' });
// // }




// export const actions = {
//     default: async({ request }) => {
//         const formData = await request.getCookies();
//         const firstname = formData.get("amount")
//         // const lastname = formData.get("lastname")
//         // const email = formData.get("email")
//         // const gender = formData.get("gender")
//         // const address = formData.get("address")
//         console.log({firstname})
//     }
// }

export function load({ cookies }) {
	const visited = cookies.get('visited');
    cookies.set('visited', 'true', { path: '/' });

	

	return {
		visited
	};
}