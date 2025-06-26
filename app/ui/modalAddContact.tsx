import Input from "./input";
import { Button } from "./button";
export default function ContactformContent() {
    return (
        <>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Add Contact</h2>
        <form action="" method="post">
            <Input
            className="mb-3"
            type="text"
            name="nameContact"
            placeholder="Name"
            >
            Name Contact
            </Input>
            <Input
            className="mb-3"
            type="number"
            name="numberContact"
            placeholder="Number"
            >
            Number Contact
            </Input>
            <Button 
            type="submit"
            className="mb-2 mt-3 w-32">
                Submit
            </Button>
        </form>
        </>
    );
}