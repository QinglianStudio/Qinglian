import axios from "axios";

/**
 * 采集数据 默认请求地址为`http://127.0.0.1:4005/cgi/api/v1/data-collection`
 * 可自定义实现上报
 * @param data
 * @returns
 */
export const collectionData = async (data: any[][]) => {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:4005/cgi/api",
  });
  const resp = await instance.post("/v1/data-collection", {
    Data: data,
  });
  return resp;
};
