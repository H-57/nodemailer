let subject;
let message; 




export const mailGenerator = (name,jobId,emailtype) => {
if(emailtype=="apply"){
    subject=` Applying for the position of -${jobId} `
  message=`Dear Sir/Madam,

  I have attached my resume for the position of ${jobId}.

  In my CV, I've listed information about my skills,educational background, and character traits.

  After looking over the job description, I am confident that I meet all the necessary requirements.

  I've conducted considerable research on your company, found your path fascinating, and look forward to what the future holds. It would be an honour for me to help with that.
  Please let me know whether you received this email. Contact me if you have any question.

  I'm eager to learn what will happen next.
  Sincerely,
  

${name}`

    return {
        subject:subject,
        message:message
    }
}

else if(emailtype=="refferal"){
    subject=`Exploring Exciting Opportunities: Seeking Your Guidance`
    message=`I hope this message finds you in high spirits. 😊 I'm reaching out because I believe in the power of connections, and your name came up as someone who understands the value of seizing great opportunities.

    I'm currently exploring new horizons in my career journey and have heard amazing things about your network. Your guidance or a referral would mean the world to me. I've attached my résumé for your reference.
    
    I understand your time is precious, and I assure you, a few minutes of your guidance can make a significant difference in my professional trajectory.
    
    Thank you so much for considering my request. Looking forward to the possibility of connecting with you and learning from your invaluable experience.
    
    Best regards,
    
    ${name}
    
    for -${jobId} `
    return {
        subject:subject,
        message:message
    }
}
   




}