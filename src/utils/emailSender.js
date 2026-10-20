const DEFAULT_RECIPIENT = import.meta.env.VITE_FOUNDATION_EMAIL;

export const sendEmail = async({
    to = DEFAULT_RECIPIENT,
    subject = "New Enquiry",
    data,
    replyTo,
    template = "table",
} = {}) =>{
    if(!to || !to.trim()){
        throw new Error("Recipient email address is not configured.")
    }

    if(!data || typeof data !== "object" || Array.isArray(data)){
        throw new Error("Please provide the form data.")
    }

    const payload = {
        ...data,
        _subject : subject,
        _template : template
    };

    if(replyTo.trim()){
        payload._replyTo = replyTo.trim();
    }

    const response = await fetch(
        `https://formsubmit.co/ajax/${to.trim()}`,
        {
            method : "POST",
            headers : {
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            body:JSON.stringify(payload)
        }
    );

    let result ;
     try {
        result = await response.json()

     }catch{
        throw new Error("The email  service returened an invalid response.")
     }

     if(!response.ok || result?.success === false || result?.success === "false"){
        throw new Error(result?.message || "Unable to submit the email.")
     }

     return result;
}
