const FIREBASE_DOMAIN = 'https://pixel-272c4-default-rtdb.europe-west1.firebasedatabase.app/';

async function getResource(url) {
  const response = await fetch(`${url}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Something went wrong');
  }
  return data;
}

async function sendResource(url, reqData, method = 'POST') {
  const response = await fetch(`${url}`, {
    method,
    body: JSON.stringify({ ...reqData }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Something went wrong');
  }

  return data;
}

export async function getAllImages() {
  const data = await getResource(`${FIREBASE_DOMAIN}/arts`);

  const transformedData = [];

  for (const key in data) {
    const imgObj = {
      id: key,
      img: data[key].image,
      date: data[key].date
    };
    transformedData.push(imgObj);
  }

  return transformedData;
}

export async function getSingleImage(requestData) {
  const { imageId } = requestData;
  const url = `${FIREBASE_DOMAIN}/arts/${imageId}`
  const data = getResource(url);
  return data;
}

export async function addImage(requestData) {
  const reqData = {
    image: requestData.image,
    date: requestData.date
  }

  const url = `${FIREBASE_DOMAIN}/arts.json`
  const response = await sendResource(url, reqData);

  return response;
}
