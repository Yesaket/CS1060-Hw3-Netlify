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

// Sample extracted class data
const sampleClass = {
    code: 'CS 101',
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Sarah Johnson',
    schedule: {
        days: ['Monday', 'Wednesday'],
        time: '10:00 AM - 11:20 AM',
        location: 'Tech Building Room 302',
        firstDay: '2025-01-13',
        lastDay: '2025-05-02',
        term: 'Spring 2025'
    },
    assignments: [
        {
            type: 'Quiz',
            title: 'Variables and Data Types Quiz',
            date: '2025-03-10',
            description: 'Quiz covering Chapter 1-2 material',
            estimatedTime: '1 hour'
        },
        {
            type: 'Assignment',
            title: 'Programming Assignment 1',
            date: '2025-03-15',
            description: 'Basic programming concepts implementation',
            estimatedTime: '4 hours'
        },
        {
            type: 'Reading',
            title: 'Introduction to Algorithms',
            date: '2025-03-08',
            description: 'Read Chapter 3 before class',
            estimatedTime: '2 hours'
        },
        {
            type: 'Exam',
            title: 'Midterm Examination',
            date: '2025-04-05',
            description: 'Covers all material from weeks 1-7',
            estimatedTime: '3 hours'
        }
    ]
};

// Format date to a more readable format
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Display extracted assignments
function displayExtractedAssignments(classInfo) {
    const modal = document.getElementById('classesModal');
    const modalContent = modal.querySelector('.modal-content');

    // Sort assignments by date
    const sortedAssignments = [...classInfo.assignments].sort((a, b) => new Date(a.date) - new Date(b.date));

    modalContent.innerHTML = `
        <div class="modal-header assignments-header">
            <div>
                <h2>${classInfo.code} - ${classInfo.name}</h2>
                <p class="subtitle">${classInfo.instructor}</p>
            </div>
            <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body assignments-body">
            <div class="class-schedule">
                <div class="section-header">
                    <h3>Class Schedule</h3>
                    <button class="edit-button" id="editClassSchedule">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                        </svg>
                        Edit
                    </button>
                </div>
                <div class="schedule-grid">
                    <div class="schedule-item">
                        <span class="schedule-label">Term</span>
                        <span class="schedule-value">${classInfo.schedule.term}</span>
                    </div>
                    <div class="schedule-item">
                        <span class="schedule-label">Days</span>
                        <span class="schedule-value">${classInfo.schedule.days.join(', ')}</span>
                    </div>
                    <div class="schedule-item">
                        <span class="schedule-label">Time</span>
                        <span class="schedule-value">${classInfo.schedule.time}</span>
                    </div>
                    <div class="schedule-item">
                        <span class="schedule-label">Location</span>
                        <span class="schedule-value">${classInfo.schedule.location}</span>
                    </div>
                    <div class="schedule-item">
                        <span class="schedule-label">First Day</span>
                        <span class="schedule-value">${formatDate(classInfo.schedule.firstDay)}</span>
                    </div>
                    <div class="schedule-item">
                        <span class="schedule-label">Last Day</span>
                        <span class="schedule-value">${formatDate(classInfo.schedule.lastDay)}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button id="addClassSchedule" class="secondary-button">Add Class Schedule to Calendar</button>
                    <span id="scheduleConfirmation" style="display: none; color: green;">Added to calendar!</span>
                </div>
            </div>
            <div class="section-divider"></div>
            <div class="assignments-section">
                <div class="section-header">
                    <h3>Tasks & Assignments</h3>
                    <button class="edit-button" id="editAssignments">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                        </svg>
                        Edit
                    </button>
                </div>
                <div class="assignments-list">
                    ${sortedAssignments.map(assignment => `
                        <div class="assignment-item">
                            <label class="assignment-checkbox">
                                <input type="checkbox" checked>
                                <div class="assignment-content">
                                    <div class="assignment-main">
                                        <h4>${assignment.title}</h4>
                                        <span class="assignment-meta">
                                            <span class="badge ${assignment.type.toLowerCase()}">${assignment.type}</span>
                                            <span class="due-date">Due: ${formatDate(assignment.date)}</span>
                                            <span class="estimated-time">${assignment.estimatedTime}</span>
                                        </span>
                                    </div>
                                    <p class="assignment-description">${assignment.description}</p>
                                </div>
                            </label>
                        </div>
                    `).join('')}
                </div>
                <div class="modal-actions">
                    <button id="addToCalendar" class="primary-button">Add Selected Tasks to Calendar</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    // Close modal when clicking the X button
    const closeBtn = modalContent.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Handle adding tasks to calendar
    const addButton = modalContent.querySelector('#addToCalendar');
    addButton.addEventListener('click', () => {
        const selectedTasks = Array.from(modalContent.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => {
                const item = checkbox.closest('.assignment-item');
                return {
                    title: item.querySelector('h4').textContent,
                    date: item.querySelector('.due-date').textContent.replace('Due: ', ''),
                    type: item.querySelector('.badge').textContent,
                    description: item.querySelector('.assignment-description').textContent,
                    estimatedTime: item.querySelector('.estimated-time').textContent
                };
            });
        
        // Here you would integrate with your calendar system
        console.log('Adding tasks:', selectedTasks);
        modal.style.display = 'none';
        document.getElementById('uploadStatus').textContent = 'Tasks successfully added to your calendar!';
        document.getElementById('uploadStatus').style.color = '#16a34a';
    });
}

// Create class card element
function createClassCard(classInfo) {
    const card = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
        <div class="class-header">
            <h3>${classInfo.code} - ${classInfo.name}</h3>
            <span class="semester-badge">${classInfo.semester}</span>
        </div>
        <div class="class-details">
            <p><strong>Instructor:</strong> ${classInfo.instructor}</p>
            <p><strong>Schedule:</strong> ${classInfo.schedule.days.join(', ')}</p>
            <p><strong>Time:</strong> ${classInfo.schedule.time}</p>
            <p><strong>Location:</strong> ${classInfo.schedule.location}</p>
        </div>
        <button class="view-assignments-btn">View Assignments & Due Dates</button>
    `;

    // Add click handler for viewing assignments
    card.querySelector('.view-assignments-btn').onclick = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        showClassAssignments(classInfo);
    };

    return card;
}

// Filter classes
function filterClasses(searchText, semester) {
    return sampleClasses.filter(classInfo => {
        const matchesSearch = searchText === '' || 
            classInfo.name.toLowerCase().includes(searchText.toLowerCase()) ||
            classInfo.code.toLowerCase().includes(searchText.toLowerCase());
        const matchesSemester = semester === 'all' || classInfo.semester === semester;
        return matchesSearch && matchesSemester;
    });
}

// Update classes list
function updateClassesList(searchText = '', semester = 'all') {
    const classesList = document.getElementById('classesList');
    const filteredClasses = filterClasses(searchText, semester);
    
    classesList.innerHTML = '';
    if (filteredClasses.length === 0) {
        classesList.innerHTML = '<p class="no-results">No classes found matching your criteria.</p>';
        return;
    }
    
    filteredClasses.forEach(classInfo => {
        classesList.appendChild(createClassCard(classInfo));
    });
}

// File upload handling
function initUploadPage() {
    // Add event listener for Add Class Schedule button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'addClassSchedule') {
            const confirmation = document.getElementById('scheduleConfirmation');
            if (confirmation) {
                confirmation.style.display = 'inline';
            }
        }
    });
    const fileInput = document.querySelector('.file-input');
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('uploadStatus');

    fileInput.addEventListener('change', (e) => {
        submitBtn.disabled = !e.target.files.length;
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Show the modal with extracted assignments
        displayExtractedAssignments(sampleClass);
    });
}

// Modal Functions
function showImportModal() {
    const modal = document.getElementById('importModal');
    modal.style.display = 'flex';
}

function showExportModal() {
    const modal = document.getElementById('exportModal');
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    
    // Reset the modal state
    if (modalId === 'importModal') {
        document.getElementById('importUrlInput').style.display = 'none';
        document.getElementById('importFileInput').style.display = 'none';
    } else if (modalId === 'exportModal') {
        document.getElementById('exportUrlOutput').style.display = 'none';
    }
}

function handleImportOption(option) {
    const urlInput = document.getElementById('importUrlInput');
    const fileInput = document.getElementById('importFileInput');
    
    if (option === 'url') {
        urlInput.style.display = 'flex';
        fileInput.style.display = 'none';
    } else {
        urlInput.style.display = 'none';
        fileInput.style.display = 'flex';
    }
}

function handleExportOption(option) {
    const urlOutput = document.getElementById('exportUrlOutput');
    
    if (option === 'url') {
        urlOutput.style.display = 'flex';
        // Generate a sample URL - in a real app, this would be your actual calendar sharing URL
        document.getElementById('exportUrl').value = 'https://example.com/calendar/share/abc123';
    } else {
        // Trigger calendar download
        downloadCalendar();
    }
}

function importFromUrl() {
    const url = document.getElementById('importUrl').value;
    // Here you would implement the actual calendar import logic
    console.log('Importing calendar from URL:', url);
    closeModal('importModal');
}

function importFromFile() {
    const file = document.getElementById('calendarFile').files[0];
    if (file) {
        // Here you would implement the actual file import logic
        console.log('Importing calendar from file:', file.name);
        closeModal('importModal');
    }
}

function downloadCalendar() {
    // Here you would implement the actual calendar download logic
    console.log('Downloading calendar...');
    // For demonstration, create a sample calendar file download
    const dummyContent = 'BEGIN:VCALENDAR\nVERSION:2.0\nEND:VCALENDAR';
    const blob = new Blob([dummyContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calendar.ics';
    a.click();
    window.URL.revokeObjectURL(url);
}

function copyUrl() {
    const urlInput = document.getElementById('exportUrl');
    urlInput.select();
    document.execCommand('copy');
    // Show feedback (you might want to add a toast notification here)
    console.log('URL copied to clipboard');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Initialize calendar page
function initCalendarPage() {
    // Add any calendar-specific initialization here
    console.log('Calendar page initialized');
}

// Initialize appropriate page components
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    if (currentPage.includes('index.html')) {
        initHomePage();
    } else if (currentPage.includes('upload.html')) {
        initUploadPage();
    } else if (currentPage.includes('calendar.html')) {
        initCalendarPage();
    }
});
