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

// get ceremonies data
export const getCeremonies = async (id) => {
  console.log({ id });

  try {
    const result = await axios.get(`${host}/posts/ceremony/${id}?populate=*`);

    return result;
  } catch (error) {
    return error;
  }
};

// get tags data
export const getAllTags = async () => {
  try {
    const res = await axios.get(`${host}/tags`);

    return res;
  } catch (error) {
    return error;
  }
};

export const getPostByTag = async (id) => {
  try {
    const res = await axios.get(`${host}/posts/tag/${id}?populate=*`);

    return res;
  } catch (error) {
    return error;
  }
};

export const getYadnyaDetailData = async (id) => {
  try {
    const res = await axios.get(`${host}/posts/${id}?populate=*`);

    return res;
  } catch (error) {
    return error;
  }
};

export const getCeremonySteps = async (id) => {
  try {
    const res = await axios.get(`${host}/steps/ceremony/${id}?populate=status,post`);

    return res;
  } catch (error) {
    return error;
  }
};

export const getPropertiesByMainPost = async (main_post) => {
  try {
    const res = await axios.get(
      `${host}/properties-by-main/${main_post}?populate=tag,child_post,main_post,post,parent_post`
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const getStepsSubDetails = async (parent_id, post_id) => {
  try {
    const res = await axios.get(`${host}/steps-sub-details/${parent_id}/${post_id}?populate=*`);

    return res;
  } catch (error) {
    return error;
  }
};

export const getSubDetailProperties = async (main_post, child_post, self) => {
  try {
    const res = await axios.get(`${host}/sub-details-property/${main_post}/${child_post}/${self}?populate=*`);

    return res;
  } catch (error) {
    return error;
  }
};
