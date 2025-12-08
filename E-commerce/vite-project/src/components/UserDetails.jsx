import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const UserDetails = ({  }) => {
  const { currentPage } = useContext(GlobalContext);
  const [UserData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${currentPage}`
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setUserData(data);
    };
    fetchData();
  }, [currentPage]);

  return (
    <div className="w-[300px] mx-auto bg-orange-100 flex flex-col items-center p-4 rounded-md shadow-lg mt-4">
      <h1 className="text-xl mb-2">User Details</h1>
      {loading ? (
        <p className="text-4xl"> Loading ....</p>
      ) : (
        <p className="text-4xl">{UserData.name}</p>
      )}
    </div>
  );
};

export default UserDetails;
