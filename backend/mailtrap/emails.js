import {mailtrapClient, sender} from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { constants } from "crypto";


export const sendVerificationEmail =  async (email, verificationToken) => {
    const recipient = [{email}]

    try{
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification" 
        })
        console.log("email send successfully", response)
    }catch(err){
        console.error("Error sending verification", err);
      throw new Error(`Error sending verification email: ${err}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
 
    const recipient = [{email}];

    try{
       const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "16d0a7ec-0cdf-4b2b-993a-57fc6f0cbad2",
            template_variables: {
                company_info_name: "C Tech",
                name: name
            }
        });

        console.log("welcome email sent successfully", response);
    }catch(err){
      throw new Error(`Error sending welcome email: ${err}`);
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
   const recipient = [{ email }];

   try{
     const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Reset your password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        category: "Password Rset",
     });

   }catch(err){
     console.error(`Error sending password reset email`, err);
     throw new Error(`Error sending password reset email ${err} `)
   }
}

export const sendResetSuccessEmail = async (email) => {

  const recipient = [{ email }];

  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password  Reset",
    });

    console.log("Password reset email sent successfully", response);

  }catch(err){
    console.error("Error sending password reset success email", err);
    throw new Error("Error sending password reset success email", err);
  }
}