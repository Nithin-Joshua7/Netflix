import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authUser";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
	const navigate = useNavigate();
	const{searchParams} = new URL(document.location);
	const emailValue = searchParams.get("email");
	const[email,setEmail] = useState(emailValue || "")
	const[username,setUsername] = useState("")
	const[password,setPassword] = useState("")
	const{signup} = useAuthStore()
	const handleSignUp = async (e)=>{
		e.preventDefault()
		const success = await signup({ email, username, password });
		if (success) {
		  navigate("/");
		}

		console.log(email,username,password)
	}
	return (
		<div className='h-screen w-full hero-bg '>
		
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
				<Link to={"/"}>
					<img src='/netflix-logo.png' alt='logo' className='w-52' />
				</Link>
			</header>

			<main className='flex-1 flex justify-center items-center px-4'>
				<div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
					<h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>

					<form className='space-y-4' onSubmit={handleSignUp}>
						<div>
							<label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
								Email
							</label>
							<input
								type='email'
								id='email'
								value={email}
								placeholder='you@example.com'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								onChange={(e)=>setEmail(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='username' className='text-sm font-medium text-gray-300 block'>
								Username
							</label>
							<input
								type='text'
								id='username'
								placeholder='johndoe'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								onChange={(e)=>setUsername(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
								Password
							</label>
							<input
								type='password'
								id='password'
								placeholder='••••••••'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								onChange={(e)=>setPassword(e.target.value)}

							/>
						</div>

						<button
							type='submit'
							className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200'
						>
							Create Account
						</button>
					</form>

					<div className='text-center text-gray-400'>
						Already a member?{" "}
						<Link to={"/login"} className='text-red-500 hover:underline'>
							Sign in
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

export default SignUpPage;
