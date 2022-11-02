import CONFIG from '../../config';

export async function signinRequest(email, password) {
  const endpoint = '/users/sign_in';
  const data = {
    email,
    password,
  };

  const response = await fetch(CONFIG.BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response || response.status !== 200) {
    throw new Error('Can not sign in user with the provided Endpoint');
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}

export async function signup(email, password) {
  const endpoint = '/users';

  const data = {
    email,
    password,
  };

  const response = await fetch(CONFIG.BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response || response.status !== 200) {
    throw new Error('Can not sign up user with the provided Endpoint');
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}

export async function authenticate(token) {
  const endpoint = '/users/me';

  const response = await fetch(CONFIG.BASE_URL + endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response || response.status !== 200) {
    throw new Error('Can not sign in user with the provided Endpoint');
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}

export async function updateUser({ data, token }) {
  const endpoint = '/users/me';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(CONFIG.BASE_URL + endpoint, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });

  if (!response || response.status !== 200) {
    throw new Error('Failed in updating data');
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}
