import { ApiResponse } from "@/types/types"

// Function to add an object to the array in local storage
export function addObjectToLocalStorage(newSearch: ApiResponse) {
  // Retrieve the existing array from local storage
  const existingArrayStr = localStorage.getItem("recentSearchs")

  // Parse the string back into an array
  const existingArray = existingArrayStr ? JSON.parse(existingArrayStr) : []

  // Add the new object to the array
  existingArray.push(newSearch)

  // Stringify the updated array
  const updatedArrayStr = JSON.stringify(existingArray)

  // Store the updated array back in local storage
  localStorage.setItem("recentSearchs", updatedArrayStr)
}

// Function to retrieve the array from local storage
export function getRecentSearchs() {
  // Retrieve the existing array from local storage
  const existingArrayStr = localStorage.getItem("recentSearchs")

  // Parse the string back into an array
  const existingArray = existingArrayStr ? JSON.parse(existingArrayStr) : []

  return existingArray
}
