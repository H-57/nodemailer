import nodemailer from "nodemailer";
import 'dotenv/config';

const SENDMAIL = async (user, password, recivers, subject, message, fileName, filePath) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: password,
    },
  });

  const sendMailAsync = (options) => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(options, (error, info) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log("Email sent successfully");
          console.log("MESSAGE ID: ", info.messageId);
          resolve(info);
        }
      });
    });
  };

  const file_Path = filePath;

  for (const reciver of recivers) {
    const options = {
      to: reciver,
      subject: subject,
      text: message,
      attachments: [
        {
          filename: fileName,
          path: file_Path,
          contentDisposition: 'attachment',
        },
      ],
    };


    try {
      await sendMailAsync(options);
    } catch (error) {
      console.error("Error sending email:", error);
      return false; // Return false if any email fails
    }
  }

  return true; // Return true if all emails are sent successfully
};

export default SENDMAIL;
