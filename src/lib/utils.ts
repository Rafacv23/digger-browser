import { ApiResponse } from "@/types/types"

// Function to add an object to the array in local storage
export function addObjectToLocalStorage(newSearch: ApiResponse) {
  // Retrieve the existing array from local storage
  const existingArrayStr = localStorage.getItem("recentSearchs")

  // Parse the string back into an array
  const existingArray = existingArrayStr ? JSON.parse(existingArrayStr) : []

  if (existingArray.length >= 4) {
    existingArray.shift()
  }

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

// this function receives a url and returns the domain of that url
export function retrieveDomain(url: string): string {
  const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
  return domain ? domain[2] : ""
}

// this function copies the url to the clipboard of the user
export function share(query: string | null) {
  const currentUrl = window.location.href // Get the full current URL, including query parameters
  navigator.clipboard
    .writeText(`${currentUrl}?q=${query}`)
    .then(() => {
      console.log("URL copied to clipboard successfully!")
    })
    .catch((error) => {
      console.error("Failed to copy the URL: ", error)
    })
}
