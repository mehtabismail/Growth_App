import {BaseUrl} from './BaseUrl';

export const postDiaperLog = async (token, data, success, fail) => {
  console.log(data, '================================');
  let status;
  try {
    let response = await fetch(`${BaseUrl}/diaper-log`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        child_id: data.child_id,
        time: data.time,
        what_was_in: data.what_was_in
      }),
    })
      .then(response =>
        response.json()
        // response.status == 201
        //   ? response.json()
        //   : fail('status code is not 200'),
      )
      .then(json => {
        console.log(json, "checking")
          if (json?.data){
              success(json.data);
          }
      });
  } catch (error) {
    fail(error);
  }
};
