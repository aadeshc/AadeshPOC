import React, { useContext } from 'react'
import { UserContext } from './contextapi.js'


//var Password = useContext(PasswordContext)
const Rootcomponent = () => {
    debugger;
    var User = useContext(UserContext);
    return (
        <div>
            {User}
        </div>
    )

}

export default Rootcomponent