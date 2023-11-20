import { MongoClient } from "mongodb";
export async function connectToCluster() {
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
    let mongoClient = await connectToCluster();
export const  formDB =  mongoClient.db('rinn_FormData');
export const  fromCollection =  formDB.collection('formData');