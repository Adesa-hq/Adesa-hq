export function contactEmailTemplate({ name, email, phone, subject, message }) {
  return `
<div style="margin:0;padding:0;background:#F6EFEA;font-family:Inter,Arial,sans-serif;color:#2B2B2B">

  <table width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #eee">

    <!-- Header -->
    <tr>
      <td style="background:#151E47;padding:32px">

        <img
          src="https://your-media-logo-url.com/logo.png"
          width="140"
          style="display:block;margin-bottom:14px"
          alt="Adesa HQ"
        />

        <h1 style="margin:0;font-size:24px;color:#ffffff">
          New Client Inquiry
        </h1>

        <p style="margin-top:6px;font-size:13px;color:#FFA205">
          Adesa HQ
        </p>

      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:36px">

        <p style="margin:0 0 20px;font-size:15px">
          A new inquiry has been submitted through the Adesa HQ website.
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">

          <tr>
            <td style="padding:10px 0;font-weight:600;width:140px">
              Full Name
            </td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:600">
              Email Address
            </td>
            <td>
              <a href="mailto:${email}" style="color:#151E47;text-decoration:none;font-weight:500">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:600">
              Phone
            </td>
            <td>${phone || "Not provided"}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:600">
              Service Requested
            </td>
            <td>${subject}</td>
          </tr>

        </table>

        <!-- Message -->
        <div style="margin-top:28px;padding:22px;background:#F6EFEA;border-left:4px solid #FFA205;border-radius:6px">

          <p style="margin:0 0 8px;font-weight:600">
            Project Details
          </p>

          <p style="margin:0;line-height:1.6">
            ${message}
          </p>

        </div>

        <!-- CTA -->
        <div style="margin-top:32px;text-align:center">

          <a
            href="mailto:${email}"
            style="display:inline-block;background:#FFA205;color:#151E47;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:600;font-size:14px"
          >
            Reply to Client
          </a>

        </div>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#2B2B2B;padding:22px;text-align:center">

        <p style="margin:0;font-size:12px;color:#ffffff">
          Adesa Media
        </p>

        <p style="margin-top:6px;font-size:11px;color:#FFA205">
          adesamedia.com
        </p>

      </td>
    </tr>

  </table>

</div>
`;
}
