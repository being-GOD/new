import {connectToCluster} from "$lib/database/mongo"
import {AZURE_STORAGE_CONNECTION_STRING,AZURE_STORAGE_CONTAINER_NAME} from "$env/static/private";
import {BlobServiceClient} from '@azure/storage-blob';

export const actions = {
    default: async ({request,cookies}) => {
            // const formData = Object.fromEntries(await request.formData());
            const formData = request.formData();
            const file = (await formData).get('file');

    let selectedFile = formData.file ;


    if (selectedFile) {
        // Create a new Date object to get the current date and time
        const currentDate = new Date();

        // Get the current day, month, year, hour, minute, and second
        const currentDay = currentDate.getDate(); // Day (1-31)
        const currentMonth = currentDate.getMonth() + 1; // Month (0-11, so add 1 for human-readable month)
        const currentYear = currentDate.getFullYear(); // Year (4 digits)
        const currentHour = currentDate.getHours(); // Hour (0-23)
        const currentMinute = currentDate.getMinutes(); // Minute (0-59)
        const currentSecond = currentDate.getSeconds(); // Second (0-59)
        const fileDate = ''+ currentDay+currentMonth+currentYear+currentHour+currentMinute+currentSecond;



        const newName = fileDate + '_' + selectedFile.name;
        selectedFile = new File([selectedFile], newName);

      }

    // let fileUrl = "/userfiles/"+selectedFile.name;
    // writeFileSync(`static/userfiles/${selectedFile.name}`, Buffer.from(await selectedFile.arrayBuffer()));
        if (!AZURE_STORAGE_CONNECTION_STRING) {
            throw Error('Azure Storage Connection string not found');
        }
        const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
        const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

        // const blobName = fileToUpload.name;
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);

        // console.log(
        //     `\nUploading to Azure storage as blob\n\tname: ${selectedFile.name}:\n\tURL: ${blockBlobClient.url}`
        // );
        try {
            // const ab = await fileToUpload.Buffer();
            await blockBlobClient.uploadFile(file, Buffer.byteLength(file   ));
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
        const URL = blockBlobClient.url;
        const home = cookies.get('Requirment');
        const propertyPurchase = cookies.get('Stage of Property purchase');
        const propertyLocationState = cookies.get('Property Location (State)');
        const propertyLocationCity = cookies.get('Property Location (City)');
        const workingLocationState = cookies.get('Working Location (State)');
        const workingLocationCity = cookies.get('Working Location (City)');
        const masterPlan = cookies.get('Is it part of Master plan of City');
        const propertyType = cookies.get('Type of Property');
        const propertiesOwned = cookies.get('No. of properties already owned');
        const currentFinancialName = cookies.get('Current Financial Name');
        const roi = cookies.get('Current Financial ROI');
        const referralName = cookies.get('Referral Code (Name)');
        const referralNo = cookies.get('Referral Code(Mobile No.)');
        const usernName = cookies.get('User (Name)');
        const userNo = cookies.get('User (Mobile No.)');
        const userMail = cookies.get('User (Email)');
        const EmploymentType = cookies.get('Type of Employment');

        const studentDocument = {
            home,
            propertyPurchase,
            propertyLocationState,
            propertyLocationCity,
            workingLocationState,
            workingLocationCity,
            masterPlan,
            propertyType,
            propertiesOwned,
            referralName,
            referralNo,
            usernName,
            userNo,
            userMail,
            currentFinancialName,
            roi,
            EmploymentType,
            URL

        };
        async function crudOperations() {
            let mongoClient;
            try {

                mongoClient = await connectToCluster();
                const db = mongoClient.db('rinn_FormData');
                const collection = db.collection('formData');
                // await collection.insertOne(studentDocument);
            } finally {
                mongoClient.close();
            }
        }
        await crudOperations();
        return {
            success: true
        };



    }

}




// import { config } from 'dotenv';
// import { MongoClient } from 'mongodb';
// import  {writeFileSync}  from 'node:fs';



// export const actions = {
//     default: async ({request,cookies }) => {
//     const formData = Object.fromEntries(await request.formData());

//     let selectedFile = formData.file ;


//     if (selectedFile) {
//         // Create a new Date object to get the current date and time
//         const currentDate = new Date();

//         // Get the current day, month, year, hour, minute, and second
//         const currentDay = currentDate.getDate(); // Day (1-31)
//         const currentMonth = currentDate.getMonth() + 1; // Month (0-11, so add 1 for human-readable month)
//         const currentYear = currentDate.getFullYear(); // Year (4 digits)
//         const currentHour = currentDate.getHours(); // Hour (0-23)
//         const currentMinute = currentDate.getMinutes(); // Minute (0-59)
//         const currentSecond = currentDate.getSeconds(); // Second (0-59)
//         const fileDate = ''+ currentDay+currentMonth+currentYear+currentHour+currentMinute+currentSecond;



//         const newName = fileDate + '_' + selectedFile.name;
//         selectedFile = new File([selectedFile], newName);

//       }

//     let fileUrl = "/userfiles/"+selectedFile.name;
//     writeFileSync(`static/userfiles/${selectedFile.name}`, Buffer.from(await selectedFile.arrayBuffer()));
//         let data = cookies.get();
//         console.log(data);
//         home = cookies.get('Requirment');
//         propertyPurchase = cookies.get('Stage of Property purchase');
//         propertyLocationState = cookies.get('Property Location (State)');
//         propertyLocationCity = cookies.get('Property Location (City)');
//         workingLocationState = cookies.get('Working Location (State)');
//         workingLocationCity = cookies.get('Working Location (City)');
//         currentFinancialName = cookies.get('Current Financial Name');
//         currentFinanciallocation = cookies.get('Current Financial Location');
//         roi = cookies.get('Current Financial ROI');
//         referralName = cookies.get('Referral Code (Name)');
//         referralNo = cookies.get('Referral Code(Mobile No.)');
//         usernName = cookies.get('User (Name)');
//         userNo = cookies.get('User (Mobile No.)');
//         userMail = cookies.get('User (Email)');
//         async function executeStudentCrudOperations() {
//             // const uri = process.env.DB_URI;
//             let mongoClient;

//             try {
//                 mongoClient = await connectToCluster();
//                 const db = mongoClient.db('form');
//                 const collection = db.collection('formData');
//                 console.log('CREATE User');
//                 await createStudentDocument(collection);
//             } finally {
//                 await mongoClient.close();
//             }
//         }
//         async function createStudentDocument(collection) {
//             const studentDocument = {
//                 home,
//                 propertyPurchase,
//                 propertyLocationState,
//                 propertyLocationCity,
//                 workingLocationState,
//                 workingLocationCity,
//                 masterPlan,
//                 propertyType,
//                 propertiesOwned,
//                 referralName,
//                 referralNo,
//                 usernName,
//                 userNo,
//                 userMail,
//                 currentFinancialName,
//                 roi,
//                 currentFinanciallocation,
//                 fileUrl,


//             };

//             await collection.insertOne(studentDocument);

//         }


//         config();
//         await executeStudentCrudOperations();
//         return {
//           success: true
//         };
//     }

// }

// export const actions = {
//     default: async ({ request }) => {
//         const formData = await request.formData();
//         async function executeStudentCrudOperations() {
//             const uri = process.env.DB_URI;
//             let mongoClient;

//             try {
//                 mongoClient = await connectToCluster(uri);
//                 const db = mongoClient.db('form');
//                 const collection = db.collection('formData');
//                 console.log('CREATE User');
//                 await createStudentDocument(collection);
//             } finally {
//                 await mongoClient.close();
//             }
//         }
//         async function createStudentDocument(collection) {
//             const studentDocument = {
//                 home,
//                 propertyPurchase,
//                 propertyLocationState,
//                 propertyLocationCity,
//                 workingLocationState,
//                 workingLocationCity,
//                 masterPlan,
//                 propertyType,
//                 propertiesOwned,
//                 referralName,
//                 referralNo,
//                 usernName,
//                 userNo,
//                 userMail,
//                 currentFinancialName,
//                 roi,
//                 currentFinanciallocation



//             };

//             await collection.insertOne(studentDocument);
//         }


//         config();
//         await executeStudentCrudOperations();
//     }
// }

// export const actions = {
//   default: async ({ request }) => {
//     const formData = Object.fromEntries(await request.formData());

// if (
//   !(formData.fileToUpload as File).name ||
//   (formData.fileToUpload as File).name === 'undefined'
// ) {
//   return fail(400, {
//     error: true,
//     message: 'You must provide a file to upload'
//   });
// }

// const { fileToUpload } = formData as { fileToUpload: File };
// writeFileSync(`static/userfiles/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

// return {
//   success: true
// };
//   }
// };
