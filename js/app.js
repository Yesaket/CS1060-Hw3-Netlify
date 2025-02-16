// Sample tasks for demonstration
const sampleTasks = [
    {
        title: 'Math Homework',
        course: 'Calculus 101',
        dueDate: '2025-03-01',
        priority: 'high'
    },
    {
        title: 'Literature Essay',
        course: 'Modern Literature',
        dueDate: '2025-03-05',
        priority: 'medium'
    }
];

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
            `;
            taskContainer.appendChild(taskCard);
        });
    }
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

// Initialize appropriate page components
document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
});
