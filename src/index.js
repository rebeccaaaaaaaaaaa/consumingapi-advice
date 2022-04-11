import React from 'react';
import App from './App';
import './styles/global.css'
import { createRoot } from 'react-dom/client';

const div = document.getElementById('root');
const root = createRoot(div);
root.render(<App/>);