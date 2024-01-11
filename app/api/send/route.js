import sendgrid from '@sendgrid/mail';
import { NextResponse } from 'next/server' 

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {

    const body = await req.json()
    console.log('Este es el body');
    console.log(body);

   await sendgrid.send({
      to: 'diegocatalan.sdev@gmail.com', 
      from: 'diegocatalan.sdev@gmail.com',
      subject: `Correo enviado por ${body.name}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    
      </head>
      
      <body>
              <div  style="margin-left: 20px; margin-right: 20px;">
                <h3>You've got a new mail from ${body.name}, their email is: ✉️${body.email} </h3>
                <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${body.message}</p>
                    <br>
                </div>
              </div>
      </body>
      </html>`,
    });


    return NextResponse.json({ response: 'success' });
  

  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message });
  }

 
}


