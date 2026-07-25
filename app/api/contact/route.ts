import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      company,
      country,
      email,
      product,
      message,
    } = await request.json();


    const { data, error } = await resend.emails.send({

      from: "Cross Voyage Exports <noreply@crossvoyage.com>",

      to: [
        "contact@crossvoyage.com"
      ],

      subject: "New Buyer Inquiry - Cross Voyage Exports",

      replyTo: email,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          color: #333;
        ">

          <h2 style="color:#166534;">
            New Buyer Inquiry - Cross Voyage Exports
          </h2>

          <p>
            You have received a new inquiry through your website.
          </p>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Company Name:</strong> ${company}
          </p>

          <p>
            <strong>Country:</strong> ${country}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Product Requirement:</strong> ${product}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p>
            <strong>Cross Voyage Exports Private Limited</strong>
          </p>

          <p>
            Email: contact@crossvoyage.com
            <br />
            Website: crossvoyage.com
          </p>

        </div>
      `,
    });


    if (error) {

      console.log("Resend Error:", error);

      return Response.json(
        {
          success: false,
          message: "Email sending failed",
        },
        {
          status: 500,
        }
      );
    }


    return Response.json(
      {
        success: true,
        message: "Inquiry sent successfully",
        data,
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    console.log("API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );

  }
}