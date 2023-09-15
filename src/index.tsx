import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// Import your routes here
import App from './App';
import User from "./routes/user";
import Video from "./routes/video";

const NotFound = () => (
    <h1>Not Found</h1>
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {User.map((route) => (
                    route
                ))}
                {Video.map((route) => (
                    route
                ))}
                {/* Add your routes here */}
                <Route element={NotFound()} />
            </Routes>
        </Router>
    </React.StrictMode>
);