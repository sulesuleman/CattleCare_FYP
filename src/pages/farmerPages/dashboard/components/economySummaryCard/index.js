import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { getEconomy } from "service/constants";

const EconomySummaryCard = () => {
  const [economyStatistics, setEconomyStatistics] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: { error, message, data },
        } = await getRequest(getEconomy);
        if (!error) {
          setEconomyStatistics(data);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, []);

  return <div></div>;
};

export default EconomySummaryCard;
