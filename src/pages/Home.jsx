import React, { useEffect, useState } from "react";
import FooterUser from "../components/layout/FooterUser";
import userSlice, { gmailUser, passwordUserd } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserInfo } from "../components/shared/constants";

const BASE_URL = "https://jsonplaceholder.typicode.com/"

const Home = () => {
    // const dispatch = useDispatch();
    const user = useUserInfo(state => state.user)
    const login = useUserInfo(state => state.login)
    // console.log(user);
    const navigate = useNavigate();
    // const User = useSelector(store => store.user)
    // console.log(User);

    // const [users, setUsers] = useState([])
    // console.log(users);

    // const getAllUsers = () => {
    //     axios
    //     .get(BASE_URL + "users/")
    //     .then(({data})  => setUsers(data))
    //     .catch((err) => console.log(err))
    // } 
    // useEffect(() => {
    //     getAllUsers()
    // },[])
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    axios
    .post(BASE_URL + "users/", data)
    .then(({data}) => {
        login(data)
        navigate("/user")
    })
    .catch((err) => console.log(err))
    // const emailUser = e.target.email.value;
    // const passwordUser = e.target.password.value;
    // console.log(emailUser, passwordUser);
    // dispatch(gmailUser(data));
    // dispatch(passwordUserd(passwordUser));
    // navigate("/user")

    // const password =
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section className=" font-urbanist bg-slate-300 text-white grid grid-cols-[auto,auto]  justify-items-center items-center bg-right-bottom bg-no-repeat p-4  sm:justify-center">
        <header className="hidden sm:block  translate-y-4 sm:max-w-[340px] sm:min-h-[370px] rounded-l-md overflow-hidden">
          <img className="sm:min-h-[370px]" src="/images/people.jpg" alt="" />
        </header>
        <form
          onSubmit={handleSubmit}
          className="grid bg-slate-700 translate-y-4 p-5 rounded-md gap-6 w-[min(100%,_350px)] sm:w-[300px] sm:rounded-r-md sm:rounded-l-none"
        >
          <h2 className="uppercase font-semibold text-4xl">Iniciar sesion</h2>
          <div className="grid gap-4">
            <label className="text-white/50 " htmlFor="email">
              Correo
            </label>
            <input
              className="bg-transparent outline-none border-b border-yellow-border p-1"
              placeholder="Tu email..."
              required
              autoComplete="off"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="grid gap-4">
            <label className="text-white/50 " htmlFor="password">
              Contraseña
            </label>
            <input
              className="bg-transparent outline-none border-b border-yellow-border p-1"
              id="password"
              placeholder="tu contraseña..."
              required
              type="password"
              name="password"
            />
          </div>

          <button className="bg-purple-light uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full">
            Entrar
          </button>
        </form>
      </section>
      <FooterUser />
    </main>
  );
};

export default Home;
