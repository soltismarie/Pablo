
import React from 'react';
import { TutorExpression } from '../types';

interface TutorAvatarProps {
  expression: TutorExpression;
}

const TutorAvatar: React.FC<TutorAvatarProps> = ({ expression }) => {
  return (
    <aside className="hidden h-full w-1/3 flex-col items-center justify-center bg-teal-800 p-6 text-white md:flex lg:w-1/4">
      <h2 className="mb-4 text-3xl font-bold">Pablo</h2>
      <div className="relative h-48 w-48 rounded-full border-4 border-amber-400 bg-teal-100 shadow-lg">
        <svg id="pablo-avatar" viewBox="0 0 100 100" className="h-full w-full">
            {/* Base */}
            <circle cx="50" cy="55" r="30" fill="#f7d4b4"/>
            <path d="M 30 85 C 30 75, 70 75, 70 85 L 70 100 L 30 100 Z" fill="#2c3e50" />
            <path d="M 50 85 L 50 100" stroke="#f1c40f" strokeWidth="2" />
            <path d="M 35,30 C 25,30 20,45 25,55 C 30,45 40,40 50,40 C 60,40 70,45 75,55 C 80,45 75,30 65,30 Z" fill="#332a22" />
            <ellipse cx="50" cy="30" rx="45" ry="12" fill="#d2b48c" stroke="#a0522d" strokeWidth="1"/>
            <ellipse cx="50" cy="28" rx="20" ry="10" fill="#a0522d" />
            <path d="M30,28 Q50,20 70,28 A20,10 0 0,1 30,28" fill="#c48a4f" />
            <path d="M 30 68 C 40 65, 60 65, 70 68 C 65 78, 35 78, 30 68 Z" fill="#332a22"/>

            {/* Idle Expression */}
            <g style={{ display: expression === 'idle' ? 'block' : 'none' }}>
                <g className="blinking-eyes">
                    <circle cx="40" cy="55" r="5" fill="#222"/>
                    <circle cx="60" cy="55" r="5" fill="#222"/>
                    <circle cx="41" cy="54" r="1.5" fill="#fff"/>
                    <circle cx="61" cy="54" r="1.5" fill="#fff"/>
                </g>
                <path d="M 32 48 Q 40 46 48 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 52 48 Q 60 46 68 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 45 78 Q 50 82 55 78" stroke="#a52a2a" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </g>

            {/* Talking Expression */}
            <g style={{ display: expression === 'talking' ? 'block' : 'none' }}>
                <g className="blinking-eyes">
                    <circle cx="40" cy="55" r="5" fill="#222"/>
                    <circle cx="60" cy="55" r="5" fill="#222"/>
                    <circle cx="41" cy="54" r="1.5" fill="#fff"/>
                    <circle cx="61" cy="54" r="1.5" fill="#fff"/>
                </g>
                <path d="M 32 48 Q 40 46 48 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 52 48 Q 60 46 68 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <ellipse cx="50" cy="79" rx="8" ry="4" fill="#a52a2a" />
            </g>

             {/* Happy Expression */}
            <g style={{ display: expression === 'happy' ? 'block' : 'none' }}>
                 <g className="blinking-eyes">
                    <path d="M35 55 Q 40 50 45 55" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M55 55 Q 60 50 65 55" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
                <path d="M 32 48 Q 40 46 48 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 52 48 Q 60 46 68 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 40 78 A 10 8 0 0 0 60 78" fill="#fff" stroke="#a52a2a" strokeWidth="2"/>
            </g>

            {/* Thinking Expression */}
            <g style={{ display: expression === 'thinking' ? 'block' : 'none' }}>
                <g className="blinking-eyes">
                    <circle cx="40" cy="55" r="5" fill="#222"/>
                    <circle cx="60" cy="55" r="5" fill="#222"/>
                    <circle cx="41" cy="54" r="1.5" fill="#fff"/>
                    <circle cx="61" cy="54" r="1.5" fill="#fff"/>
                </g>
                <path d="M 32 48 Q 40 46 48 48" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 52 46 Q 60 42 68 46" stroke="#332a22" strokeWidth="3" fill="none" strokeLinecap="round"/> {/* Raised eyebrow */}
                <ellipse cx="50" cy="80" rx="3" ry="3" fill="#a52a2a" />
            </g>
        </svg>
      </div>
      <p className="mt-4 text-center text-teal-200">
        ¡Hola! ¡Soy Pablo!
      </p>
    </aside>
  );
};

export default TutorAvatar;
