import request from 'utils/request';

export const getOpenList = () => {
  return request({
    url: '/api/openchat',
    method: 'get'
  });
};

export const addOpenList = ({
  title
}) => {
  return request({
    url: '/api/openchat',
    method: 'post',
    data: {
      title
    }
  });
};