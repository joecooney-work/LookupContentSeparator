//Helper Class
//05.09.2024
//Joe Cooney
export class ApiHelper {
    private baseUrl: string; // Set your API base URL here
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    async getLookupValues(entityName: string, fieldName: string): Promise<any[]> {
        try {
            const url = `${this.baseUrl}/api/data/v9.1/${entityName}?$select=${fieldName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer <your-access-token>' // Add your access token here
                }
            });
            if (response.ok) {
                const data = await response.json();
                return data.value;
            } else {
                throw new Error(`API call failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching lookup values:', error);
            throw error;
        }
    }
}