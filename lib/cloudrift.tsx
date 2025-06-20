// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiRequest<T>(endpoint: string, requestData?: any): Promise<T> {
    const apiUrl = getRiftApiUrl();
    const method = "POST";
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    const key = getRiftProviderPubApiKey();
    if (key) {
        headers["X-API-Key"] = key;
    }

    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = {};
    if (requestData) {
        body.data = requestData || {};
        body.version = getRiftApiVersion();
    }
    
    try {
        console.log(`Sending API request to ${apiUrl}${endpoint} with method ${method}`);
        const response = await fetch(`${apiUrl}${endpoint}`, {
            method,
            headers,
            body: JSON.stringify(body),
        });

        const contentType = response.headers.get("Content-Type");
        const responseText = await response.text();

        console.log(`Received response with status: ${response.status}, Content-Type: ${contentType}`);
        console.log(`Response body: ${responseText}`);

        if (!response.ok) {
            let errorMessage = `API call failed with status code: ${response.status}`;
            errorMessage += `, Response: ${responseText}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        if (contentType && contentType.includes("application/json")) {
            try {
                const jsonResponse = JSON.parse(responseText);
                console.log(`Parsed JSON response:`, jsonResponse);
                return jsonResponse.data ? jsonResponse : ({} as T);
            } catch (error) {
                console.error(`Failed to parse response as JSON. Status code: ${response.status}, response: ${responseText} ${error}`);
                throw new Error(`Failed to parse response as JSON. Status code: ${response.status}, response: ${responseText}`);
            }
        } else {
            console.log(`Received text response:`, responseText);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return responseText as any;
        }
    } catch (error) {
        console.error(`Error during API request to ${apiUrl}${endpoint}:`, error);
        throw error;
    }
}

export function getRiftApiUrl(): string {
    return process.env.NEXT_PUBLIC_RIFT_API_URL || 'https://api.cloudrift.ai';
}

export function getRiftConsoleUrl(): string {
    return process.env.NEXT_PUBLIC_RIFT_CONSOLE_URL || 'https://console.cloudrift.ai/console';
}

export function getRiftProviderPubApiKey(): string | null {
    return process.env.NEXT_PUBLIC_RIFT_API_KEY || null;
}

export function getRiftProviderName(): string | null {
    return process.env.NEXT_PUBLIC_RIFT_PROVIDER_NAME || "CloudRift";
}

export function getRiftProviderLogo(): string | null {
    return process.env.NEXT_PUBLIC_RIFT_PROVIDER_LOGO || "https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift.svg";
}

export function getRiftProviderComputeLogo(): string | null {
    return process.env.NEXT_PUBLIC_RIFT_PROVIDER_COMPOUND_LOGO || "https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift_compound_white.svg";
}

export function getRiftApiVersion(): string {
    const RIFT_PROD_API_VERSION = "2025-02-10";
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
        return RIFT_PROD_API_VERSION;
    } else {
        return "~upcoming";
    }
}

export function getWithPublicIP(): boolean {
    if (process.env.NEXT_PUBLIC_WITH_PUBLIC_IP !== null) {
        return process.env.NEXT_PUBLIC_WITH_PUBLIC_IP === 'true'
    }
    return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
}
