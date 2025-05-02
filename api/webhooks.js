// filepath: c:\Users\ADMIN\Downloads\teams-main\teams-main\api\webhook.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      if (req.body?.validationToken) {
        // Log the received validation token for debugging
        console.log('Notification received');
        console.log('Validation token received:', req.body.validationToken);
  
        // Respond with the validation token to complete the validation
        return res.status(200).send(req.body.validationToken);
      } else {
        // Handle the incoming notification if no validation token is found
        console.log('Notification received');
        console.log('Notification received:', JSON.stringify(req.body));
        return res.status(200).send('OK'); // Respond with 'OK' or the appropriate message
      }
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }