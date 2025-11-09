import '../globals.css';
import { ReactNode } from 'react';
import HeaderPage from "../../components/HeaderPage";
export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}



export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div id='page'>
      <HeaderPage />
      {children}
    </div>
  );
}
