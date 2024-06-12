import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StarCompo from './StarCompo';
import PersoCompo from './PersoCompo';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<StarCompo />} />
            <Route path='/:id' element={<StarCompo />} />
            <Route path="/persoCompo/:id" element={<PersoCompo />} />
        </Routes>
    </BrowserRouter>
);

export default Router;