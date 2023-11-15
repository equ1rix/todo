import React from "react";

function modalComponent () {
    return(
        <div className="relative bg-modalBG w-[420px] rounded-lg pt-5 pl-4 pr-4 pb-4">
            <h2 className="text-white text-left font-bold text-xl mb-4">Add a task</h2>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                style={{ fill: '#FFFFFF' }}
                className="absolute top-5 right-5"
            >
                <path d="M7 4C6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688L4.2929688 6.2929688C3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312L11.585938 15L4.2929688 22.292969C3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031L6.2929688 25.707031C6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031L15 18.414062L22.292969 25.707031C22.682969 26.098031 23.317031 26.098031 23.707031 25.707031L25.707031 23.707031C26.098031 23.316031 26.098031 22.682969 25.707031 22.292969L18.414062 15L25.707031 7.7070312C26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688L23.707031 4.2929688C23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688L15 11.585938L7.7070312 4.2929688C7.5115312 4.0974687 7.255875 4 7 4z"></path>
            </svg>
            <p className="text-left text-modalText">Title</p>
            <input type="text" className="bg-modalInput text-modalInputText w-[100%] h-[40px] rounded-lg mb-3"></input>
            <p className="text-left text-modalText">Description</p>
            <input type="text" className="bg-modalInput text-modalInputText w-[100%] h-[40px] rounded-lg mb-4"></input>
            <button className="bg-modalButton w-[100%] h-[35px] text-white rounded-lg ">Add a task</button>    
        </div>
    )
}
export default modalComponent;