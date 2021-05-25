// @ts-nocheck
const getData = (values: any): void => {
  const keys = Object.keys(values);
  const data = [];

  for (let i = 0; i < keys.length; i++) {
    data.push(values[keys[i]]);
  }
  return data;
};

const databaseSuccessHandler = (
  response: any,
  actions: (data: any) => void = null
): void => {
  const values = response.val();
  actions(getData(values || {}));
};

export default databaseSuccessHandler;
