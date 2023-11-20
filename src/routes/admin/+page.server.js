// import { fail } from '@sveltejs/kit';
import { config } from 'dotenv';
import { MongoClient } from 'mongodb';


async function connectToCluster() {
	let mongoClient;

	try {
		mongoClient = new MongoClient("mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/");
		console.log('Connecting to MongoDB Atlas cluster...');
		await mongoClient.connect();
		console.log('Successfully connected to MongoDB Atlas!');

		return mongoClient;
	} catch (error) {
		console.error('Connection to MongoDB Atlas failed!', error);
		process.exit();
	}
}
connectToCluster();
// export const actions = {
//     login: async ({ request, cookies }) => {
//         const formData = await request.formData();
//         const email = formData.get("email");
//         const password = formData.get("password");
// async function executeStudentCrudOperations() {
//     const uri = process.env.DB_URI;
//     let mongoClient;

//     try {
//         mongoClient = await connectToCluster(uri);
//         const db = mongoClient.db('adminData');
//         const collection = db.collection('admin');
//         await createStudentDocument(collection);
//     } finally {
//         await mongoClient.close();
//     }
// }
//         async function createStudentDocument(collection) {
//             const studentDocument = {
//                 username: email,
//                 Password: password
//             };

//             const user = await collection.findOne(studentDocument);
//             if (user) {
//                 cookies.set('token', 'token_value', {
//                     path: '/'
//                 });
//                 return { success: true }
//             } else {
//                 return fail(400, { wrongInput: true })
//             }

//         }
//         config();
//         await executeStudentCrudOperations();
//     }
// }

import { fail } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username) {
			return fail(400, { usernameMissing: true });
		}
		if (!password) {
			return fail(400, { passwordMissing: true });
		}
		const uri = process.env.DB_URI;
		let mongoClient;
		let collection;
		try {
			mongoClient = await connectToCluster(uri);
			const db =  mongoClient.db('adminData');
			collection = db.collection('admin');
		} finally {
			
		}
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

	}
}
config();