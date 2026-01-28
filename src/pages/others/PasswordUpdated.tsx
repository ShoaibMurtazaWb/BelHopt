import SupportHeader from "../../components/Headers/SupportHeader";
import Button from "../../components/Button";
export default function PasswordUpdated() {
  return (
    <div className="min-h-screen flex flex-col">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg text-center space-y-6">
          <img
            src="/Password Updated.svg"
            className="mx-auto w-40"
            alt="Password Updated Successfully"
          />

          <h2 className="text-2xl font-bold text-gray-900">
            You&apos;ve successfully updated your password!
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Now you can log in to your{" "}
            <strong className="font-semibold text-gray-900">Bellhopt</strong>
            account
          </p>

          <Button size="md" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
