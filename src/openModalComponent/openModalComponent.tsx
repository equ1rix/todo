import React from "react";
import { Button } from "@material-tailwind/react";

function openModal() {
    return (
        <Button className="bg-buttonBG rounded-lg text-white font-bold py-2 px-4">Add new task</Button>
    );
}

export default openModal;