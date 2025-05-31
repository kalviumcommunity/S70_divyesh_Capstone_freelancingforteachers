import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

// Optional: You can import more components like TeacherDashboard, StudentDashboard etc.

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Navbar />

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            {/* Example for future pages:
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  main: {
    flex: 1,
    padding: '1rem',
  },
};

export default App;
