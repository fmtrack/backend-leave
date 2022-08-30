const Yup = require('yup');

const allLeaveType = Yup.object({
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

module.exports = {
  allLeaveType,
};
