import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
     const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setUser(username);
        // if (username === 'user' && password === 'password') {
            navigate('/profile');
        //}
        };
    
    return (
        <div className='bg-[#071e34] flex h-screen items-center'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
        </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
            </label>
            <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                                    autoComplete="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
                </label>
            </div>
            <div className="mt-2">
            <input id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
                            >
                Sign in
                </button>
            </div>
        </form>
        </div>
    </div>
    </div>
)
}

export default Login