// import { AZURE_STORAGE_CONNECTION_STRING, AZURE_STORAGE_CONTAINER_NAME } from "$env/static/private";
// import { BlobServiceClient } from "@azure/storage-blob";
// import { writeFileSync, unlinkSync,readFile } from "node:fs";
export const prerender = false;
import { connectToCluster } from "../../../lib/database/mongo.js";
import transporter from "../../../lib/email/emailSetup.server";
import jsftp from 'jsftp'
const Ftp = new jsftp({
  host: "rinn.ipage.com",
  port: 21, // defaults to 21
  user: "rinn", // defaults to "anonymous"
  pass: "eYantrik@123" // defaults to "@anonymous"
});
let GOOGLE_EMAIL = "support@eyantrik.com"
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const file = data.get("file");
    let filename;
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const fileDate = "" + currentDay + currentMonth + currentYear + currentHour + currentMinute + currentSecond;
    filename = fileDate + "_" + file.name;
    try {
      Ftp.put(Buffer.from(await file.arrayBuffer()), filename, error => {
        if (!error) {
          console.log("File transferred successfully!");
        }
      });
      // writeFileSync(
      //   `build/userfiles/${filename}`,
      //   Buffer.from(await file.arrayBuffer())
      // );
      // if (!AZURE_STORAGE_CONNECTION_STRING) {
      //   return { message: " Some is wrong with file connection" }
      // } else {
      //   const blobServiceClient = BlobServiceClient.fromConnectionString(
      //     AZURE_STORAGE_CONNECTION_STRING
      //   );
      //   const containerClient = blobServiceClient.getContainerClient(
      //     AZURE_STORAGE_CONTAINER_NAME
      //   );
      //   const blockBlobClient = containerClient.getBlockBlobClient(filename);
      //   await blockBlobClient.uploadFile(`static/userfiles/${filename}`);
        const Requirment = cookies.get('Requirment');
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
        // const URL = blockBlobClient.url;
        const studentDocument = {
          Requirment,
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
            await collection.insertOne(studentDocument);
          }
          finally {
            mongoClient.close();
          }
        }
        
        await crudOperations();
        
        let email = "anshulsing154@gmail.com"
        let subject = "New User Login"
        let body = studentDocument.currentFinancialName;
        let html = `<!DOCTYPE html>
            <html>
            <head>
            <style>
            table {
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            
            td, th {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
            }
            
            tr:nth-child(even) {
              background-color: #dddddd;
            }
            </style>
            </head>  
            <body>
            Dear Sir,
 Please review this email in its entirety as it contains important information.

New User Logging In
<h2>New User Detailes</h2>

<table>
  <tr>
    <th>Requrements</th>
    <th>User input Data</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>${studentDocument.usernName}</td>
  </tr>
  <tr>
    <td>Mobile No.</td>
    <td>${studentDocument.userNo}</td>
   
  </tr>
  <tr>
    <td>Email</td>
    <td>${studentDocument.userMail}</td>
  </tr>
  <tr>
    <td>Requirment</td>
    <td>${studentDocument.Requirment}</td>
   
  </tr>
  <tr>
    <td>Property Location (City)</td>
    <td>${studentDocument.propertyLocationCity}</td>
  </tr>
  <tr>
    <td>Working Location (City)</td>
    <td>${studentDocument.propertyLocationState}</td>
  </tr>
  <tr>
    <td>Document uploaded for loan eligibility</td>
    <td>${studentDocument.URL}</td>
  </tr>
</table>



</body>
            `;
        console.log(email);
        const message = {
          from: GOOGLE_EMAIL,
          to: email,
          subject: subject,
          text: body,
          html: html,
        };

        const sendEmail = async (message) => {
          await new Promise((resolve, reject) => {
            transporter.sendMail(message, (err, info) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(info);
              }
            });
          });
        };

        await sendEmail(message);
        return { success: true };
      }
      // unlinkSync(`static/userfiles/${filename}`);
  catch(e) {
    console.log(e);
    return { success: false };
  }
}
}
