const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PNF = require('google-libphonenumber').PhoneNumberFormat;

export const parseAndFormat = (number) => {
    const phone = phoneUtil.parse(number, 'FR');
    return phoneUtil.format(phone, PNF.E164)
};

export const isValidNumber = (number) => {
    try {
        const phone = phoneUtil.parse(number, 'FR');
        return phoneUtil.isPossibleNumber(phone);
    } catch {
        return false;
    }
};