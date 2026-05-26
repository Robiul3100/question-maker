import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import QuestionPapersPage from './pages/QuestionPapers';
import QuestionPaperEditorPage from './pages/QuestionPaperEditor';
import NoticesPage from './pages/Notices';
import SettingsPage from './pages/Settings';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Authenticated app shell with bottom nav */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/papers" element={<QuestionPapersPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Authenticated full-screen routes (no bottom nav) */}
      <Route
        path="/papers/new"
        element={
          <ProtectedRoute>
            <QuestionPaperEditorPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/papers/:paperId"
        element={
          <ProtectedRoute>
            <QuestionPaperEditorPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
