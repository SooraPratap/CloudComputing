// Sample pipeline list
let pipelineList = [];

// Function to display pipeline list
function displayPipelineList() {
  const pipelineItems = document.getElementById('pipeline-items');
  pipelineItems.innerHTML = '';

  pipelineList.forEach(pipeline => {
    const listItem = document.createElement('li');
    listItem.textContent = pipeline;
    pipelineItems.appendChild(listItem);
  });
}

// Function to create a new pipeline
function createPipeline() {
  const projectNameInput = document.getElementById('project-name');

  const projectName = projectNameInput.value;

  if (projectName) {
    // Add project name to pipeline list
    pipelineList.push(projectName);

    // Update UI
    displayPipelineList();

    // Clear input field
    projectNameInput.value = '';
  }
}

// Event listener for create pipeline button
const createPipelineBtn = document.getElementById('create-pipeline-btn');
createPipelineBtn.addEventListener('click', createPipeline);

// Initial display
displayPipelineList();
