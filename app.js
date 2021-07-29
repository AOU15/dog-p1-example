// Create Dynamic dropdown menu
// Make a request and convert response to dropdown menu "https://dog.ceo/api/breeds/list/all"
const selectTag = document.querySelector('#select-breed')


const getAllbreeds = async () => {
  try {
    const allBreedURL = "https://dog.ceo/api/breeds/list/all"
    const response = await axios.get(allBreedURL)
    // console.log(response.data.message)
    const breedList = Object.keys(response.data.message)
    // console.log(breedList)
    setOptionTags(breedList)
    return breedList
  } catch (error) {
    console.error(error)
  }
}


getAllbreeds()
// create form option tags from request

function setOptionTags(list) {
  list.forEach((breed) => {
    console.log(breed)
    const optionTag = document.createElement('option')
    optionTag.value = breed
    optionTag.textContent = breed
    selectTag.append(optionTag)
  })
}



//get value of option tag from the form select tag


// set up eventHandler


// make a request for the selected breed's image
// random breed image URL "https://dog.ceo/api/breed/${breed}/images/random"


//create img tag, assign src attribute, and append image 



// remove previous image on new search
