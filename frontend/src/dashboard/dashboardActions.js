import axios from 'axios'
import { Urls } from '../consts'

export const BILLING_SUMMARY_FETCHED = 'BILLING_SUMMARY_FETCHED'



export function getSummary() {
    const request = axios.get(`${Urls.API_URL}/billingCycles/summary`)
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}

