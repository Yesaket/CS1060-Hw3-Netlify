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

// Sample extracted classes data
const sampleClasses = [
    {
        id: 1,
        code: 'CS 101',
        name: 'Introduction to Computer Science',
        instructor: 'Dr. Sarah Johnson',
        schedule: {
            days: ['Monday', 'Wednesday'],
            time: '10:00 AM - 11:20 AM',
            location: 'Tech Building Room 302'
        },
        semester: 'spring2025',
        assignments: [
            {
                type: 'Quiz',
                title: 'Variables and Data Types Quiz',
                date: '2025-03-10',
                description: 'Quiz covering Chapter 1-2 material'
            },
            {
                type: 'Assignment',
                title: 'Programming Assignment 1',
                date: '2025-03-15',
                description: 'Basic programming concepts implementation'
            },
            {
                type: 'Reading',
                title: 'Introduction to Algorithms',
                date: '2025-03-08',
                description: 'Read Chapter 3 before class'
            },
            {
                type: 'Exam',
                title: 'Midterm Examination',
                date: '2025-04-05',
                description: 'Covers all material from weeks 1-7'
            }
        ]
    },
    {
        id: 2,
        code: 'MATH 201',
        name: 'Calculus II',
        instructor: 'Prof. Michael Chen',
        schedule: {
            days: ['Tuesday', 'Thursday'],
            time: '2:00 PM - 3:20 PM',
            location: 'Science Center Room 405'
        },
        semester: 'spring2025',
        assignments: [
            {
                type: 'Quiz',
                title: 'Integration Techniques Quiz',
                date: '2025-03-12',
                description: 'Quiz on various integration methods'
            },
            {
                type: 'Assignment',
                title: 'Problem Set 2',
                date: '2025-03-18',
                description: 'Problems from Chapter 4: Series and Sequences'
            },
            {
                type: 'Reading',
                title: 'Taylor Series',
                date: '2025-03-20',
                description: 'Read Chapter 5.1-5.3 before class'
            },
            {
                type: 'Exam',
                title: 'Exam 1',
                date: '2025-04-10',
                description: 'Covering integration techniques and series'
            }
        ]
    },
    {
        id: 3,
        code: 'ENG 215',
        name: 'Contemporary Literature',
        instructor: 'Dr. Emily Martinez',
        schedule: {
            days: ['Monday', 'Wednesday', 'Friday'],
            time: '1:00 PM - 1:50 PM',
            location: 'Liberal Arts Building Room 201'
        },
        semester: 'spring2025',
        assignments: [
            {
                type: 'Quiz',
                title: 'Reading Comprehension Quiz',
                date: '2025-03-05',
                description: 'Quiz on The Great Gatsby chapters 1-3'
            },
            {
                type: 'Assignment',
                title: 'Literary Analysis Essay',
                date: '2025-03-25',
                description: '1500-word analysis of modernist themes'
            },
            {
                type: 'Reading',
                title: 'The Great Gatsby',
                date: '2025-03-03',
                description: 'Complete chapters 4-6 for discussion'
            },
            {
                type: 'Exam',
                title: 'Midterm Paper',
                date: '2025-04-15',
                description: 'Comparative analysis of two novels'
            }
        ]
    }
];

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

// Show class assignments modal
function showClassAssignments(classInfo) {
    const modal = document.getElementById('assignmentsModal');
    const modalContent = document.getElementById('assignmentsModalContent');

    // Group assignments by type
    const assignmentsByType = classInfo.assignments.reduce((acc, assignment) => {
        if (!acc[assignment.type]) {
            acc[assignment.type] = [];
        }
        acc[assignment.type].push(assignment);
        return acc;
    }, {});

    modalContent.innerHTML = `
        <div class="modal-header assignments-header">
            <div>
                <h2>${classInfo.code} - ${classInfo.name}</h2>
                <p class="subtitle">${classInfo.instructor}</p>
            </div>
            <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body assignments-body">
            <div class="assignments-grid">
                ${Object.entries(assignmentsByType).map(([type, assignments]) => `
                    <div class="assignment-section">
                        <h3 class="assignment-type">${type}s</h3>
                        <div class="assignment-list">
                            ${assignments.map(assignment => `
                                <div class="assignment-card">
                                    <div class="assignment-card-header">
                                        <h4>${assignment.title}</h4>
                                        <span class="due-date">Due: ${formatDate(assignment.date)}</span>
                                    </div>
                                    <p class="assignment-description">${assignment.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
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
    const fileInput = document.querySelector('.file-input');
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('uploadStatus');
    const modal = document.getElementById('classesModal');
    const closeBtn = modal.querySelector('.close-modal');
    const searchInput = document.getElementById('classSearch');
    const semesterFilter = document.getElementById('semesterFilter');
    const confirmBtn = document.getElementById('confirmClasses');
    const editBtn = document.getElementById('editClasses');

    fileInput.addEventListener('change', (e) => {
        submitBtn.disabled = !e.target.files.length;
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Show the modal with extracted classes
        modal.style.display = 'block';
        updateClassesList();
    });

    // Close modal when clicking X button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle search and filter
    searchInput.addEventListener('input', (e) => {
        updateClassesList(e.target.value, semesterFilter.value);
    });

    semesterFilter.addEventListener('change', (e) => {
        updateClassesList(searchInput.value, e.target.value);
    });

    // Handle confirm and edit buttons
    confirmBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        statusDiv.textContent = 'Classes successfully added to your calendar!';
        statusDiv.style.color = '#16a34a';
        fileInput.value = '';
        submitBtn.disabled = true;
    });

    editBtn.addEventListener('click', () => {
        statusDiv.textContent = 'Edit mode enabled. Click on any class to modify its details.';
        statusDiv.style.color = '#4f46e5';
    });
}

// Initialize appropriate page components
document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initUploadPage();
});
