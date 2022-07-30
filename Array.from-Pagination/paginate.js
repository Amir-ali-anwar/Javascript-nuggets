const paginate = (followers) => {
    let itemsPerPage= 10;
    let numberOfPages= followers.length/itemsPerPage
    let finalPages= Array.from({length:numberOfPages},(_,index)=>{
       const start= index*itemsPerPage
       return followers.slice(start,start+itemsPerPage)
    })
    return finalPages
};

export default paginate
