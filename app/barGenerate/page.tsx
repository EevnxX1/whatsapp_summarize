import { Button } from "../ui/button";

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <Button 
      className="w-52 flex m-auto bg-green-400"
      type="submit"
      >
        <p className="m-auto">Sign In To Whatsapp</p>
      </Button>
    </main>
  );
}
