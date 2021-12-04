import { PageHeading } from "globalComponents";
import React, { useState } from "react";
import { AddDailyConsumptionModal, ViewDailyConsumption } from "./components";
import { Button } from "react-bootstrap";

const DailyFeedConsumption = () => {
  const [isAddDailyYieldModalVisible, setIsAddYieldFeedModalVisible] =
    useState(false);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  return (
    <div>
      <PageHeading text="Daily Yield Consumption" />
      <div className="d-flex flex-row-reverse my-4">
        <Button
          className="btn_green"
          onClick={() => setIsAddYieldFeedModalVisible(true)}
        >
          Add Daily Yield Consumption
        </Button>
        {isAddDailyYieldModalVisible && (
          <AddDailyConsumptionModal
            onSuccess={() => {
              setTriggerRefetch((prevValue) => !prevValue);
              setIsAddYieldFeedModalVisible(false);
            }}
            onHide={() => setIsAddYieldFeedModalVisible(false)}
          />
        )}
      </div>
      <ViewDailyConsumption refetch={triggerRefetch} />
    </div>
  );
};

export default DailyFeedConsumption;
