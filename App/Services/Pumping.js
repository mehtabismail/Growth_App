import {BaseUrl} from './BaseUrl';

export const postPumping = async (token, data, success, fail) => {
  console.log(data, '================================');
  try {
    let response = await fetch(`${BaseUrl}/pumping`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response =>
        response.status >= 201 || response.status <=300
          ? response.json()
          : fail('status code is not 200'),
      )
      .then(json => {
          if (json?.data){
              success(json.data);
          }
      });
  } catch (error) {
    fail(error);
  }
};
