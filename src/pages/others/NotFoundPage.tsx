import Button from "../../components/Button";
import SupportHeader from "../../components/Headers/SupportHeader";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <SupportHeader />

      <div className="flex flex-1 flex-col gap-15 items-center justify-center">
        <img
          src="/404 Error Page.svg"
          alt="404 Not Found"
          className="max-w-full h-auto"
        />
        <Button size="md" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
