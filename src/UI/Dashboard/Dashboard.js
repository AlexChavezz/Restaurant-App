import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import usersImg from '../../pictures/users.svg';
import menuImg from '../../pictures/menu.svg';
import { MenuScreenManage } from './MenuScreenManage';
import { UsersScreenManage } from './UsersScreenManage';
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }


  return (
    <>
      <section className="dashboard_screen">
        <aside>
          <ul>
            <li>
              <Link to="/private/manage/menu" className="first_child">
                <img src={menuImg} alt="menu_Img" />
              </Link>
            </li>
            <li>
              <Link to="/private/manage/users" className="secound_child">
                <img src={usersImg} alt="users_Img" />
              </Link>
            </li>
          </ul>
        </aside>
        <Routes>
          <Route path="manage/menu" element={<MenuScreenManage />} />
          <Route path="manage/users" element={<UsersScreenManage />} />
        </Routes>
        <article className="btn btn-logout">
          <button 
          className="btn btn-danger"
          onClick={handleLogout}
          >
            CERRAR SESION
          </button>
        </article>
      </section>
    </>
  );
}
