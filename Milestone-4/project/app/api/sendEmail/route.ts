
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

   
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',  
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS, 
    },
  });

   
  const mailOptions = {
    from: process.env.EMAIL_USER,  
    to: process.env.RECIPIENT_EMAIL,  
    subject: `New Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  try {
     
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), { status: 500 });
  }
}
