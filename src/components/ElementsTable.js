import * as React from "react";

export default function ElementsTable({target, data}) {

    return (
        <>
            <li>
                {
                    data.elements.map((el) => {
                        const foundId = (el.id === target)
                        return (
                            <>
                                { foundId ? (
                                    <>
                                        <h4 key={el.id}>{el.name}</h4>
                                        {el.checkList.map((ls)=>{
                                            return(
                                                <>
                                                    <li key={ls.id}>{ls.name}</li>
                                                </>
                                            )
                                        })}
                                    </>

                                ) : ""}
                            </>

                        )
                        // const foundId = el.find(el => el.id === target)
                        // if (foundId) {
                        //     return (
                        //         <div key={el.id}>
                        //             <li>{el.name}</li>
                        //             {el.checklist.map((chkls) => {
                        //                 return (
                        //                     <li key={chkls.id}>{chkls.name}</li>
                        //                 )
                        //             })}
                        //         </div>
                        //     )
                        // } else {
                        //     return(
                        //         <h5>Brak informacji do wyświetlenia dla {target}</h5>
                        //     )
                        // }

                    })
                }
            </li>
        </>
    )
}