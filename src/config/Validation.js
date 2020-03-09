import {
    extend
} from 'vee-validate';
import {
    required,
    confirmed
} from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The {_field_} field is required.'
});
extend('confirmed', {
    ...confirmed,
    message: 'Both {_field_} and email field not matched.'
});
extend('max', (value, max) => {
    if (value.length <= parseInt(max[0])) {
        return true;
    }
    return `The {_field_} field length should not be greater than ${parseInt(max[0])}`;
});
extend('min', (value, min) => {
    if (value.length >= parseInt(min[0])) {
        return true;
    }
    return `The {_field_} field length should not be less than ${parseInt(min[0])}`;
});
extend('integer', (value) => {
    if ((/^(?<=\s|^)\d+(?=\s|)$/.test(value))) {
        return true;
    }
    return 'The {_field_} field must be a integer'
});
extend('positive', value => {
    if (value >= 0) {
        return true;
    }
    return 'The {_field_} field must be a positive number';
});
extend('email', (value) => {
    if ((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/.test(value))) {
        return true;
    }
    return 'The {_field_} field must be a valid email.'
});
extend('domain_name', (value) => {
    if ((/^(?!(live|hotmail|outlook|aol|yahoo|rocketmail|gmail|gmx\.com|mail\.com|inbox\.com|icloud|aim|yandex|zoho))[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,6}$/.test(value))) {
        return true;
    }
    return 'The {_field_} field must be a valid domain name.'
});
extend('alpha_num_spaces', (value) => {
    if ((/^[a-zA-Z0-9 ]*$/.test(value))) {
        return true;
    }
    return 'The {_field_} field must contains only numbers, alphabets and spaces'
});
extend('zip_code', (value) => {
    if ((/^[a-z\d\-_\s]+$/.test(value))) {
        return true;
    }
    return 'The {_field_} field must be a valid.'
});