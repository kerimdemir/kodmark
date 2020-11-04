import ajax from '../AxiosService';

const API_URL = 'https://gann.digilabtech.com';

export const putDeposit = (data) => {
    let apiData = {
        'comment': data.fromLogin + ' to ' + data.toLogin,
        'amount': Number(data.amount),
    };
    return ajax.put(API_URL + '/api/v2/customer/9963/meta-account-integrated/3521/deposit', {
        ...apiData,
    });
};
