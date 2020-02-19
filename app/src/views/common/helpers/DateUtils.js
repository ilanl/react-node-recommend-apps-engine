export const calculateAge = birthdate => {
  // From: https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-betwen-two-dates
  var ageDifMs = Date.now() - birthdate;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
