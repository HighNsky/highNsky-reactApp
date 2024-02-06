// interface ValidateFeilds {
//   checkbox: boolean;
// }

export const validateFelids = (values: any) => {
 
  const errors: any = {};

  if (values === false ) {
    errors.checkbox = vaildationMessage?.msg?.checkbox;
  }
  return errors;
};

const vaildationMessage: any = {
  msg: {
    checkbox: "please accept terms and conditions!",
  },
};
