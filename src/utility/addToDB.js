import { toast } from "react-toastify";

const getStoredReadList = () => {
 const storedListStr = localStorage.getItem('read-list')
 if (storedListStr) {
  const storedList = JSON.parse(storedListStr)
  return storedList
 }
 else {
  return [];
 }
}

const addToStoredReadList = (id) => {
 const storedList = getStoredReadList()
 if (storedList.includes(id)) {
  toast.error('Book already exists')
 }
 else {
  storedList.push(id)
  const storedListStr = JSON.stringify(storedList)
  console.log(storedListStr);
  localStorage.setItem('read-list', storedListStr)
  toast('This book is added to your read-list')
 }
}

export { addToStoredReadList, getStoredReadList }