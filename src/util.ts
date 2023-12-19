const whitelabelExampleBackendUrl = 'http://localhost:3341';

export const fetchGet = async (endpoint: string) => {
  const response = await fetch(`${whitelabelExampleBackendUrl}/${endpoint}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'GET',
  });
  const responseJSON = await response.json();
  return responseJSON;
};

export const fetchPost = async (endpoint: string, body: any) => {
  const response = await fetch(`${whitelabelExampleBackendUrl}/${endpoint}`, {
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
  });
  const responseJSON = await response.json();
  return responseJSON;
};
