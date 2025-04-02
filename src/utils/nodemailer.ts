// import nodemailer from "nodemailer";
// import schedule from "node-schedule";
// import { StatusType } from "../types";

// interface EmailTemplateData {
//   dentistName: string;
//   firstName: string;
//   lastName: string;
//   time: string;
//   date: Date;
// }
// interface EmailHandlerData {
//   data: EmailTemplateData;
//   statusType: StatusType;
//   dentistName: string;
//   patientEmail: string;
// }

// const { GMAIL_EMAIL: myEmail, GMAIL_PASSWORD: myPassword } = process.env;

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: myEmail,
//     pass: myPassword,
//   },
// });

// export const emailHandler = ({
//   data,
//   statusType,
//   dentistName,
//   patientEmail,
// }: EmailHandlerData) => {
//   let mailOptions = {
//     from: myEmail,
//     to: patientEmail,
//     subject,
//     text,
//   };

//   switch(statusType){
//     case "Booked":
//         break;
//         default
//   }

//   if () {
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//   } else {
//     //8am the day before the schedule
//     schedule.scheduleJob(data.date, function () {
//       console.log("The world is going to end today.");
//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Email sent: " + info.response);
//         }
//       });
//     });
//   }
// };

// let template;

// const bookedEmail = ({
//   dentistName,
//   firstName,
//   lastName,
//   time,
//   date,
// }: EmailTemplateData) => {
//   return `
//     <body style="font-family: Arial, sans-serif; color: #333;">
//         <h2>Your Appointment is Confirmed!</h2>
//         <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
//         <p>Thank you for booking your appointment with <strong>${dentistName}</strong>! Your visit is confirmed.</p>
//         <p><strong>📅 Date:</strong> ${date}</p>
//         <p><strong>⏰ Time:</strong> ${time}</p>
//         <p>If you have any questions or need to make changes, feel free to contact us at <a href="mailto:${myEmail}">${myEmail}</a>.</p>
//         <p>We look forward to seeing you!</p>
//         <p>Best regards,<br>
//         <strong>${firstName} ${lastName}</strong><br>
//         ${dentistName}</p>
//     </body>
// `;
// };
