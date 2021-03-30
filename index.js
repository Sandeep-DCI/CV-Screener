

// Data is an Array of objects which constains information about the condidates

let data = [
    {
        name: 'Fonia',
        age: 38,
        city: 'München',
        language: 'C#',
        framework: 'Mongoose',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },

    {
        name: 'Tonia',
        age: 25,
        city: 'Bremen',
        language: 'Visual Basic',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },

    {
        name: 'Monia',
        age: 27,
        city: 'Düsseldorf',
        language: 'Ruby',
        framework: 'Mongo',
        image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },

    {
        name: 'Sonia',
        age: 32,
        city: 'Berlin',
        language: 'Python',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },

    {
        name: 'Ronia',
        age: 28,
        city: 'Hamburg',
        language: 'JavaScript',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
]

console.log(data);


// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

const candidates = cvIterator(data);

nextCV();
// Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src = '${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`
    } else {
        alert ('End of applications');
        window.location.reload();
    }
}