import toast from "react-hot-toast"

export const getDetails = () =>{
    let details = []
    const storedDetails = localStorage.getItem('details')
    if(storedDetails){
        details = JSON.parse(storedDetails)
    }

    return details
}

// save

export const saveDetail = detail => {
    let details = getDetails()
    const isExist = details.find(d => d.id === detail.id)

    if(isExist) {
        return toast.error('Already BookMarked!')
    }
    details.push(detail)
    localStorage.setItem('details', JSON.stringify(details))
    toast.success('Product BookMarked Successfully!')
}

//delete

export const deleteDetail = id => {
    let details = getDetails()
    const remaining = details.filter(d => d.id !== id)
    localStorage.setItem('details', JSON.stringify(remaining))
    toast.success('Product Removed from BookMark!')

}