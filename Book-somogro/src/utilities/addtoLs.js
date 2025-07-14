import { toast } from "react-toastify";

const getStoredReadList = () => {
    const readlist = localStorage.getItem('read-list');
    if (readlist){
        const storedReadList = JSON.parse(readlist)
        return storedReadList
    }
    else{
        return[]
    }
}


const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        toast('already exists in the Read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast('This book is added to your read list.')
    }
}


const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        toast('already exists in the Wishlist')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('This book is added to your Wishlist.')
    }
}

const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const filteredWishList = storedWishList.filter(wishlistId => parseInt(wishlistId) !== id)
    localStorage.setItem('wish-list', JSON.stringify(filteredWishList))
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList, removeFromStoredWishList}