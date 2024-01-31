

interface ValidateFeilds {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    subject: string;
    message: string;
  }
  
  export const validateFelids = (values: ValidateFeilds) => {
    
    const errors: any = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexphone =
      /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;
    if (!values.name) {
      errors.name = vaildationMessage?.msg?.name;
    }
    if (!values.email) {
      errors.email = vaildationMessage?.msg?.emailValidation;
    } else if (!regexEmail.test(values.email)) {
      errors.email = vaildationMessage?.msg?.email;
    }
    if (!values?.phone) {
      errors.phone = vaildationMessage?.msg?.phone;
    } else if (!regexphone.test(values.phone)) {
      errors.phone = vaildationMessage?.msg?.phoneValidation;
    }
    if (!values?.companyName) {
      errors.companyName = vaildationMessage?.msg?.companyName;
    }
    if (!values?.message) {
      errors.message = vaildationMessage?.msg?.message;
    }
    if (!values?.subject) {
        errors.subject = vaildationMessage?.msg?.subject;
      }
    return errors;
  };
  
  const vaildationMessage: any = {
    msg: {
      name: ' Name is required!',
      email: 'Email is required!',
      emailValidation: 'This is not a valid email format!',
      phone: 'Phone Number is required!',
      phoneValidation: 'This is not a valid phone Number format!',
      subject: 'Please select subject!',
      message: 'Message is required!',
      companyName :"Please enter company name!"
    },
    

  };
  