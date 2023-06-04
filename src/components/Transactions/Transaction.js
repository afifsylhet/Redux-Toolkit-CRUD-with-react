import React from "react";
import editImage from '../../assets/images/edit.svg'
import deleteImage from '../../assets/images/delete.svg'
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionsSlice";
import { numberWithCommas } from "../../utils/number WithCommas";

const Transaction = ({transaction}) => {

  const {name, type, amount} = transaction || {}
  const dispatch = useDispatch();

  const handleEdit = ()=>{
    dispatch(editActive(transaction))
  }


  const handleDelete = ()=>{
    dispatch(removeTransaction(transaction.id))
  }

  return (
    <li className={`transaction ${type} `}>
      <p>{name}</p>
      <div className="right">
        <p>${numberWithCommas(amount)}</p>
        <button className="link">
          <img alt="edit image" className="icon" src={editImage} 
          onClick={handleEdit}
          />
        </button>
        <button className="link">
          <img alt="delete image" className="icon" src={deleteImage}
          onClick={handleDelete}
          />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
