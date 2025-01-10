import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

//Setting up an interface that handles the users expense entry, which can be passed through other components.
interface UserForm { 
    description: string
    expense: string
    //Even though amount is a number, by saying it is a string it is easy to satisfy Typescript since all inputs are treated as strings. BY saying amount is a string, we do not anymore additional logic. This is because we made the 'amount' input field as 'type=number' which makes the user HAVE to enter a number. 
    amount: string
    category: string
}

const Expenses = () => {
  //setting up useState for the description of the expense, amount and category, as a string, which will start off empty
  const [userForm, setUserForm] = useState<UserForm>({
    description: "",
    expense: "",
    amount: "",
    category: "",
  });

  //setting up a button/function that submits the users request when creating an expense, amount and category
  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });

    // console.log(userForm.description)
  };

  //setting up a function/button to handle the user info
  const handleUserInputSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setUserForm({
        description: "",
        expense: "",
        amount: '',
        category: "",
    })

    console.log(userForm.amount, userForm.description, userForm.expense, userForm.category,  )
  }

  return (
    <div>
      <h1>Track Expense</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Description
        </InputGroup.Text>
        <Form.Control
          name="description"
          value={userForm.description}
          onChange={handleUserInputChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Expense
        </InputGroup.Text>
        <Form.Control
          name="expense"
          value={userForm.expense}
          onChange={handleUserInputChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Amount
        </InputGroup.Text>
        <Form.Control
          name="amount"
          type="number"
          value={userForm.amount}
          onChange={handleUserInputChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Category
        </InputGroup.Text>
        <Form.Control
          name="category"
          value={userForm.category}
          onChange={handleUserInputChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button onClick={handleUserInputSubmit}>Enter</Button>
    </div>
  );
};

export default Expenses;
