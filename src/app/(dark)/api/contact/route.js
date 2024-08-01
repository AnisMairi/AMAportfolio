import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, object, message } = await req.json();

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'anismairi1@gmail.com', // replace with your Gmail address
      pass: 'Faltadex123@!', // replace with your Gmail password or app password
    },
  });

  // Setup email data
  let mailOptions = {
    from: email,
    to: 'anismairi1@gmail.com',
    subject: object,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
