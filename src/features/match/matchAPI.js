import CONFIG from '../../config';

export async function matchCallRequest(token, location) {
  const endpoint = '/match';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const data = {
    location,
  };

  const response = await fetch(CONFIG.BASE_URL + endpoint, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });

  if (!response || response.status >= 400) {
    throw new Error('Error in getting response successfully');
  }

  try {
    const data = await response.json();
    return data;
  } catch {
    throw new Error('Response format is not JSON!');
  }
}

export async function cancelCancelRequest() {
  return false;
}
