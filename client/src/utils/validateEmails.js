const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (recipients) => {
    const invalidEmails = recipients.split(',').map(recipient => recipient.trim()).filter(recipient => re.test(recipient) === false);
    if (invalidEmails.length) {
        if (invalidEmails.length > 1) {
            return `These Emails are invalid : ${invalidEmails}`
        } else {
            return `This Email is invalid : ${invalidEmails}`
        }

    }
    return;
}