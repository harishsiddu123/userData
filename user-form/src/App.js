import './App.css';
import { useState } from 'react';


function App() {
  let [userId,setUserId] = useState('');
  let [firstName,setFirstName] = useState('');
  let [lastName,setLastName] = useState('');
  let [users,setUsers] = useState([]);
  let [edit,setEdit] = useState(false);
  let [acive,setActive] = useState(null);


 const handleSubmit = (e)=>{
 e.preventDefault();
 const user ={
  userId,
  firstName,
  lastName
 }
if(edit){
 let copy = users;
 Object.assign(copy[acive],user)
 setUsers([...copy]);
 setEdit(false);
 setActive(null);
}else{
  setUsers([...users,user])
}
 setUserId("");
 setFirstName("");
 setLastName("");
 }
 const onEditData=(index)=>{
  const user  = users[index]
  setUserId(user.userId);
  setFirstName(user.firstName);
  setLastName(user.lastName);
  setActive(index);
  setEdit(true);
 };
 
 const onDeleteData=(user)=>{
if(window.confirm('are you sure you want to delete')){
  let copy = users.filter(item=>item !==user);
  setUsers([...copy]);
}
 }
 
 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset >
          <legend>Add User </legend>
      <div>
        <label htmlFor='name'>User Id</label>
        <input type='email' value={userId} onChange={(e)=>{
          setUserId(e.target.value);
        }}></input>
      </div>
      <div >
        <label htmlFor='firstname'>First Name</label>
        <input type='text' id='firstname'  value={firstName} onChange={(e)=>{
          setFirstName(e.target.value);
        }}></input>
      </div>
      <div >
        <label htmlFor='lastname'>Last Name</label>
        <input type='text' id='lastname'  value={lastName} onChange={(e)=>{
          setLastName(e.target.value);
        }}></input>
      </div>
      <button type='Submit'>{edit? "Update" :"Add"}</button>
      </fieldset>
      </form>
      <div className='TableContainer'>
     <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody> 
        {
          users.map((user,index)=>{
            return (
              <tr>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button onClick={()=>{
                    onEditData(index);
                  }}>Edit</button>
                </td>
                <td>
                  <button onClick={()=>{
                    onDeleteData(user);
                  }}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
     </div>
    </div>
  );
}

export default App;
