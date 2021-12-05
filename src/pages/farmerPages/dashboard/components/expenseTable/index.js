import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { getExpenses } from "service/constants";
import AddExpenseModal from "./components/addExpenseModal";
import "./index.css";

const ExpenseTable = () => {
  const [expenseListing, setExpenseListing] = useState([]);
  const [isAddExpenseModalVisible, setIsAddExpenseModalVisible] =
    useState(false);

  const [triggerRefetch, setTriggerRefetch] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: {
            error,
            message,
            data: { expense },
          },
        } = await getRequest(getExpenses);
        if (!error) {
          setExpenseListing(expense);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };

    init();
  }, [triggerRefetch]);

  return (
    <div className="expense_dashboard_container">
      <div className="d-flex flex-row-reverse">
        <Button
          className="btn_green"
          onClick={() => setIsAddExpenseModalVisible(true)}
        >
          Add Expsnse
        </Button>
        <AddExpenseModal
          show={isAddExpenseModalVisible}
          onClose={() => setIsAddExpenseModalVisible(false)}
          onSuccess={() => {
            setTriggerRefetch((prevValue) => !prevValue);
            setIsAddExpenseModalVisible(false);
          }}
        />
      </div>
      <div className="table-card mt-2">
        <Table className="table-borderless table-responsive dashboard_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseListing.length > 0 &&
              expenseListing.map((feed) => {
                let { name, date, amount } = feed;
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{moment(date).format('DD-MM-YYYY')}</td>
                    <td>{amount}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExpenseTable;
