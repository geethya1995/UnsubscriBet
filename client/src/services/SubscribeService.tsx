import axios, { AxiosResponse } from "axios";

const SubscribeService = async (
  email: string,
  name: string
): Promise<AxiosResponse> => {
  const url: string = "https://unsubscribet-8e107c2ba23e.herokuapp.com";
  const data = {
    email: email,
    name: name,
  };

  const response = await axios.post(url, data);
  return response;
};

export default SubscribeService;
