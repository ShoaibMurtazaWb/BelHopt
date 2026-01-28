import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SupportHeader from "../../components/Headers/SupportHeader";
import Button from "../../components/Button";

type LocationState = {
  email?: string;
};

export default function CheckYourInbox() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = (location.state as LocationState) || {};
  const email = state.email;

  //  If user refreshes or opens directly (no state), send them back safely
  if (!email) {
    return <Navigate to="/reset-password" replace />;
  }

  function resend() {
    // TODO: call API again to resend reset email
    // await api.sendResetEmail(email)
    // Optional: show toast "Email sent again"
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <img
            src="/Check Your Email.svg"
            className="mx-auto w-40"
            alt="Check You Email"
          />

          <h1 className="text-3xl font-bold text-gray-900">Check Your Inbox</h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            We&apos;ve sent you an email with instructions on how to reset your
            password to{" "}
            <span className="font-semibold text-gray-900">{email}</span>
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            Didn&apos;t get the email?
          </p>

          <Button size="md" className="w-full" onClick={resend}>
            Send Again
          </Button>

          <button
            type="button"
            className="text-sm text-gray-400 hover:text-gray-600 transition"
            onClick={() => navigate("/reset-password")}
          >
            Back to reset password
          </button>
        </div>
      </div>
    </div>
  );
}
