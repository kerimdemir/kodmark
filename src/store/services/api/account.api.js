import ajax from '../AxiosService';

const API_URL = 'https://gann.digilabtech.com';

export const getCurrency = () => ajax.get(`${API_URL}/api/currency`);

export const getMetaAccountIntegratedGroup = (serverId) =>
    ajax.get(
        `${API_URL}/api/v2/customer/meta-account-integrated/group?serverId=${serverId}`,
    );

export const postDemoAccount = ({cid = 9963, data}) => {

    return ajax.post(API_URL+'/api/v2/customer/9963/meta-account-integrated', data);
};
export const getDemoAccounts = (cid = 9963) =>
    ajax.get(`${API_URL}/api/v2/customer/${cid}/meta-account`);

export const putMetaAccountChangePassword = (cid = 9963, id, password) =>
    ajax.put(
        `${API_URL}/api/v2/customer/9963/meta-account-integrated/${id}/password`,
        {
            password,
        },
    );
// https://gann.digilabtech.com/api/v2/customer/9963/meta-account-integrated/3515/password
