import { Input } from "./ui/input";

const Chatbot = () => {
    const messages = [];

    return (
        <div className="flex flex-col items-center justify-between h-full mx-5">
            this is the chatbot
            <Input placeholder="Enter what are you looking for" className="fixed bottom-0 max-w-4xl mb-16 max-lg:w-11/12" />
        </div>
    )
}

export default Chatbot;