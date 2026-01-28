import SupportHeader from "../../components/Headers/SupportHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SupportHeader />

      <div className="flex flex-1 items-center justify-center">
        <img
          src="/404 Error Page.svg"
          alt="404 Not Found"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
