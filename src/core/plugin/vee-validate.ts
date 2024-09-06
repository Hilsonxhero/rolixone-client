

import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize, setLocale, loadLocaleFromURL } from '@vee-validate/i18n';

export function initVeeValidate() {

    defineRule('required', required);

    // configure({

    //     generateMessage: localize('fa', {
    //         names: {
    //             name: 'الاسم',
    //             age: 'السن',
    //             ageConfirm: 'تأكيد السن'
    //         },
    //         messages: {
    //             required: "{field} الزامی می باشد",
    //         },
    //     })
    // });

    // setLocale("fa")

}


