export function checkAuthentication() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken'); // Or sessionStorage
        return !!token; // Returns true if token exists
    }
    return false; // Fallback for server-side rendering
}
