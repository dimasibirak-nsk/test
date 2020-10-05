import React, {Fragment, useContext} from "react";
import { UserContext } from "../../context/users/userContext";


export const AddUser = () =>{
    const { setUser } = useContext(UserContext);
    const result = {'branch_ids':1, 'is_study': 1, 'legal_type': 1};

    const handleInputChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        result[name] = value;
    }

    const submitForm = () =>{
        console.log(result)
        setUser(result);
    }

    return (
        <Fragment>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Имя</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={"name"} onChange={(e)=>{handleInputChange(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Дата рождения</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={"dob"} onChange={(e)=>{handleInputChange(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Электронная почта</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={"email"} onChange={(e)=>{handleInputChange(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Телефон</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={"phone"} onChange={(e)=>{handleInputChange(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Адрес</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={"addr"} onChange={(e)=>{handleInputChange(e)}}/>
                </div>

                <button type="button" className="btn btn-primary" onClick={()=>{submitForm()}}>Добавить пользователя</button>
            </form>
        </Fragment>
    );
}