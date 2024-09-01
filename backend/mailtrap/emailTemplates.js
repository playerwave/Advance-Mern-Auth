export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title></title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: #333;
      background-color: #fff;
    }

    .container {
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      padding: 0 0px;
      padding-bottom: 10px;
      border-radius: 5px;
      line-height: 1.8;
    }

    .header {
      border-bottom: 1px solid #eee;
    }

    .header a {
      font-size: 1.4em;
      color: #000;
      text-decoration: none;
      font-weight: 600;
    }

    .content {
      min-width: 700px;
      overflow: auto;
      line-height: 2;
    }

    .otp {
      background: linear-gradient(to right, #00bc69 0, #00bc88 50%, #00bca8 100%);
      margin: 0 auto;
      width: max-content;
      padding: 0 10px;
      color: #fff;
      border-radius: 4px;
    }

    .footer {
      color: #aaa;
      font-size: 0.8em;
      line-height: 1;
      font-weight: 300;
    }

    .email-info {
      color: #666666;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      padding-bottom: 6px;
    }

    .email-info a {
      text-decoration: none;
      color: #00bc69;
    }
  </style>
</head>

<body>
  <!--Subject: Login Verification Required for Your [App Name] Account-->
  <div class="container">
    <div class="header">
      <a>Prove Your [App Name] Identity</a>
    </div>
    <br />
    <strong>Dear [Recipient Name],</strong>
    <p>
      We have received a login request for your [App Name] account. For
      security purposes, please verify your identity by providing the
      following One-Time Password (OTP).
      <br />
      <b>Your One-Time Password (OTP) verification code is: {verificationCode}</b>
    </p>
    <h2 class="otp">{Insert OTP}</h2>
    <p style="font-size: 0.9em">
      <strong>One-Time Password (OTP) is valid for 3 minutes.</strong>
      <br />
      <br />
      If you did not initiate this login request, please disregard this
      message. Please ensure the confidentiality of your OTP and do not share
      it with anyone.<br />
      <strong>Do not forward or give this code to anyone.</strong>
      <br />
      <br />
      <strong>Thank you for using [App Name].</strong>
      <br />
      <br />
      Best regards,
      <br />
      <strong>[Company Name]</strong>
    </p>

    <hr style="border: none; border-top: 0.5px solid #131111" />
    <div class="footer">
      <p>This email can't receive replies.</p>
      <p>
        For more information about [App Name] and your account, visit
        <strong>[Name]</strong>
      </p>
    </div>
  </div>
  <div style="text-align: center">
    <div class="email-info">
      <span>
        This email was sent to
        <a href="mailto:{Email Adress}">{Email Adress}</a>
      </span>
    </div>
    <div class="email-info">
      <a href="/">[Company Name]</a> | [Address]
      | [Address] - [Zip Code/Pin Code], [Country Name]
    </div>
    <div class="email-info">
      &copy; 2023 [Company Name]. All rights
      reserved.
    </div>
  </div>
</body>
<!--    This template is made Redwan one from Ocoxe. -->
<!-- https://www.ocoxe.com -->
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        .email-header h1 {
            color: #333333;
        }
        .email-body {
            text-align: center;
        }
        .email-body p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .reset-button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
        }
        .email-footer {
            text-align: center;
            border-top: 1px solid #eeeeee;
            padding-top: 20px;
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Password Reset Request</h1>
        </div>
        <div class="email-body">
            <p>Hi {user.name},</p>
            <p>You recently requested to reset your password. Click the button below to reset it.</p>
            <a href="{resetURL}" class="reset-button">reset your password</a>
            <p>If you did not request a password reset, please ignore this email.</p>
        </div>
        <div class="email-footer">
            <p>If you have any questions, feel free to contact our support team.</p>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    <!-- Web Font / @font-face : BEGIN -->
    <!--[if mso]>
        <style>
            * {
                font-family: 'Roboto', sans-serif !important;
            }
        </style>
    <![endif]-->

    <!--[if !mso]>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    <![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset : BEGIN -->
    
    
    <style>
        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: 'Roboto', sans-serif !important;
            font-size: 14px;
            margin-bottom: 10px;
            line-height: 24px;
            color:#8094ae;
            font-weight: 400;
        }
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
        }
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        table table table {
            table-layout: auto;
        }
        a {
            text-decoration: none;
        }
        img {
            -ms-interpolation-mode:bicubic;
        }
    </style>

</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
	<center style="width: 100%; background-color: #f5f6fa;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
            <tr>
               <td style="padding: 40px 0;">
                    <table style="width:100%;max-width:620px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; padding-bottom:25px">
                                    <a href="#"><img style="height: 40px" src="images/instagram-logo.png" alt="logo"></a>
                                    <p style="font-size: 14px; color: #6576ff; padding-top: 12px;">Tech Mind Dashboard</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                        <tbody>
                            <tr>
                                <td style="text-align:center;padding: 30px 30px 15px 30px;">
                                    <h2 style="font-size: 18px; color: #1ee0ac; font-weight: 600; margin: 0;">Password Reseted</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align:center;padding: 0 30px 20px">
                                    <p style="margin-bottom: 10px;">Hi Sundar,</p>
                                    <p>You Successfully Reseted Your Password. Thanks For being with Us.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align:center;padding: 0 30px 40px">
                                    <p style="margin: 0; font-size: 13px; line-height: 22px; color:#9ea8bb;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at  techmindhelps@gmail.comm</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; padding:25px 20px 0;">
                                    <p style="font-size: 13px;">Copyright © 2021 Tech Mind. All rights reserved. <br> Template Made By <a style="color: #6576ff; text-decoration:none;" href="">Tech Mind</a>.</p>
                                    <ul style="margin: 10px -4px 0;padding: 0;">
                                        <li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-b.png" alt="brand"></a></li>
                                        <li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-e.png" alt="brand"></a></li>
                                        <li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-d.png" alt="brand"></a></li>
                                        <li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-c.png" alt="brand"></a></li>
                                    </ul>
                                    <p style="padding-top: 15px; font-size: 12px;">This email was sent to you as a registered user of <a style="color: #6576ff; text-decoration:none;" href="">techmindtech.com</a>. To update your emails preferences <a style="color: #6576ff; text-decoration:none;" href="#">click here</a>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               </td>
            </tr>
        </table>
    </center>
</body>
</html>
`;
