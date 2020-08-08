import axios, { AxiosInstance } from "axios";

type TMethod = "get" | "post" | "put";

// Instance has headers and baseurl
export default function getGW2APIInstance(method: TMethod = "get"): AxiosInstance {
	return axios.create({
		method: method,
		baseURL: "https://api.guildwars2.com/v2",
		timeout: 10000,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
