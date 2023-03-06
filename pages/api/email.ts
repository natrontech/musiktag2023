import { SMTPClient } from 'emailjs';

export default function handler(req: any, res: any) {

  let { name, text, email } = req.body;


  if (!name || !text || !email) {
    res.status(400).end(JSON.stringify({ message: "Error" }))
    return;
  }

  const textHelfer = text + `\n Vielen Dank für deine Helferanfrage. Wir werden uns so schnell wie möglich bei dir melden. \n\n Liebe Grüsse \n\n Musikgesellschaft Konolfingen`

  // if not POST request, return 405
  if (req.method !== 'POST') {
    res.status(405).end(JSON.stringify({ message: "Error" }))
    return;
  }

  const client = new SMTPClient({
    user: process.env.ENV_MAIL_USERNAME,
    password: process.env.ENV_MAIL_PASSWORD,
    host: 'lx20.hoststar.hosting',
    port: 465,
    ssl: true
  });

  try {
    client.send(
      {
        text: text,
        from: 'Helferanfragen Amtsmusiktag <sponsoring@mgkonolfingen.ch>',
        to: 'Musiktag2023 <musiktag2023@mgkonolfingen.ch>',
        subject: 'Helferanfrage Amtsmusiktag: ' + name,
      },
      (err, message) => {
        console.log(err || message);
      }
    )
    client.send(
      {
        text: textHelfer,
        from: 'Helferanfragen Amtsmusiktag <sponsoring@mgkonolfingen.ch>',
        to: name + ' <' + email + '>',
        subject: 'Deine Helferanfrage am Amtsmusiktag: ' + name,
      },
      (err, message) => {
        console.log(err || message);
      }
    )
  }
  catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }))
    return;
  }

  res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}
