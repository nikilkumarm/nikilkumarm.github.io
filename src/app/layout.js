import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import BackgroundShapes from '../components/BackgroundShapes';

export const metadata = {
    title: 'Nikilkumar',
    description: 'Web Developer & Broadcast Engineer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="app">
                    <BackgroundShapes />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <FloatingActions />
                </div>
            </body>
        </html>
    );
}
