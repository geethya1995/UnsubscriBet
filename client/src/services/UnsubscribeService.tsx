import axios, { AxiosResponse } from "axios";

const UnsubscribeService = async (
  email: string,
  selectedReasons: string[],
  otherReason: string,
  queryParams: string
): Promise<AxiosResponse> => {
  const selectedReasonsList = selectedReasons.toString();

  const url: string = `https://unsubscribet-8e107c2ba23e.herokuapp.com/api/unsubscribe${queryParams}`;
  // const url: string = `http://localhost:3000/api/unsubscribe${queryParams}`;

  const data = {
    email: email,
    reasonForUnsubscribing: selectedReasonsList,
    moreInfo: otherReason,
  };

  const response = await axios.post(url, data);
  return response;
};

export default UnsubscribeService;
