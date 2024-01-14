import { ThemeSwitcher } from './theme-switch';

export function Navbar() {
    return (
        <div className="container py-4">
            <nav className="flex justify-between items-center">
                <h1 className="font-bold">EdgeUI</h1>
                <div>
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    );
}
