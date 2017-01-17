import request from 'utils/request';

export const getChannel = () => {
  return request({
    url: '/api/openchat',
    method: 'get'
  });
};

export const addChannel = ({
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