export default function HandleErr(err) {
  if (err.response && err.response.data) {
    // Request made and server responded
    return err.response.data;
  } else if (err.request) {
    // The request was made but no response was received
    return err.message;
  } else {
    // Something happened in setting up the request that triggered an err
    return err.message;
  }
}
