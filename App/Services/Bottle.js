import {BaseUrl} from './BaseUrl';

export const postBottleFeed = async (token, data, success, fail) => {
  console.log(data, '================================');
  let status;
  try {
    let response = await fetch(`${BaseUrl}/bottle-feed`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        child_id: data.child_id,
        time: data.time,
        type: 'formula',
        unit: 'ml',
        amount: data.amount,
      }),
    })
      .then(response =>
        response.status == 201
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
