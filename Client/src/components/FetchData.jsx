import axios from 'axios';

const FetchData = async () => {
  try {
    const res = await axios.get("https://manga-kappa.vercel.app/api");
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.error(err);
  }
};

export default FetchData;
