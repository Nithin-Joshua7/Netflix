import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
	user: null,
	isSigningUp: false,

	isLoggingOut: false,
	isLoggingIn: false,
	signup: async (credentials) => {
		set({ isSigningUp: true });
		try {
			const response = await axios.post("https://netflixb.onrender.com/api/v1/auth/signup", credentials,{ withCredentials: true });
			set({ user: response.data.user, isSigningUp: false });
			toast.success("Account created successfully");
			return true
		} catch (error) {
			toast.error(error.response.data.message || "Signup failed");
			set({ isSigningUp: false, user: null });
			return false
		}
	},
	login: async (credentials) => {
		set({ isLoggingIn: true });
		try {
			const response = await axios.post("https://netflixb.onrender.com/api/v1/auth/login", credentials,{ withCredentials: true });
			set({ user: response.data.user, isLoggingIn: false });
			return true
		} catch (error) {
			set({ isLoggingIn: false, user: null });
			toast.error(error.response.data.message || "Login failed");
			return false
		}
	},
	logout: async () => {
		set({ isLoggingOut: true });
		try {
			await axios.post("https://netflixb.onrender.com/api/v1/auth/logout",{}, { withCredentials: true });
			set({ user: null, isLoggingOut: false });
			toast.success("Logged out successfully");
		} catch (error) {
			set({ isLoggingOut: false });
			toast.error(error.response.data.message || "Logout failed");
		}
	}}))
	
