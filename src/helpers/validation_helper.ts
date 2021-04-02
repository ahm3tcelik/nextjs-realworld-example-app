export default class ValidationHelper {
    private constructor() { }

    static readonly EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static readonly PHONE_REGEXP: RegExp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    static readonly POSTAL_REGEXP: RegExp = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

    static readonly DATE_MM_DD_YYYY_REGEXP: RegExp = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    static readonly URL_REGEXP: RegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    static readonly ALPHA_NUMERIC_REGEXP: RegExp = /^[a-zA-Z0-9]*$/;

    static readonly DECIMAL_REGEXP: RegExp = /^[0-9]+\.?[0-9]*$/;

    static isEmail(value: string): boolean {
        return ValidationHelper.EMAIL_REGEXP.test(value);
    }

    static isPhone(value: string): boolean {
        return ValidationHelper.PHONE_REGEXP.test(value);
    }

    static isPostalCode(value: string): boolean {
        return ValidationHelper.POSTAL_REGEXP.test(value);
    }

    static isDateDDMMYYYY(value: string): boolean {
        return ValidationHelper.DATE_MM_DD_YYYY_REGEXP.test(value);
    }

    static isUrl(value: string): boolean {
        return ValidationHelper.URL_REGEXP.test(value);
    }

    static isAlphaNumeric(value: string): boolean {
        return ValidationHelper.ALPHA_NUMERIC_REGEXP.test(value);
    }

    static isDecimal(value: string): boolean {
        return ValidationHelper.DECIMAL_REGEXP.test(value);
    }
}