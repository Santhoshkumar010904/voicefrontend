import AppRoutes from "./routes";
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import VoiceAssistant from './components/VoiceAssistant';

function App() {
  return (
    <GoogleOAuthProvider clientId="1018620780034-nl66cd3ftb2952uofc2q2btljqfil1aj.apps.googleusercontent.com">
      <Toaster 
        position="top-center"
        containerStyle={{ zIndex: 999999 }}
        toastOptions={{
          duration: 5000,
          style: {
            fontWeight: 'bold',
            fontSize: '15px',
            borderRadius: '999px',
            padding: '16px 32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
            border: 'none',
            zIndex: 999999
          },
          success: {
            style: {
              background: '#22c55e',
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#22c55e',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#ef4444',
            },
          },
        }}
      />
      <VoiceAssistant />
      <AppRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;