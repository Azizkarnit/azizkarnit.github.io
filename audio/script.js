// Function to load and display audio data from localStorage
function loadAndDisplayAudioData() {
    const audioContainer = document.getElementById('audioContainer');

    // Clear the existing audio elements
    audioContainer.innerHTML = '';

    // Load saved audio data from localStorage
    const savedData = localStorage.getItem('selectedAudioFiles');
    if (savedData) {
        const selectedAudioFiles = JSON.parse(savedData);

        // Iterate through the stored audio files and create elements
        for (const audioFile of selectedAudioFiles) {
            const objectURL = audioFile.objectURL;
            const songName = audioFile.name;

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
                const indexToRemove = selectedAudioFiles.findIndex(item => item.name === songName);
                if (indexToRemove !== -1) {
                    selectedAudioFiles.splice(indexToRemove, 1);
                    // Save updated audio data
                    localStorage.setItem('selectedAudioFiles', JSON.stringify(selectedAudioFiles));
                }
            });

            // Append the audio element, song name, and remove button to the container
            audioItemContainer.appendChild(newAudioElement);
            audioItemContainer.appendChild(songNameParagraph);
            audioItemContainer.appendChild(removeButton);

            // Append the new audio element container to the main container
            audioContainer.appendChild(audioItemContainer);
        }
    }
}

// Load and display audio data when the page loads
loadAndDisplayAudioData();

function handleAudioFile() {
    const audioFileInput = document.getElementById('audioFile');
    const selectedFile = audioFileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        const songName = selectedFile.name;

        // Load existing audio data from localStorage
        const savedData = localStorage.getItem('selectedAudioFiles');
        const selectedAudioFiles = savedData ? JSON.parse(savedData) : [];

        // Check if the selected file has already been chosen
        if (!selectedAudioFiles.some(item => item.name === songName)) {
            // Add the selected file to the array
            selectedAudioFiles.push({ name: songName, objectURL });
            // Save updated audio data
            localStorage.setItem('selectedAudioFiles', JSON.stringify(selectedAudioFiles));
            // Display the updated audio data
            loadAndDisplayAudioData();
        } else {
            // Display an error message or provide feedback to the user
            alert('This audio file has already been chosen.');
        }
    }

    // Clear the file input to allow selecting the same file again
    audioFileInput.value = '';
}
