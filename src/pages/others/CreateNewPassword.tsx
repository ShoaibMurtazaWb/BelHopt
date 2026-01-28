import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SupportHeader from "../../components/Headers/SupportHeader";
import Button from "../../components/Button";
import { showToast } from "../../components/showToast";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function submitPassword(e: React.FormEvent) {
    e.preventDefault();

    if (!password.trim() || !confirmPassword.trim()) {
      showToast({
        type: "warning",
        variant: "light",
        message: "Please fill both password fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      showToast({
        type: "error",
        variant: "solid",
        message: "Passwords do not match. Please try again.",
      });
      return;
    }

    showToast({
      type: "success",
      variant: "solid",
      message: "Password updated successfully!",
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Create New Password
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Securely access your account by creating a new login password
            </p>
          </div>

          <form onSubmit={submitPassword} className="space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Enter New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 opacity-80 hover:opacity-100"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 opacity-80 hover:opacity-100"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <Button size="md" className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
