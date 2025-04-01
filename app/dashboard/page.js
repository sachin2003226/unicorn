import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 p-8">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">Dashboard</h1>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-md">
                Welcome to your dashboard. Navigate back to the home page to explore more features.
            </p>
            <Link
                href="/"
                className="btn btn-primary px-6 py-3 text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                Go to Home
            </Link>
        </div>
    );
}