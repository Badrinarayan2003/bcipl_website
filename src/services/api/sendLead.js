import axios from "axios";
import { BASE_URL } from "../../config/urls";


export async function sendLead(payload) {
    try {
        const response = await axios.post(
            `${BASE_URL}/courses/lead`,
            payload
        );
        console.log(response.data, "api response from sendLead")
        return response.data; // SUCCESS → return { status, code, message }
    } catch (error) {
        throw error;
    }
}
