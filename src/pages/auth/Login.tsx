import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SupportHeader from "../../components/Headers/SupportHeader";
import Button from "../../components/Button";
import { showToast } from "../../components/showToast";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import api from "../../api/axios";


export default function CreateNewPassword() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const resp = await api.post("/auth/login", credentials);
      return resp.data;
    },

    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      queryClient.setQueryData(["user", "me"], data);
      
      showToast({ message: "Logged In successfully", type: "success" });
      navigate("/");
    },

    onError: (error: any) => {
      queryClient.setQueryData(["user", "me"], null);
      showToast({ message: "Login failed, Error: "+ error, type: "error" });
    },
  });
  
  function submitLogin(e: React.FormEvent) {
    e.preventDefault();
    mutateAsync({ username, password });
  }

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Don't have account?{" "}
              <button
                className="text-red-500 hover:cursor-pointer hover:underline"
                onClick={() => navigate("/")}
              >
                Sign Up
              </button>
            </p>
          </div>

          <form onSubmit={submitLogin} className="space-y-5 text-left">
            <div className="space-y-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg bg-gray-100 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
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
              <p
                className="text-right text-sm hover:underline
              "
              >
                Change or reset your password?
              </p>
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
