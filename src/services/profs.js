import submitApi from "../adapter/submitApi"

export const getAllProfs = ()=>{

    return submitApi("profs","get" , null)
} 