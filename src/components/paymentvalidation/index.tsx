interface ValidateFeilds {
  firstName: any;
  lastName: string;
  email: string;
  phone: any;
  address: string;
  licNo: any;
  uploadInsurance: FileList | any;
  select: string;
  electronicSignature: FileList | any;
  rentalAgreement: FileList | any;
  telephoneBill: FileList | any;
  uploadLic: FileList | any;
  pickupdate: any;
  pickuptime: any;
  returndate: any;
  returntime: any;
  pickuplocation: any;
}
// interface valuesinterface {
//   values: ValidateFeilds;
// }

export const validateFelids = ({ ...values }): any => {


  const errors: any = {};
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const regexLicNo = /^\d+$/;
  const regexphone =
    /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;

  // const regexImage = /\.(png)| jpg | jpeg | pdf $/i;
  const regexImage = /\.(jpe?g|png|jpg|pdf)$/i;

  // console.log("imageExt", regexImage);
  // console.log("imageExt", values?.uploadLic?.name);
  // console.log("imageExtxxx", regexImage.test(values?.uploadLic?.name));

  if (!values.firstName) {
    errors.firstName = vaildationMessage?.msg?.firstName;
  }
  if (!values.lastName) {
    errors.lastName = vaildationMessage?.msg?.lastName;
  }
  if (!values.email) {
    errors.email = vaildationMessage?.msg?.email;
  }
   else if (!regexEmail.test(values.email)) {
    errors.email = vaildationMessage?.msg?.emailValidation;
  }
  if (!values?.phone) {
    errors.phone = vaildationMessage?.msg?.phone;
  } else if (!regexphone.test(values.phone)) {
    errors.phone = vaildationMessage?.msg?.phoneValidation;
  }
  if (!values?.address) {
    errors.address = vaildationMessage?.msg?.address;
  }
  if (!values?.licNo) {
    errors.licNo = vaildationMessage?.msg?.licNo;
  } else if (!regexLicNo.test(values?.licNo)) {
    errors.licNo = vaildationMessage?.msg?.licValidation;
  }

  if (!values?.uploadInsurance) {
    errors.uploadInsurance = vaildationMessage?.msg?.uploadInsurance;
  }
  else if (!regexImage.test(values?.uploadInsurance?.name)) {
    errors.uploadInsurance = vaildationMessage?.msg?.licImgValidation;
  }

  if (!values?.electronicSignature) {
    errors.electronicSignature = vaildationMessage?.msg?.electronicSignature;
  }
  if (!values?.select) {
    errors.select = vaildationMessage?.msg?.select;
  }
  if (!values?.rentalAgreement) {
    errors.rentalAgreement = vaildationMessage?.msg?.rentalAgreement;
  }else if (!regexImage.test(values?.rentalAgreement?.name)) {
    errors.rentalAgreement = vaildationMessage?.msg?.licImgValidation;
  }

  if (!values?.telephoneBill) {
    errors.telephoneBill = vaildationMessage?.msg?.telephoneBill;
  } else if (!regexImage.test(values?.telephoneBill?.name)) {
    errors.telephoneBill = vaildationMessage?.msg?.licImgValidation;
  }

  if (!values?.uploadLic) {
    errors.uploadLic = vaildationMessage?.msg?.uploadLic;
  } else if (!regexImage.test(values?.uploadLic?.name)) {
    errors.uploadLic = vaildationMessage?.msg?.licImgValidation;
  }

  if (!values?.pickupdate) {
    errors.pickupdate = vaildationMessage?.msg?.pickupdate;
  }
  if (!values?.pickuptime) {
    errors.pickuptime = vaildationMessage?.msg?.pickuptime;
  }
  if (!values?.returndate) {
    errors.returndate = vaildationMessage?.msg?.returndate;
  }

  if (!values?.returntime) {
    errors.returntime = vaildationMessage?.msg?.returntime;
  }

  if (!values?.pickuplocation) {
    errors.pickuplocation = vaildationMessage?.msg?.pickuplocation;
  }

  return errors;
};

const vaildationMessage: any = {
  msg: {
    firstName: "First name is required!",
    lastName: " Last name is required!",
    email: "Email is required!",
    emailValidation: "This is not a valid email format!",
    phone: "Phone Number is required!",
    phoneValidation: "This is not a valid phone Number format!",
    //   subject: 'please select subject!',
    address: "Address is required!",
    select: "Please Select card!",
    licNo: "Lic No is Required!",
    licValidation: "Lic No must be number",
    licImgValidation: "images should be jpeg | png | jpg | pdf",
    uploadLic: "Please upload Documents LIC document!",
    uploadInsurance: " Please upload Documents insurance document!",
    electronicSignature:
      " Electronic Signature is required & save before submit!",
    rentalAgreement: "Please upload  Rental Arrangement!",
    telephoneBill: "Please upload  Utility Bill & Proof of Residence Bill!",
    pickupdate: "Please select pickupdate",
    pickuptime: "Please select pickuptime",
    returndate: "Please select returndate",
    returntime: "Please select returntime",
    pickuplocation: "Please select pickuplocation",
  },
};
