import { PageHeading } from "globalComponents";
import React, { useState } from "react";
import {
  AddDailyFeedConsumptionModal,
  ViewDailyConsumption,
} from "./components";
import { Button } from "react-bootstrap";

const DailyFeedConsumption = () => {
  const [isAddDailyFeedModalVisible, setIsAddDailyFeedModalVisible] =
    useState(false);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  return (
    <div>
      <PageHeading text="Daily Feed Consumption" />
      <div className="d-flex flex-row-reverse my-4">
        <Button
          className="btn_green"
          onClick={() => setIsAddDailyFeedModalVisible(true)}
        >
          Add Daily Feed Consumption
        </Button>
        {isAddDailyFeedModalVisible && (
          <AddDailyFeedConsumptionModal
            onSuccess={() => {
              setTriggerRefetch((prevValue) => !prevValue);
              setIsAddDailyFeedModalVisible(false);
            }}
            onHide={() => setIsAddDailyFeedModalVisible(false)}
          />
        )}
      </div>
      <ViewDailyConsumption refetch={triggerRefetch} />
    </div>
  );
};

export default DailyFeedConsumption;
