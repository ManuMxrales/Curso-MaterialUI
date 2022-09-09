import { urlFetch } from '../constants/index'

export const getGithubUser = async(user) => {
    const response = await fetch(`${urlFetch}${user}`, {
        method:'GET'
    });
    const payload = response.json();

    return payload;
}