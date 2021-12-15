import React from "react";

export const SidebarItem = (props) => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxo5wX-gV36xL6Lxd0aOQtSqGmZQzoDAe-hA&usqp=CAU" alt=""/>
            {props.name}
        </div>
    )
}