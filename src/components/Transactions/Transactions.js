import React, { useEffect } from "react";
import Transaction from "./Transaction.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionsSlice.js";

const Transactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  const { transactions, isLoading, isError} = useSelector(
    (state) => state.transaction
  );

  // Decide what to render

  let content = null;

  if (isLoading) {
    content = <p> LOADING ...</p>;
  }

  if (!isLoading && isError) {
    content = <p style={{ color: "red" }}> There was an error occured</p>;
  }
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction}> </Transaction>
    ));
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p> No Transactions Found!</p>;
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
