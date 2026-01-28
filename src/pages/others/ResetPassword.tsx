import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SupportHeader from "../../components/Headers/SupportHeader";
import Button from "../../components/Button";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function sendInstruction() {
    const trimmed = email.trim();
    if (!trimmed) return;

    // TODO: call API here (send reset email)
    // await api.sendResetEmail(trimmed)

    navigate("/check-inbox", { state: { email: trimmed } });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Forgot Password?</h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            Don&apos;t worry, it happens to the best of us! Just follow these
            simple steps to reset your password securely and regain access to
            your account.
          </p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
          />

          <Button
            size="md"
            className="w-full"
            onClick={sendInstruction}
            disabled={!email.trim()}
          >
            Send Instructions
          </Button>

          <a
            href="#"
            className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition"
          >
            <ChevronLeft size={14} />
            Go back and try one more time
          </a>
        </div>
      </div>
    </div>
  );
}
