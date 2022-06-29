import axios from 'axios';

let host;

switch (process.env.NEXT_PUBLIC_ENV) {
  case 'dev':
    host = process.env.NEXT_PUBLIC_HOST_DEV;
    break;
  default:
    host = process.env.NEXT_PUBLIC_HOST_PROD;
    break;
}

export const getCeremonies = async (id) => {
  console.log({ id });

  try {
    const result = await axios.get(`${host}/posts/ceremony/${id}?populate=*`);

    return result;
  } catch (error) {
    return error;
  }
};
