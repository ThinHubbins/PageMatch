let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(()=> {
            logoSpan.forEach((span, idx)=>{
                
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                    
                }, (idx +1) * 50)
            })
        }, 2000)
        
        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2300)
    }) // Delay added for initial execution
})
























// Maximum number of allowed tags
const maxTags = 2;

// Array to store selected tag values
let selectedTagValues = [];

// Function to handle tag removal
function removeTag(tagValue) {
  // Remove the tag from the selectedTagValues array
  selectedTagValues = selectedTagValues.filter(value => value !== tagValue);

  // Remove the corresponding tag element from the DOM
  const selectedTagsContainer = document.getElementById('selected-tags');
  const tagToRemove = selectedTagsContainer.querySelector(`[data-value="${tagValue}"]`);
  if (tagToRemove) {
    selectedTagsContainer.removeChild(tagToRemove);
  }

  // Check if there are now less than two selected tags, hide the link container
  if (selectedTagValues.length < 2) {
    document.getElementById('link-container').innerHTML = '';
  }
}

// Function to create a remove button and add event listener
function createRemoveButton(tagElement, tagValue) {
  var removeButton = document.createElement('span');
  removeButton.textContent = '×';
  removeButton.classList.add('remove-tag');
  removeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    removeTag(tagValue);
  });
  tagElement.appendChild(removeButton);
}

// Event listener to handle tag removal when a selected tag is clicked
document.getElementById('selected-tags').addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-tag')) {
    const tagValue = event.target.parentNode.dataset.value;
    removeTag(tagValue);
  }
});

// Function to handle the selection of tags
function handleTagSelection(category) {
  var selectedTagsContainer = document.getElementById('selected-tags');
  var selectedTagsCount = selectedTagsContainer.querySelectorAll('.selected-tag').length;

  // If the maximum limit is reached, don't proceed
  if (selectedTagsCount >= maxTags) return;

  // If the category is already selected, don't proceed
  if (selectedTagValues.includes(category)) return;

  // Create a tag element
  var tagElement = document.createElement('div');
  tagElement.textContent = category;
  tagElement.classList.add('selected-tag');
  tagElement.setAttribute('data-value', category);
  selectedTagsContainer.appendChild(tagElement);

  // Add a remove button to the tag element
  createRemoveButton(tagElement, category);

  // Add the tag value to the selectedTagValues array
  selectedTagValues.push(category);

  // If two categories are selected, generate the link
  if (selectedTagValues.length === 2) {
    generateLink(selectedTagValues);
  }
}

// Function to generate the link based on selected categories
function generateLink(selectedCategories) {
  const linkContainer = document.getElementById('link-container');
  linkContainer.innerHTML = ''; // Clear previous link

  const link = document.createElement('a');
  link.href = `https://example.com/${selectedCategories.join('-').toLowerCase()}`;
  link.textContent = `View ${selectedCategories[0]} & ${selectedCategories[1]} page`;
  linkContainer.appendChild(link);
}

// Event listener to handle search input
document.getElementById('search-bar').addEventListener('input', function() {
  var searchValue = this.value.toLowerCase();
  var categoriesList = document.getElementById('categories-list');

  // Clear the categories list if the search input is empty
  if (searchValue.trim() === '') {
    categoriesList.innerHTML = '';
    return;
  }

  categoriesList.innerHTML = '';

  // Filter categories based on search value
  categories.forEach(function(category) {
    var categoryName = category.toLowerCase();
    if (categoryName.includes(searchValue)) {
      var categoryElement = document.createElement('div');
      categoryElement.textContent = category;
      categoryElement.classList.add('category');
      categoriesList.appendChild(categoryElement);
    }
  });
});

// Event listener to handle tag selection on click
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('category')) {
    handleTagSelection(event.target.textContent);
  }
});

// List of available categories
const categories = [
  "Adventure",
  "Music",
  "Movies",
  "Shorts",
  "Clothes",
  "Games",
  // 20 additional categories
  "Art",
  "Books",
  "Comedy",
  "Dance",
  "Documentaries",
  "Education",
  "Food",
  "Health",
  "History",
  "Home",
  "Lifestyle",
  "Nature",
  "News",
  "Pets",
  "Science",
  "Sports",
  "Technology",
  "Travel",
  "Vehicles",
  "Work",
  "Homework",
  "Solution",
    "Coding",
    "Restaurants",
      "Comics",
  "Novels",
  "Light Novels",
  "Anime",
  "Manga"
];
// Mapping of categories to their corresponding URLs
const categoryUrls = {
  "Adventure": "https://www.netflix.com/browse/genre/7442",
  "Music": "https://www.spotify.com/",
  "Movies": "https://www.netflix.com/",
  "Shorts": "https://www.youtube.com/",
  "Clothes": "https://www.amazon.com/",
  "Games": "https://store.steampowered.com/",
  "Art": "https://www.artsy.net/",
  "Books": "https://www.goodreads.com/",
  "Comedy": "https://www.netflix.com/browse/genre/10256",
  "Dance": "https://www.youtube.com/",
  "Documentaries": "https://www.netflix.com/browse/genre/6839",
  "Education": "https://www.coursera.org/",
  "Food": "https://www.allrecipes.com/",
  "Health": "https://www.mayoclinic.org/",
  "History": "https://www.history.com/",
  "Home": "https://www.houzz.com/",
  "Lifestyle": "https://www.wikihow.com/",
  "Nature": "https://www.nationalgeographic.com/",
  "News": "https://www.nytimes.com/",
  "Pets": "https://www.petfinder.com/",
  "Travel": "https://www.lonelyplanet.com/",
  "Homework": "https://www.khanacademy.org/",
  "Coding": "https://www.freecodecamp.org/",
  "Food": "https://www.foodnetwork.com/",
  "Restaurants": "https://www.opentable.com/",
  "Comics": "https://www.comixology.com/",
  "Novels": "https://www.goodreads.com/",
  "Light Novels": "https://www.novelupdates.com/",
  "Anime": "https://www.crunchyroll.com/",
  "Manga": "https://www.viz.com/"
  // Add more categories and their URLs as needed
};



// Function to generate the link based on selected categories
function generateLink(selectedCategories) {
  const linkContainer = document.getElementById('link-container');
  linkContainer.innerHTML = ''; // Clear previous link

  const link = document.createElement('a');

  // Check if both categories have URLs
  if (categoryUrls[selectedCategories[0]] && categoryUrls[selectedCategories[1]]) {
    // Both categories have URLs
    link.href = categoryUrls[selectedCategories[0]];
    link.textContent = `View ${selectedCategories[0]} & ${selectedCategories[1]} page`;
  } else if (categoryUrls[selectedCategories[0]]) {
    // Only the first category has a URL
    link.href = categoryUrls[selectedCategories[0]];
    link.textContent = `View ${selectedCategories[0]} page`;
  } else if (categoryUrls[selectedCategories[1]]) {
    // Only the second category has a URL
    link.href = categoryUrls[selectedCategories[1]];
    link.textContent = `View ${selectedCategories[1]} page`;
  } else {
    // Neither category has a URL, show an error message
    link.textContent = 'No valid URL available';
  }

  link.target = "_blank"; // Open link in a new tab
  linkContainer.appendChild(link);
}

