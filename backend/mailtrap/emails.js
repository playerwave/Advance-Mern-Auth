import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendverificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email send Successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email:`, error);
  }
};
