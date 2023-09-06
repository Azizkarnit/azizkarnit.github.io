// Define an array to store selected audio files
let selectedAudioFiles = [];

// Function to load saved audio data from localStorage
function loadAudioData() {
    const savedData = localStorage.getItem('selectedAudioFiles');
    if (savedData) {
        selectedAudioFiles = JSON.parse(savedData);
    }
}

// Function to save audio data to localStorage
function saveAudioData() {
    localStorage.setItem('selectedAudioFiles', JSON.stringify(selectedAudioFiles));
}

// Load audio data when the page loads
loadAudioData();

function handleAudioFile() {
    const audioFileInput = document.getElementById('audioFile');
    const audioContainer = document.getElementById('audioContainer');

    const selectedFile = audioFileInput.files[0];

    // Check if the selected file has already been chosen
    if (selectedFile && !selectedAudioFiles.includes(selectedFile.name)) {
        const objectURL = URL.createObjectURL(selectedFile);
        const songName = selectedFile.name;

        // Create a container for the audio element, song name, and remove button
        const audioItemContainer = document.createElement('div');

        // Create a new audio element
        const newAudioElement = document.createElement('audio');
        newAudioElement.controls = true;
        newAudioElement.src = objectURL;

        // Create a paragraph for the song name
        const songNameParagraph = document.createElement('p');
        songNameParagraph.textContent = songName;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            audioContainer.removeChild(audioItemContainer);
            URL.revokeObjectURL(objectURL);
            // Remove the selected file from the array
            selectedAudioFiles.splice(selectedAudioFiles.indexOf(selectedFile.name), 1);
            // Save updated audio data
            saveAudioData();
        });

        // Append the audio element, song name, and remove button to the container
        audioItemContainer.appendChild(newAudioElement);
        audioItemContainer.appendChild(songNameParagraph);
        audioItemContainer.appendChild(removeButton);

        // Append the new audio element container to the main container
        audioContainer.appendChild(audioItemContainer);

        // Add the selected file to the array
        selectedAudioFiles.push(selectedFile.name);
        // Save updated audio data
        saveAudioData();
    } else {
        // Display an error message or provide feedback to the user
        alert('This audio file has already been chosen.');
    }

    // Clear the file input to allow selecting the same file again
    audioFileInput.value = '';
}
