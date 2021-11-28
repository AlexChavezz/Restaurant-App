import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminView } from './AdminView';
import { EmployedView } from './EmployedView';

export const UsersScreenManage = () => {
    const [ isAdmin, setIsAdmin ] = useState(false);
    const { role } = useSelector(state => state.auth);

    useEffect(() => {
        if (role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [ setIsAdmin, role ])
    
    return (
        <article>
            {
                isAdmin?
                <AdminView />
                :
                <EmployedView />
            }
        </article>
    )
}
// return (
//     <article>
//         <article className="screen_manage_title">
//             <h2>CONTROL DE USUARIO </h2>
//         </article>
//         <article className="screen_manage_content">
//             <button 
//             className="btn-add"
//             onClick={()=>setstate(!state)}
//             >
//                 Nuevo Usuario +
//             </button>
//             {
//                 state &&
//                 <form>
//                     <div className="section-input">
//                         <label>Nombre De usuario: </label>
//                         <input type="text" />
//                     </div>
//                     <div className="section-input">
//                         <label>Contraseña: </label>
//                         <input type="password" />
//                     </div>
//                     <div className="section-input">
//                         <label>Rol: </label>
//                         <select name="role">
//                             <option value="admin">admin</option>
//                             <option value="employed">employed</option>
//                         </select>
//                     </div>
//                     <input type="submit" value="Registrar"/>
//                 </form>
//             }
//             <div className="table-users-container">
//                 <table className="table_users">
//                     <thead>
//                         <tr>
//                             <th>Nombre de Usuario</th>
//                             <th>rol</th>
//                             <th>contraseña</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                     </tbody>
//                 </table>
//             </div>
//         </article>
//     </article>
// )