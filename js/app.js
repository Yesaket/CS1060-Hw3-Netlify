// Sample tasks for demonstration
const sampleTasks = [
    {
        id: 1,
        title: 'Math Homework',
        course: 'Calculus 101',
        dueDate: '2025-03-01',
        priority: 'high',
        description: 'Complete problems 1-20 from Chapter 5: Differential Equations',
        estimatedTime: 120, // in minutes
        requirements: [
            'Show all work clearly',
            'Use proper mathematical notation',
            'Include graphs where necessary'
        ],
        resources: [
            'Textbook Chapter 5',
            'Class notes from Feb 14',
            'Online calculator for verification'
        ]
    },
    {
        id: 2,
        title: 'Literature Essay',
        course: 'Modern Literature',
        dueDate: '2025-03-05',
        priority: 'medium',
        description: 'Write a 2000-word analytical essay on the themes of identity in The Great Gatsby',
        estimatedTime: 180, // in minutes
        requirements: [
            'MLA format',
            'Minimum 3 scholarly sources',
            'Include textual evidence'
        ],
        resources: [
            'The Great Gatsby novel',
            'Class discussion notes',
            'Writing center guidelines'
        ]
    }
];

// Format minutes into hours and minutes
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

// Show task details modal
function showTaskDetails(task) {
    const modal = document.getElementById('taskModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${task.title}</h2>
            <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body">
            <div class="task-detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Course</span>
                    <span class="detail-value">${task.course}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Due Date</span>
                    <span class="detail-value">${task.dueDate}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Priority</span>
                    <span class="priority-badge ${task.priority}">${task.priority}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Estimated Time</span>
                    <span class="detail-value">${formatTime(task.estimatedTime)}</span>
                </div>
            </div>
            
            <div class="task-description">
                <h3>Description</h3>
                <p>${task.description}</p>
            </div>
            
            <div class="task-requirements">
                <h3>Requirements</h3>
                <ul>
                    ${task.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            
            <div class="task-resources">
                <h3>Resources</h3>
                <ul>
                    ${task.resources.map(res => `<li>${res}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Close modal when clicking the X button
    const closeBtn = modalContent.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
}

// Initialize task cards on home page
function initHomePage() {
    const taskContainer = document.getElementById('taskContainer');
    if (taskContainer) {
        sampleTasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.innerHTML = `
                <h3>${task.title}</h3>
                <p>Course: ${task.course}</p>
                <p>Due: ${task.dueDate}</p>
                <span class="priority-badge ${task.priority}">${task.priority}</span>
                <div class="task-preview">
                    <span>Estimated time: ${formatTime(task.estimatedTime)}</span>
                    <button class="view-details-btn">View Details</button>
                </div>
            `;
            
            // Add click handler for the view details button
            taskCard.querySelector('.view-details-btn').onclick = () => showTaskDetails(task);
            taskContainer.appendChild(taskCard);
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('taskModal');
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Study planner functionality
function addSession() {
    const subject = document.getElementById('sessionSubject').value;
    const time = document.getElementById('sessionTime').value;
    const duration = document.getElementById('sessionDuration').value;

    if (subject && time && duration) {
        const sessionList = document.getElementById('sessionList');
        const sessionItem = document.createElement('div');
        sessionItem.className = 'session-item';
        sessionItem.innerHTML = `
            <div class="session-details">
                <h4>${subject}</h4>
                <p>${new Date(time).toLocaleString()} • ${duration} minutes</p>
            </div>
        `;
        sessionList.appendChild(sessionItem);
        
        // Clear inputs
        document.getElementById('sessionSubject').value = '';
        document.getElementById('sessionTime').value = '';
        document.getElementById('sessionDuration').value = '';
    }
}

// File upload handling
function initUploadPage() {
    const fileInput = document.querySelector('.file-input');
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('uploadStatus');

    fileInput.addEventListener('change', (e) => {
        // Enable submit button when file is selected
        submitBtn.disabled = !e.target.files.length;
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        statusDiv.textContent = 'Feature coming soon! We\'ll notify you when syllabus processing is available.';
        statusDiv.style.color = '#4a90e2';
        // Clear file input and disable button
        fileInput.value = '';
        submitBtn.disabled = true;
    });
}

// Initialize appropriate page components
document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initUploadPage();
});
