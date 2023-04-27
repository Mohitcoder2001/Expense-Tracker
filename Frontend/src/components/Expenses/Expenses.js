import React,{useEffect} from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import Expenseform from './Expenseform'
import IncomeItem from '../IncomeItem/IncomeItem';
import { rupee } from '../../utils/icons';
function Expenses() {
  const{addIncome,expenses,getExpense,deleteExpense,totalExpense} = useGlobalContext();
  useEffect(() => {
    getExpense()
  },[])
  return (
    <ExpenseStyled>
        <InnerLayout>
          <h1>Expenses</h1>
          <h2 className='total-income'>Total Expense : <span>{rupee}{totalExpense()}</span></h2>
          <div className='income-content'>
            <div className='form-container'>
              <Expenseform />
            </div>
            <div className='incomes'>
                 {expenses.map((expense) => {
                  const {_id,title,amount,date,category,description,type} = expense;
                  return <IncomeItem
                          key = {_id}
                          id = {_id}
                          title = {title}
                          amount = {amount}
                          date = {date}
                          type = {type}
                          category={category}
                          description = {description}
                          deleteItem={deleteExpense}
                          
                          
                          indicatorColor="var(--color-green)"
                          
                          />
                 })}
            </div>
          </div>
        </InnerLayout>
    </ExpenseStyled>

  )
}

const ExpenseStyled = styled.div`
display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`


export default  Expenses;