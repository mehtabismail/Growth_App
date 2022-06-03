import {BaseUrl} from './BaseUrl';

export const getCommunityForum = async (token, success, fail) => {
  try {
    let response = await fetch(`${BaseUrl}/forum-category`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response =>
        response.status == 200
          ? response.json()
          : fail('status code is not 2000'),
      )
      .then(json => success(json));
  } catch (error) {
    fail(error);
  }
};
