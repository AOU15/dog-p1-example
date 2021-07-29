// Create Dynamic dropdown menu
// Make a request and convert response to dropdown menu "https://dog.ceo/api/breeds/list/all"
const getAllbreeds = async () => {
  try {
    const allBreedURL = "https://dog.ceo/api/breeds/list/all"
    const response = await axios.get(allBreedURL)
    // console.log(response.data.message)
    const breedList = Object.keys(response.data.message)
    console.log(breedList)
  } catch (error) {
    console.error(error)
  }
}


getAllbreeds()
// create form option tags from request


//get value of option tag from the form select tag


// set up eventHandler


// make a request for the selected breed's image
// random breed image URL "https://dog.ceo/api/breed/${breed}/images/random"


//create img tag, assign src attribute, and append image 



// remove previous image on new search
