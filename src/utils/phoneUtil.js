const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PNF = require('google-libphonenumber').PhoneNumberFormat;

/**
 * Format a given phone number to E164 format.
 * E164 is an international phone format: https://en.wikipedia.org/wiki/E.164
 *
 * @param number
 * @returns string
 */
export const parseAndFormat = (number) => {
    const phone = phoneUtil.parse(number, 'FR');
    return phoneUtil.format(phone, PNF.E164)
};

/**
 * Validate that a given number can be parsed and is valid.
 *
 * @param number
 * @returns boolean
 */
export const isValidNumber = (number) => {
    try {
        const phone = phoneUtil.parse(number, 'FR');
        return phoneUtil.isPossibleNumber(phone);
    } catch {
        return false;
    }
};