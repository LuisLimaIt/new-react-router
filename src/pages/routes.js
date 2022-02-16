import {
    Routes,
    Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Profile from './Profile';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profilenp" element={<Profile />} />
        </Routes>
    )
}