const Yup = require('yup');

const employeeRegister = Yup.object({
  // firstName: Yup.string().required(),
  // lastName: Yup.string().nullable(),
  // education: Yup.string().required(),
  // employementType: Yup.string().required(),
  // gender: Yup.string().required(),
  // panNumber: Yup.string().required(),
  // aadhar: Yup.string().required(),
  // bloodGroup: Yup.string().required(),
  // mobile: Yup.string()
  //   .required()
  //   .matches(/^[0-9]+$/, 'Must be only digits')
  //   .min(10, 'Must be exactly 10 digits')
  //   .max(10, 'Must be exactly 10 digits'),
  // email: Yup.string().lowercase().email().required(),
  // emergencyContact: Yup.string()
  //   .required()
  //   .matches(/^[0-9]+$/, 'Must be only digits')
  //   .min(10, 'Must be exactly 10 digits')
  //   .max(10, 'Must be exactly 10 digits'),
});

const employeeAddress = Yup.object({
  // addressLine1: Yup.string().required(),
  // addressLine2: Yup.string().required(),
  // landmark: Yup.string().required(),
  // state: Yup.string().required(),
  // city: Yup.string().required(),
  // pincode: Yup.string().required(),
  // verifyDocument: Yup.string().required(),
  // verifyDocumentPath: Yup.string().required(),
  // verifiedBy: Yup.string().required(),
  // verifiedOn: Yup.string().required(),
  // employeeId: Yup.number().required(),
});
const employeeDetails = Yup.object({
  // uanNum: Yup.string().required(),
  // esicNum: Yup.string().required(),
  // esicPath: Yup.string().required(),
  // panPath: Yup.string().required(),
  // aadharFrontPath: Yup.string().required(),
  // aadharBackPath: Yup.string().required(),
  // nomineeName: Yup.string().required(),
  // nomineeRelation: Yup.string().required(),
  // employeeId: Yup.number().required(),
});

module.exports = {
  employeeRegister,
  employeeAddress,
  employeeDetails,
};
