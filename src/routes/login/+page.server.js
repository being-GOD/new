import { connectToCluster } from '$lib/database/mongo.js';
import { fail } from '@sveltejs/kit';
export const actions = {
    default: async ({ request,cookies }) => {
        const data = await request.formData();
        const username = data.get('email');
        const password = data.get('pass');
        // console.log(username,password);  
        if (!username) {
			return fail(400, { usernameMissing: true });
		}
		if (!password) {
			return fail(400, { passwordMissing: true });
		}
        let mongoClient;
        let collection
        try {
			mongoClient = await connectToCluster();
			const db =  mongoClient.db('adminData');
			collection = db.collection('admin');
            const user = await collection.findOne({
                username: username,
                Password: password
            });
            if (user) {
                cookies.set('token', 'token_value', {
                    path: '/'
                });
                return { success: true};
                
            }else{
                return fail(400, {notFound:"username and password not found"})
            }
		} catch (error) {
			console.log(error);
		}
       
        

	}
}