let mail1={subject:``,message:``}
let mail2={subject:``,message:``}



export const mailGenerator = (name,jobId,emailtype) => {
if(emailtype=="apply"){
    mail1.subject=` Applying for the position of -${jobId} `
    mail1.message=`Dear Sir/Madam,

I hope you are well and reading my email. My name is ${name}, and I'm writing to express interest in the ${jobId} position.

The prospect of joining your team and assisting in the expansion and success of the business excites me. For your review, I've included my resume in this email, and if you require any more details, just let me know.

Thank you for considering my application. I look forward to the opportunity of discussing my qualifications further.

Sincerely,

${name}`
    return {
        subject:mail1.subject,
        message:mail1.message
    }
}
else if(emailtype=="refferal"){
    mail2.subject=`${name} apply for job`
    mail2.message=`${name} apply for job`
    return {
        subject:mail2.subject,
        message:mail2.message
    }
}
   




}