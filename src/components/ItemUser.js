import React, {Fragment} from "react";

export const ItemUser = (props) =>{
    const d = new Date();
    const timeЕoday = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;

    const disalowUser = (date) =>{
        if(Date.parse(date) < Date.parse(timeЕoday)){
            return 'bg-danger';
        }
        return false;
    }

    const newUser = (date) => {
        console.log(date, timeЕoday);
        if(date.includes(timeЕoday)){
            return 'bg-success';
        }
        return false;
    }

    const renderLists = (params) =>{
        if(params.length === 0){
            return (<li>Отсутсвует</li>)
        }
        return params.map((el, index) => {
            return(
                <Fragment key={index}>
                    <li>{ el }</li>
                </Fragment>
            )
        })
    }

    return(
        <Fragment>
            {
                props.userList.map(user => {
                return(
                    <div className="card col-lg-4" key={ user.id }>
                        {
                            user.custom_foto !== null
                                ? <img src={user.custom_foto} className="card-img-top" alt="" />
                                : null
                        }
                        <div className={`card-body ${disalowUser(user.e_date)} ${newUser(user.b_date)}`}>
                            <h5 className="card-title">{ user.name }</h5>
                            <ul className="list-unstyled">
                                <li>Дата Рождения: { user.dob || "Отсутсвует" }</li>
                                <li>Остаток на счёт: { user.balance }</li>
                                <li>Дата деактивации клиента: { user.e_date }</li>
                                <li>Электронная почта:<ul>{ renderLists(user.email) }</ul></li>
                                <li>Телефон: <ul>{ renderLists(user.phone) }</ul></li>
                                <li>Адрес: <ul>{ renderLists(user.addr) }</ul></li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </Fragment>

    )
}