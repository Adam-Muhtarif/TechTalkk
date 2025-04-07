import { PayloadRequest } from 'payload'

export const resetPasswordEmail = (
  args:
    | {
        req?: PayloadRequest
        token?: string
        user?: any
      }
    | undefined,
): Promise<string> | string => {
  const resetPasswordURL = `${process.env.PAYLOAD_URL}/admin/reset/${args?.token}`

  return `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                background-color: #ffffff;
                max-width: 600px;
                margin: 40px auto;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              }
              h1 {
                color: #222;
                font-size: 24px;
                margin-bottom: 20px;
              }
              p {
                color: #555;
                font-size: 16px;
                line-height: 1.5;
              }
              a.button {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 20px;
                background-color: #0070f3;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
              }
              .footer {
                margin-top: 30px;
                font-size: 12px;
                color: #999;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Reset Your TechTalkk Admin Password</h1>
              <p>Hi ${args?.user?.fullName},</p>
              <p>We received a request to reset your password. Click the button below to proceed:</p>
              <p>
                <a href="${resetPasswordURL}" class="button">Reset Password</a>
              </p>
              <p>If you didn’t request this, you can safely ignore this email.</p>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Techtalkk Community. All rights reserved.
              </div>
            </div>
          </body>
        </html>
      `
}

export const verifyEmail = (
  args:
    | {
        req?: PayloadRequest
        token?: string
        user?: any
      }
    | undefined,
): Promise<string> | string => {
  const verifyEmailURL = `${process.env.PAYLOAD_URL}/admin/users/verify/${args?.token}`

  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          h1 {
            color: #222;
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            color: #555;
            font-size: 16px;
            line-height: 1.5;
          }
          a.button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 20px;
            background-color: #0070f3;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Verify Your TechTalkk Admin Email</h1>
          <p>Hi ${args?.user?.fullName},</p>
          <p>Thank you for registering with TechTalkk. To complete your registration, click the button below to verify your email:</p>
          <p>
            <a href="${verifyEmailURL}" class="button">Verify Email</a>
          </p>
          <p>If you didn’t register for an account, you can safely ignore this email.</p>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Techtalkk Community. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `
}
