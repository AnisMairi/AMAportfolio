export async function POST(req) {
  const { name, email, object, message } = await req.json();

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Response.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name,
          email,
          object,
          message,
        },
      }),
    });

    if (!response.ok) {
      return Response.json(
        { success: false, error: 'Email service rejected the request.' },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ success: false }, { status: 500 });
  }
}
