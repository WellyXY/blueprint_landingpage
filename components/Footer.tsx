export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-6 h-6 relative">
                            <img src="/pika-icon.png" alt="Pika Icon" className="w-full h-full object-contain invert" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white font-mono uppercase">Pika</span>
                    </div>
                    <span className="text-sm text-gray-500">© 2024</span>

                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
