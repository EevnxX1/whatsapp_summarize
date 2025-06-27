import Form from "../ui/form";
import Input from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function page() {
  return(
    <Form
    title="Whatsapp Sistem"
    description="Please Register Your Account Before Login"
    action=''
    method="POST"
    >
    <div className="input-form">
        <Input
        type="email"
        name="email"
        placeholder="Email"
        className="mb-1"
        classInput="text-white text-xs py-2"
        classLabel="text-white mb-1"
        >
        Email
        </Input>
        <Input
        type="password"
        name="password"
        placeholder="Password"
        className=""
        classInput="text-white text-xs py-2"
        classLabel="text-white"
        >
        Password
        </Input>
    </div>
    <div className="button-form">
        <Button className="bg-green-400">
            <p className="">Sign Up</p>
        </Button>
        <Link
        key={'register'}
        href={'/'}
        className="button-regis"
        >
        <p>Login</p>
        </Link>
    </div>
    </Form>
  );
}