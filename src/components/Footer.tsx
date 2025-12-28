import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-lg font-medium text-primary">Spectre UNO</span>
                </div>
                <div className="flex space-x-6">
                    <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="text-xs text-gray-500 hover:text-primary">Terms of Service</Link>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Spectre UNO BV.</p>
                    <p className="text-[10px] text-gray-300">Registered in The Netherlands.</p>
                </div>
            </div>
        </footer>
    );
}
